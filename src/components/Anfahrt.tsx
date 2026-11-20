export default function Anfahrt() {
  return (
    <section className="container section" aria-labelledby="visit-title">
      <div className="visit" data-reveal>
        <div className="visit__text">
          <h2 id="visit-title">So finden Sie uns</h2>
          <dl className="facts">
            <div>
              <dt>Adresse</dt>
              <dd>Industriestraße 9, 59457 Werl</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a className="fig" href="tel:029228809021">02922 88 09 021</a></dd>
            </div>
            <div>
              <dt>Fax</dt>
              <dd className="fig">02922 88 09 022</dd>
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
          <div className="actions">
            <a className="btn btn--card" href="tel:029228809021">
              Anrufen: <span className="fig">02922 88 09 021</span>
            </a>
          </div>
        </div>
        <figure className="photo visit__photo">
          <img
            src="/images/praxis/DSE08932.jpg"
            alt="Eingang der Praxis mit Treppe und Schild"
            width="720"
            height="1080"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
