import { ImageSlider } from "../components/ImageSlider";
import FAQ from "../components/FAQ";

export default function Leistungen() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Unsere Leistungen
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Entdecken Sie unser umfangreiches Angebot an physiotherapeutischen Behandlungen
        </p>
        <div className="mt-16 mx-auto w-fit">
          <ImageSlider />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leistungen.map((leistung) => (
            <div
              key={leistung.name}
              className="relative flex flex-col gap-6 rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <leistung.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {leistung.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {leistung.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FAQ />
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const leistungen = [
  {
    name: 'Krankengymnastik',
    description:
      'Physiotherapie umfasst die physiotherapeutischen Verfahren der Bewegungstherapie sowie die physikalische Therapie. Physiotherapie nutzt als natürliches Heilverfahren die passive - z.B. durch den Therapeuten geführte - und die aktive, selbstständig ausgeführte Bewegung des Menschen sowie den Einsatz physikalischer Maßnahmen zur Heilung und Prävention von Erkrankungen. Damit ist die Physiotherapie eine Alternative oder sinnvolle Ergänzung zur medikamentösen oder operativen Therapie.',
    icon: (props: IconProps) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
    ),
  },
  {
    name: 'Manuelle Therapie',
    description:
      'Die Manuelle Therapie ist ein Behandlungsansatz, bei dem Funktionsstörungen des Bewegungsapparates untersucht und behandelt werden. Grundlage der Manuellen Therapie sind spezielle Handgriff- und Mobilisationstechniken, bei denen Schmerzen gelindert und Bewegungsstörungen beseitigt werden. Physiotherapeuten untersuchen dabei die Gelenkmechanik, die Muskelfunktion sowie die Koordination der Bewegungen, bevor ein individueller Behandlungsplan festgelegt wird. Die Manuelle Therapie bedient sich sowohl passiver Techniken als auch aktiver Übungen. Ziel des Behandlungskonzeptes: Wiederherstellung des Zusammenspieles zwischen Gelenken, Muskeln und Nerven.',
    icon: (props: IconProps) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    name: 'Manuelle Lymphdrainage',
    description:
      'Ziel der Behandlung ist es, die reduzierte Pumpfunktion des Gefäßsystems zu unterstützen. In erster Linie dient die manuelle Lymphdrainage der Entstauung von geschwollenem Gewebe. Hierbei handelt es sich zumeist um Schwellungen an Armen oder Beinen. Wir verwenden dabei spezielle Handgriffe, bei denen durch rhythmische, kreisende und pumpende Bewegungen der Handflächen die angestaute Flüssigkeit in Richtung der zuständigen Lymphknotenstation abtransportiert wird. Durch die Atmung und durch zusätzliche Anregung entfernt liegender Lymphknoten kann dabei eine Sogwirkung erzielt werden, die den Abtransport der Gewebsflüssigkeit begünstigt.',
    icon: (props: IconProps) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
  {
    name: 'Massage',
    description:
      'Massagen können sowohl als alleinige Behandlungsform für sich stehen, sie werden aber häufig auch unterstützend zu anderen Therapieformen eingesetzt. Die klassische Massage dient dazu, verspannte Muskelpartien zu lockern, die Durchblutung und den Stoffwechsel zu fördern, den Kreislauf, den Blutdruck, die Atmung und die Psyche positiv zu beeinflussen, sowie Schmerzen zu reduzieren. Neben der klassischen Massage haben sich heutzutage die unterschiedlichsten Massageformen entwickelt: wie beispielsweise Bindegewebsmassage, Aromamassage, oder Reflexzonenmassage.',
    icon: (props: IconProps) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Wärmetherapie',
    description:
      'In der Physiotherapie werden verschiedene Therapieverfahren eingesetzt, die Wärme oder Kälte nutzen, um eine schmerzlindernde Wirkung beim Patienten zu erzielen. Die Wärmetherapie wird häufig als unterstützende Maßnahme eingesetzt, weil sie die Durchblutung fördert und entspannend auf die Muskulatur und das Gewebe einwirkt. Verfahren der Wärmetherapie sind zum Beispiel Wärmepackungen, die aus Moor oder Fango bestehen. Wirkung: durchblutungsfördernd, muskelentspannend und schmerzlindernd.',
    icon: (props: IconProps) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Kältetherapie',
    description:
      'Die Kältetherapie wird häufig als unterstützende Maßnahme eingesetzt. Es gibt unterschiedliche Formen: wie zum Beispiel Kühlpacks, Kompressen, Eisbad oder Eisabreibung. Die Wirkung der Kältetherapie ist je nach Temperatur unterschiedlich. Sie wirkt schmerzlindernd, entzündungshemmend und verbessert die Durchblutung.',
    icon: (props: IconProps) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    ),
  },
]; 