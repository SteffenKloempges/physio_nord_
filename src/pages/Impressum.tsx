export default function Impressum() {
    return (
        <section className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
            <h1 className="text-3xl font-bold mb-6">Impressum</h1>

            <h2 className="text-xl font-semibold mt-6 mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-700 leading-relaxed">
                Paul Münzer<br />
                Physio Nord - by Paul<br />
                Praxis für Physiotherapie<br />
                Industriestrasse 9<br />
                Gebäude 44<br />
                59457 Werl
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
            <p className="text-gray-700 leading-relaxed">
                Telefon: +49 (0) 2922 - 88 09 021<br />
                E-Mail: <a href="mailto:paul.muenzer@web.de" className="text-blue-600 hover:underline">paul.muenzer@web.de</a>
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Aufsichtsbehörde</h2>
            <p className="text-gray-700 leading-relaxed">
                Kreis Soest - Gesundheit, Verbraucherschutz und Gefahrenabwehr<br />
                Hoher Weg 1-3<br />
                59494 Soest<br />
                Nordrhein-Westfalen
            </p>
            <p>
                <a href="https://www.kreis-soest.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.kreis-soest.de
                </a>
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="text-gray-700 leading-relaxed">
                Berufsbezeichnung:<br />
                staatlich geprüfter und anerkannter Physiotherapeut
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Angaben zur Berufshaftpflichtversicherung</h2>
            <p className="text-gray-700 leading-relaxed">
                <strong>Name und Sitz des Versicherers:</strong><br />
                Continentale Sachversicherung AG<br />
                Ruhrallee 92<br />
                44139 Dortmund
            </p>
            <p className="text-gray-700 leading-relaxed">
                <strong>Geltungsraum der Versicherung:</strong><br />
                Deutschland
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="text-gray-700 leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </section>

    )
}