/**
 * Helper to ensure assets (images, logos, icons) load properly both in local dev ('/')
 * and on GitHub Pages ('/Deutsch-House-Termiz/').
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  // Avoid double prefixing if base path is already included
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
