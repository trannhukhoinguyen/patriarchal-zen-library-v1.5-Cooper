

export const siteConfig = {
  name: 'Tổ Sư Thiền',
  description: 'Premium Astro Boilerplate for explorers.',
  logo: {
    src: '/logo.svg',
    srcDark: '/logo.svg',       // Used when strategy is 'switch'
    alt: 'Tổ Sư Thiền Logo',
    strategy: 'invert' as 'invert' | 'switch' | 'static', // 'invert' | 'switch' | 'static'
  },
  ogImage: '/og-image.webp',
  primaryColor: '#00008B', // Default primary color
  search: {
    enabled: true,
  },
  announcement: {
    enabled: true,
    id: 'release_v2_0_1', // Change this ID to reshow the banner
    link: '/changelog',
    localizeLink: true, // Set to true to apply i18n routing to the link, false for external/absolute links
  },
  blog: {
    postsPerPage: 6,
  },
  contact: {
    email: {
      support: 'support@interstellar.com',
      sales: 'sales@interstellar.com',
    },
    phone: {
      main: '+1 (555) 123-4567',
      label: 'Mon-Fri 9am-6pm PST'
    },
    address: {
      city: 'Endurance',
      full: 'Interstellar Space Station'
    }
  },
  analytics: {
    alwaysLoad: import.meta.env.ANALYTICS_ALWAYS_LOAD === 'true',
    vendors: {
      googleAnalytics: {
        id: import.meta.env.GA_ID || '',
        enabled: import.meta.env.GA_ENABLED === 'true',
      },
      rybbit: {
        id: import.meta.env.RYBBIT_ID || '',
        src: import.meta.env.RYBBIT_SRC || 'https://rybbit.example.com/api/script.js',
        enabled: import.meta.env.RYBBIT_ENABLED === 'true',
      },
      umami: {
        id: import.meta.env.UMAMI_ID || '',
        src: import.meta.env.UMAMI_SRC || 'https://analytics.umami.is/script.js',
        enabled: import.meta.env.UMAMI_ENABLED === 'true',
      },
    },
  },
  dateOptions: {
    localeMapping: {
        'vi': 'vi-VN', // Example: Force VN
        'en': 'en-GB', // Example: Force UK English date format
        'fr': 'fr-FR', // Example: Force FR
        'zh': 'zh-CN', // Example: Force CN
    }
  },
	faq: [
		{ q: 'Is there a free plan?', a: 'Yes. The Free plan is free forever: up to 3 active clients, unlimited invoices, card and bank payments. PDFs carry a small Harbor line in the footer.' },
		{ q: 'What does Harbor cost once I grow?', a: 'Solo is $9 a month for unlimited clients, reminders, recurring invoices and expenses. Studio is $24 a month for teams of up to five. Both include a 30-day free trial; no card needed to start.' },
		{ q: 'Which payment methods can my clients use?', a: 'Card (Visa, Mastercard, Amex), bank transfer with the details printed on the invoice, and PayPal. Card payments cost 2.9% + $0.30; bank transfer and PayPal cost nothing extra from Harbor.' },
		{ q: 'Which currencies are supported?', a: '28 currencies, including EUR, USD, GBP, CAD, AUD, JPY, CHF, SEK, NOK, DKK, PLN, CZK, INR, SGD, HKD, NZD, BRL and MXN. You can bill each client in a different one.' },
		{ q: 'Can I import clients and old invoices?', a: 'Clients and invoices import from CSV, and directly from FreshBooks, Wave and Invoice Ninja. Imported invoices keep their original numbers and dates.' },
		{ q: 'Does it handle VAT and sales tax?', a: 'Yes. Set a default rate per client, override it per line, and include VAT numbers on the PDF. EU reverse-charge wording is added automatically when both VAT numbers are present.' },
		{ q: 'Where is my data stored, and can I leave?', a: 'Data is stored in the EU (Frankfurt) with daily backups. Export everything as CSV and PDF at any time from Settings; deleting the account removes it within 30 days.' },
		{ q: 'Is there a mobile app?', a: 'Harbor is a web app that works on any phone, with offline drafts. Receipt capture uses the phone camera from the browser; there is nothing to install.' },
	],
};

