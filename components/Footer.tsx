const footerLinks = [
  ['Home', '/'],
  ['Product', '/product/'],
  ['Features', '/features/'],
  ['How It Works', '/how-it-works/'],
  ['Use Cases', '/use-cases/'],
  ['Resources', '/resources/'],
  ['Task paralysis guide', '/task-paralysis-guide/'],
  ['ADHD task initiation', '/adhd-task-initiation/'],
  ['Pricing', '/pricing/'],
  ['FAQ', '/faq/'],
  ['Contact', '/contact/'],
  ['Privacy', '/privacy/'],
  ['Terms', '/terms/'],
  ['Accessibility', '/accessibility/'],
  ['Evidence & QA', '/evidence/']
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="/" aria-label="Gomentum home">
            <span className="brand-mark" aria-hidden="true">G</span>
            <span>Gomentum</span>
          </a>
          <p>Start tasks when starting feels impossible. One small step. Real momentum.</p>
          <p className="helper">Gomentum is a productivity support tool, not medical or therapy advice.</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-links">
          {footerLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
    </footer>
  );
}
