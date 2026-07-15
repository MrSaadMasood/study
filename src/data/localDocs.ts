import type { Resource } from '../types/schedule';

/**
 * Prefix a public asset path with Vite's configured base
 * (`/study/` — required for GitHub Pages at MrSaadMasood.github.io/study).
 */
export function withBaseUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;

  // Vite always emits BASE_URL with a trailing slash when base ends with /
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  if (path.startsWith(normalizedBase)) return path;

  return `${normalizedBase}${path.replace(/^\//, '')}`;
}

// Build-time constants: full paths like `/study/docs/05-react-frontend.html`
const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/** Local HTML prep documents served from /public/docs */
export const LOCAL_DOC_PATHS = {
  schedule: `${base}docs/00-master-schedule.html`,
  systemDesign: `${base}docs/01-system-design.html`,
  backend: `${base}docs/02-backend-nodejs.html`,
  databases: `${base}docs/03-databases.html`,
  dsa: `${base}docs/04-dsa-algorithms.html`,
  react: `${base}docs/05-react-frontend.html`,
  behavioral: `${base}docs/06-behavioral.html`,
  go: `${base}docs/07-go-differentiator.html`,
} as const;

export function prepDoc(
  path: string,
  title: string,
  note = 'Your prep doc — primary reference for this session',
): Resource {
  return { title, url: withBaseUrl(path), note };
}

export function resolveDocRef(ref: string): Resource | null {
  const docMatch = ref.match(/Doc\s+0?(\d+)/i);
  if (!docMatch) return null;

  const num = docMatch[1];
  const pathMap: Record<string, string> = {
    '1': LOCAL_DOC_PATHS.systemDesign,
    '2': LOCAL_DOC_PATHS.backend,
    '3': LOCAL_DOC_PATHS.databases,
    '4': LOCAL_DOC_PATHS.dsa,
    '5': LOCAL_DOC_PATHS.react,
    '6': LOCAL_DOC_PATHS.behavioral,
    '7': LOCAL_DOC_PATHS.go,
  };

  const path = pathMap[num];
  if (!path) return null;

  return prepDoc(path, ref);
}
