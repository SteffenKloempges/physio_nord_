import "./legal.css";

export default function Impressum() {
    return (
        <section className="container"><div className="legal">
            <h1>Impressum</h1>

            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
                Paul Münzer<br />
                Physio Nord - by Paul<br />
                Praxis für Physiotherapie<br />
                Industriestrasse 9<br />
                59457 Werl
            </p>

            <h2>Kontakt</h2>
            <p>
                Telefon: 02922 - 88 09 021<br />
                E-Mail: <a href="mailto:info@physio-nord-werl.de">info@physio-nord-werl.de</a>
            </p>

            <h2>Aufsichtsbehörde</h2>
            <p>
                Kreis Soest - Gesundheit, Verbraucherschutz und Gefahrenabwehr<br />
                Hoher Weg 1-3<br />
                59494 Soest<br />
                Nordrhein-Westfalen
            </p>
            <p>
                <a href="https://www.kreis-soest.de" target="_blank" rel="noopener noreferrer">
                    https://www.kreis-soest.de
                </a>
            </p>

            <h2>Berufs&shy;bezeichnung und berufsrechtliche Regelungen</h2>
            <p>
                Berufsbezeichnung:<br />
                staatlich geprüfter und anerkannter Physiotherapeut
            </p>

            <h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
            <p>
                <strong>Name und Sitz des Versicherers:</strong><br />
                Continentale Sachversicherung AG<br />
                Ruhrallee 92<br />
                44139 Dortmund
            </p>
            <p>
                <strong>Geltungsraum der Versicherung:</strong><br />
                Deutschland
            </p>

            <h2>Verbraucher&shy;streit&shy;beilegung / Universalschlichtungsstelle</h2>
            <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </div></section>

    )
}