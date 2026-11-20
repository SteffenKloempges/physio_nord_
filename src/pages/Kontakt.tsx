import Terminkarte from "../components/Terminkarte";

export default function Kontakt() {
  return (
    <>
      <header className="container page-head">
        <h1>Kontakt</h1>
      </header>
      <section className="container contact" aria-label="Kontaktdaten">
        <div className="contact__card">
          <Terminkarte />
        </div>
        <div className="contact__facts" data-reveal>
          <h2>Adresse</h2>
          <dl className="facts">
            <div>
              <dt>Praxis</dt>
              <dd>Physio Nord, by Paul<br />Industriestraße 9<br />59457 Werl</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a className="fig" href="tel:029228809021">02922 - 88 09 021</a></dd>
            </div>
            <div>
              <dt>Fax</dt>
              <dd><a className="fig" href="tel:029228809022">02922 - 88 09 022</a></dd>
            </div>
            <div>
              <dt>E-Mail</dt>
              <dd><a href="mailto:info@physio-nord-werl.de">info@physio-nord-werl.de</a></dd>
            </div>
            <div>
              <dt>Öffnungszeiten</dt>
              <dd>Montag bis Donnerstag, <span className="fig">8:00</span> bis <span className="fig">19:00</span> Uhr<br />Freitag, <span className="fig">8:00</span> bis <span className="fig">14:00</span> Uhr<br />Termine nach Vereinbarung</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="container section--s">
        <figure className="photo wide" data-reveal="zoom">
          <img
            src="/images/praxis/DSE08890.jpg"
            alt="Wartebereich mit Stühlen"
            width="1620"
            height="1080"
            loading="lazy"
          />
        </figure>
      </div>
    </>
  );
}
