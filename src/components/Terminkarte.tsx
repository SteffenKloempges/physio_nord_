type Props = { tilt?: boolean };

/* The practice's appointment card, built on cotton stock. Every line on it is a fact the site
   already states: the numbers, the address, the FAQ's "Verordnung", clothing and 24-hour rule. */
export default function Terminkarte({ tilt = false }: Props) {
  return (
    <article className={`stock karte${tilt ? ' karte--tilt' : ''}`} aria-labelledby="karte-title">
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
        <filter id="press">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.6 1.25" result="mask" />
          <feComposite in="SourceGraphic" in2="mask" operator="in" result="ink" />
          <feOffset in="ink" dx="0.6" dy="0.8" result="wall" />
          <feMerge>
            <feMergeNode in="wall" />
            <feMergeNode in="ink" />
          </feMerge>
        </filter>
      </svg>
      <header className="karte__head">
        <div className="karte__from">
          <img src="/images/logo_icon.jpg" alt="" width="40" height="40" />
          <span>
            <strong>Physio Nord, by Paul</strong>
            Industriestraße 9, 59457 Werl
          </span>
        </div>
        <h2 className="karte__title" id="karte-title">Terminkarte</h2>
      </header>
      <p className="karte__call">
        <span className="karte__label">Termine vereinbaren unter</span>
        <a className="karte__tel" href="tel:029228809021">02922 88 09 021</a>
      </p>
      <dl className="karte__lines">
        <div>
          <dt>Bitte mitbringen</dt>
          <dd>Ihre Verordnung und bequeme Kleidung</dd>
        </div>
        <div>
          <dt>Absagen</dt>
          <dd>bitte 24 Stunden vorher</dd>
        </div>
        <div>
          <dt>Fax und E-Mail</dt>
          <dd>
            <span className="fig">02922 88 09 022</span>,{' '}
            <a href="mailto:info@physio-nord-werl.de">info@physio-nord-werl.de</a>
          </dd>
        </div>
      </dl>
      <p className="karte__stamp" aria-hidden="true">
        <span>
          <b>Physio Nord</b>
          Werl
        </span>
      </p>
    </article>
  );
}
