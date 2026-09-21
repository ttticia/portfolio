/** A link shown in the hero and footer.
 *  `icon` is any name from src/components/Icon.astro */
export interface SocialLink {
  url: string;
  label: string;
  icon?:
    | 'github'
    | 'linkedin'
    | 'instagram'
    | 'email'
    | 'rss'
    | 'download'
    | 'arrow-right'
    | 'arrow-left'
    | 'sun'
    | 'moon';
}

/**
 * ─────────────────────────────────────────────────────────────
 *  Site identity — the one file you must edit first.
 *  Everything on the site (titles, meta tags, footer, hero
 *  social links) reads from here.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Your full name — used for <title> and meta tags */
  title: 'Tricia Ng',
  /** Short handle used after the dot in page titles ("About · triciang") */
  shortTitle: 'tricia_ng_portfolio',
  /** Default meta description for pages that don't set their own */
  description:
    'Software engineer and occasional traveler — writing about code and sharing photos from the road.',
  /** Your production URL — no trailing slash. Used for canonical URLs, OG tags, RSS and sitemap */
  url: 'https://ttticia.github.io',
  author: {
    name: 'Tricia Ng',
    email: 'ng.tricia2005@gmail.com',
    location: 'Singapore',
  },
  /** Shown in the hero and footer. Delete a line to remove it from both places.
   *  `icon` is any name from src/components/Icon.astro */
  socials: {
    github: { url: 'https://github.com/ttticia', label: 'GitHub', icon: 'github' },
    linkedin: { url: 'https://www.linkedin.com/in/tricia-ng-pr0f1l3/', label: 'LinkedIn', icon: 'linkedin' },
    instagram: { url: 'https://www.instagram.com', label: 'Instagram', icon: 'instagram' },
    email: { url: 'mailto:ng.tricia2005@gmail.com', label: 'Email', icon: 'email' },
  } satisfies Record<string, SocialLink>,
};

export type SocialKey = keyof typeof site.socials;

/**
 * Prefix a root-relative path ("/img/x.jpg") with the configured base
 * path (`base` in astro.config.mjs). Anything else — external URLs,
 * mailto:/tel: links, already-prefixed paths — passes through
 * untouched. Use it for every internal link and public/ asset so the
 * site works at a subpath (e.g. GitHub Pages project sites) as well as
 * at the domain root.
 */
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (!path.startsWith('/')) return path;
  if (path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
};
