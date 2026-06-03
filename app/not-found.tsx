export default function NotFound() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="section">
        <div className="container section-head narrow">
          <p className="eyebrow">Page not found</p>
          <h1>This page is not here.</h1>
          <p>Return home and start with one small step.</p>
          <a className="btn btn-primary" href="/">Go Home</a>
        </div>
      </section>
    </main>
  );
}
