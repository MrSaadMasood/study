import { Link, Outlet, useLocation } from 'react-router-dom';

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="app-header__brand">
          <span className="app-header__logo">IP</span>
          <span>Interview Prep</span>
        </Link>
        <nav className="app-header__nav">
          <Link to="/" className={isHome ? 'active' : ''}>
            Schedule
          </Link>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        8-week structured prep · Progress saved locally in your browser
      </footer>
    </div>
  );
}
