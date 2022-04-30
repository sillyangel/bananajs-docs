export default {
  github: 'https://github.com/sillyangel/banananjs-docs',
  docsRepositoryBase: 'https://github.com/sillyangel/banananjs-docs/blob/master',
  titleSuffix: ' – Bananajs',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Bananajs</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        The Offical banananjs docs
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="@sillyangel/bananajs docs" />
      <meta name="og:description" content="@sillyangel/bananajs docs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://banana-corp.tk/icons/icon.png" />
      <meta name="twitter:site:domain" content="docs.banana-corp.tk" />
      <meta name="twitter:url" content="https://docs.banana-corp.tk" />
      <meta name="og:title" content="@sillyangel/bananajs docs" />
      <meta name="og:image" content="https://banana-corp.tk/icons/icon.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://banana-corp.tk/icons/icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://banana-corp.tk/icons/icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://banana-corp.tk/icons/icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="https://banana-corp.tk/icons/icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://banana-corp.tk/icons/icon.png"
      />
      <meta name="msapplication-TileImage" content="https://banana-corp.tk/icons/icon.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © sillyangel.</>,
  unstable_faviconGlyph: '👋',
}
