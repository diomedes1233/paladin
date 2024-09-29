import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      title: 'Home',  // Cambiado de text a title
      links: [
        {
          text: 'Home',
          href: getPermalink('/'),
        },
      ],
    },
    {
      title: 'Pages',  // Cambiado de text a title
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      title: 'Blog',  // Cambiado de text a title
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
  actions: [
    { text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Home',
      links: [  // Cambiado de text y href a links
        {
          text: 'Home',
          href: getPermalink('/'),
        },
      ],
    },
    {
      title: 'Pages',
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      title: 'Blog',
      links: [
        { text: 'Docs', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/3112799550' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:info@paladin.build' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/luifer991/paladin' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/your-linkedin-profile' },
  ],
  footNote: `
    <a class="flex items-center" href={getHomePermalink()}>
      <img class="w-16 h-auto" src="/src/assets/images/hero-image.png" alt="logo paladin dot build" />
    </a>
  `,
};
