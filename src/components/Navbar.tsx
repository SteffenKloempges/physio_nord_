import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Start', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Praxis', href: '/praxis' },
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="mast">
      <a className="skip" href="#main">Zum Inhalt springen</a>
      <div className="container mast__top">
        <p className="mast__where">Industriestraße 9, 59457 Werl</p>
        <Link to="/" className="mast__brand" aria-label="Physio Nord, zur Startseite">
          <img src="/images/logo_physio_nord_werl.png" alt="" width="56" height="56" />
          <span className="mast__name">
            Physio Nord
            <small>Praxis für Physiotherapie</small>
          </span>
        </Link>
        <a className="btn btn--card mast__act" href="tel:029228809021">
          Termin: <span className="fig">02922 88 09 021</span>
        </a>
        <button
          type="button"
          className="icon-btn mast__menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="drawer"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="visually-hidden">Menü öffnen</span>
          <Bars3Icon aria-hidden="true" />
        </button>
      </div>
      <nav aria-label="Hauptnavigation">
        <ul className="container mast__links">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink to={item.href} end={item.href === '/'}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div id="drawer" className="drawer" hidden={!mobileMenuOpen}>
        <button
          type="button"
          className="drawer__scrim"
          aria-label="Menü schließen"
          tabIndex={-1}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="drawer__panel" role="dialog" aria-modal="true" aria-label="Menü">
          <div className="drawer__head">
            <Link to="/" className="mast__brand" onClick={() => setMobileMenuOpen(false)}>
              <span className="mast__name">Physio Nord</span>
            </Link>
            <button type="button" className="icon-btn" onClick={() => setMobileMenuOpen(false)}>
              <span className="visually-hidden">Menü schließen</span>
              <XMarkIcon aria-hidden="true" />
            </button>
          </div>
          <ul className="drawer__links">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link to={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <a className="btn btn--ink" href="tel:029228809021">
            Anrufen: <span className="fig">02922 88 09 021</span>
          </a>
        </div>
      </div>
    </header>
  );
}
