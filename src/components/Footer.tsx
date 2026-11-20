import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="colophon">
      <div className="container">
        <div className="colophon__grid">
          <div className="colophon__brand">
            <img src="/images/logo_physio_nord_werl.png" alt="" width="56" height="56" />
            <p>
              <strong>Physio Nord</strong>
              by Paul
            </p>
          </div>
          <div className="colophon__col">
            <h2 className="colophon__label">Adresse</h2>
            <address>
              Praxis für Physiotherapie<br />
              Industriestraße 9<br />
              59457 Werl
            </address>
          </div>
          <div className="colophon__col">
            <h2 className="colophon__label">Kontakt</h2>
            <dl className="colophon__dl">
              <div><dt>Telefon</dt><dd><a className="fig" href="tel:029228809021">02922 88 09 021</a></dd></div>
              <div><dt>Fax</dt><dd className="fig">02922 88 09 022</dd></div>
              <div><dt>E-Mail</dt><dd><a href="mailto:info@physio-nord-werl.de">info@physio-nord-werl.de</a></dd></div>
            </dl>
          </div>
          <div className="colophon__col">
            <h2 className="colophon__label">Öffnungszeiten</h2>
            <p>
              Montag bis Donnerstag<br />
              <span className="fig">8:00</span> bis <span className="fig">19:00</span> Uhr<br />
              Freitag<br />
              <span className="fig">8:00</span> bis <span className="fig">14:00</span> Uhr<br />
              Termine nach Vereinbarung
            </p>
          </div>
        </div>
        <div className="colophon__base">
          <p>&copy; {new Date().getFullYear()} Physio Nord. Alle Rechte vorbehalten.</p>
          <ul className="colophon__links">
            <li><Link to="/kontakt">Kontakt</Link></li>
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
