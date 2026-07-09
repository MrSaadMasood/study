import type { Resource } from '../types/schedule';

/** Local HTML prep documents served from /public/docs */
export const LOCAL_DOC_PATHS = {
  schedule: '/docs/00-master-schedule.html',
  systemDesign: '/docs/01-system-design.html',
  backend: '/docs/02-backend-nodejs.html',
  databases: '/docs/03-databases.html',
  dsa: '/docs/04-dsa-algorithms.html',
  react: '/docs/05-react-frontend.html',
  behavioral: '/docs/06-behavioral.html',
  go: '/docs/07-go-differentiator.html',
} as const;

export function prepDoc(
  path: string,
  title: string,
  note = 'Your prep doc — primary reference for this session',
): Resource {
  return { title, url: path, note };
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
