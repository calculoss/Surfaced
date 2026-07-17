// Prefixes site-internal paths with the configured base so the site works
// both at the domain root and under a project subpath. Same-page anchors
// pass through untouched.
export function withBase(path) {
  if (path.startsWith('#')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}` || '/';
}
