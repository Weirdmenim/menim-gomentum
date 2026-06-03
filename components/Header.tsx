const nav = [
  ['Product', '/product/'],
  ['How It Works', '/how-it-works/'],
  ['Use Cases', '/use-cases/'],
  ['Resources', '/resources/'],
  ['Pricing', '/pricing/'],
  ['FAQ', '/faq/']
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Gomentum home">
          <span className="brand-mark" aria-hidden="true">G</span>
          <span>Gomentum</span>
        </a>
        <button className="menu-button" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="nav-cta" href="/#demo">Start One Small Step</a>
        </nav>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden>
        {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <a href="/contact/">Contact</a>
        <a href="/evidence/">Evidence & QA</a>
        <a href="/#demo" className="nav-cta">Start One Small Step</a>
      </nav>
    </header>
  );
}
