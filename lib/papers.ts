import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';

const PAPERS_DIR = path.join(process.cwd(), 'content', 'papers');

export interface PaperMeta {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  affiliation?: string;
  date: string;
  abstract: string;
  abstractHtml: string;
  tags: string[];
  wordCount: number;
  readingTime: number;
}

export interface Paper extends PaperMeta {
  html: string;
}

function estimateReadingTime(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 250));
}

async function readPaperFile(slug: string) {
  const filePath = path.join(PAPERS_DIR, `${slug}.md`);
  const raw = await fs.readFile(filePath, 'utf-8');
  return matter(raw);
}

function renderInlineMarkdown(src: string): string {
  // Lightweight inline-only renderer for abstracts: *em*, **strong**, _em_
  // Escapes HTML first to prevent injection.
  const escaped = src
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return escaped
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
    .replace(/_([^_\n]+)_/g, '<em>$1</em>');
}

function metaFromFrontmatter(slug: string, data: Record<string, unknown>): PaperMeta {
  const wordCount = typeof data.wordCount === 'number' ? data.wordCount : 0;
  const abstract = String(data.abstract ?? '');
  return {
    slug,
    title: String(data.title ?? slug),
    subtitle: data.subtitle ? String(data.subtitle) : undefined,
    author: String(data.author ?? 'Anonymous'),
    affiliation: data.affiliation ? String(data.affiliation) : undefined,
    date: String(data.date ?? ''),
    abstract,
    abstractHtml: renderInlineMarkdown(abstract),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    wordCount,
    readingTime: estimateReadingTime(wordCount),
  };
}

export async function getAllPaperSlugs(): Promise<string[]> {
  const files = await fs.readdir(PAPERS_DIR);
  return files
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => f.replace(/\.md$/, ''));
}

export async function getAllPapers(): Promise<PaperMeta[]> {
  const slugs = await getAllPaperSlugs();
  const papers = await Promise.all(
    slugs.map(async (slug) => {
      const { data } = await readPaperFile(slug);
      return metaFromFrontmatter(slug, data);
    }),
  );
  return papers.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPaper(slug: string): Promise<Paper | null> {
  try {
    const { data, content } = await readPaperFile(slug);
    const file = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: false })
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
      .use(rehypeKatex)
      .use(rehypeStringify)
      .process(content);
    return {
      ...metaFromFrontmatter(slug, data),
      html: String(file),
    };
  } catch {
    return null;
  }
}