export const NAV_LINKS = [
  {
    href: '/features',
    label: 'Product',
    children: [
        { href: '/features', label: 'Features', description: 'What makes us different', icon: 'Zap' },
        { href: '/pricing', label: 'Pricing', description: 'Plans for every team', icon: 'CreditCard' },
        { href: '/films', label: 'film', description: 'Phim Phật giáo', icon: 'Film', localize: false },
        { href: '/galleries', label: 'gallery', description: 'Kho ảnh', icon: 'Image', localize: false },
    ]
  },
  {
    href: '/docs',
    label: 'Resources',
    children: [
        { href: '/enlighteners', label: 'enlightener', description: 'Giác giả', icon: 'Sun', localize: false },
        { href: '/koans', label: 'koan', description: 'Công án', icon: 'Stone', localize: false },
        { href: '/codices', label: 'Dược điển', description: 'Dược điển', icon: 'Herbal', localize: false },
        { href: '/blog', label: 'Blog', description: 'Latest updates & guides', icon: 'Newspaper' },
        { href: '/changelog', label: 'Changelog', description: 'New features & fixes', icon: 'FileClock' },
    ]
  },
  {
    href: '/portfolio',
    label: 'Work',
    children: [
        { href: '/portfolio', label: 'All Projects', description: 'Our complete portfolio', icon: 'LayoutGrid' },
        { href: '/design', label: 'Design System', description: 'Style guide & tokens', icon: 'Palette' },
        { href: '/faqs', label: 'FAQS', description: 'FAQS', icon: 'Palette' },
        { href: '/merits', label: 'Tạo phước', description: 'Tạo phướcs', icon: 'Palette' },
        { href: '/practices', label: 'Thực hành', description: 'Thực hành', icon: 'Palette' },
        { href: '/symptoms', label: 'Triệu chứng', description: 'Triệu chứng', icon: 'Palette' },
    ]
  },
  {
    href: '/places',
    label: 'Place',
    children: [
      { href: '/pagodas', label: 'Pagoda', description: 'Thiền viện', icon: 'Building2', localize: false  },
      { href: '/eatery', label: 'Eatery', description: 'Quán chay', icon: 'Building2', localize: false  },
      { href: '/places', label: 'Place', description: 'Địa danh', icon: 'Building2', localize: false  },
    ]
  },
  {
    href: '/demo/home-centered',
    label: 'Demos',
    localize: false,
    children: [
        { href: '/demo/home-centered', label: 'Home Centered', description: 'Default centered hero', icon: 'LayoutTemplate', localize: false },
        { href: '/demo/home-split', label: 'Home Split', description: 'Split-screen hero with orbit visual', icon: 'Columns2', localize: false },
        { href: '/demo/home-cinematic', label: 'Home Cinematic', description: 'Full-bleed cinematic hero', icon: 'Film', localize: false },
        { href: '/demo/home-terminal', label: 'Home Terminal', description: 'Mission-readout hero with stats', icon: 'Terminal', localize: false },
    ]
  },
];

export const ACTION_LINKS = {
  primary: { label: 'Get Started', href: '/docs/getting-started' },
  social: {
    twitter: 'https://twitter.com/gladtek',
    linkedin: 'https://linkedin.com/company/gladtek',
    github: 'https://github.com/gladtek',
    youtube: 'https://youtube.com/@gladtek',
    facebook: 'https://facebook.com/gladtek'

  }
};

export const FOOTER_LINKS = {
  product: {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/about', label: 'About' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/changelog', label: 'Changelog' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy', localize: false },
      { href: '/terms', label: 'Terms', localize: false }
    ],
  },
};
