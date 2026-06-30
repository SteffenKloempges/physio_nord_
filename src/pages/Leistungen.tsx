import { useState } from "react";
import { ImageSlider } from "../components/ImageSlider";
import FAQ from "../components/FAQ";

const PREVIEW_LENGTH = 150;

export default function Leistungen() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (name: string) =>
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Unsere Leistungen
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Entdecken Sie unser umfangreiches Angebot an physiotherapeutischen
          Behandlungen
        </p>
        <div className="mt-16 mx-auto w-full">
          <ImageSlider />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {leistungen.map((leistung) => {
            const isExpanded = expanded[leistung.name] ?? false;
            const plain = leistung.description.trim().replace(/\s+/g, " ");
            const needsTruncation = plain.length > PREVIEW_LENGTH;
            const preview = needsTruncation
              ? plain.slice(0, PREVIEW_LENGTH).trimEnd() + "…"
              : plain;

            return (
              <div
                key={leistung.name}
                className="flex flex-col gap-4 rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-physio-green text-white shrink-0">
                  <leistung.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">
                    {leistung.name}
                  </h3>
                  <p className={`mt-2 text-base leading-7 text-gray-600 ${isExpanded ? "whitespace-pre-line" : ""}`}>
                    {isExpanded ? leistung.description.trim() : preview}
                  </p>
                  {needsTruncation && (
                    <button
                      onClick={() => toggle(leistung.name)}
                      className="mt-3 text-sm font-medium text-physio-green hover:underline text-left self-start"
                    >
                      {isExpanded ? "Weniger anzeigen ▲" : "Mehr anzeigen ▼"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FAQ />
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const leistungen = [
  {
    name: "Krankengymnastik",
    description:
      "Physiotherapie umfasst die physiotherapeutischen Verfahren der Bewegungstherapie sowie die physikalische Therapie. Physiotherapie nutzt als natürliches Heilverfahren die passive - z.B. durch den Therapeuten geführte - und die aktive, selbstständig ausgeführte Bewegung des Menschen sowie den Einsatz physikalischer Maßnahmen zur Heilung und Prävention von Erkrankungen. Damit ist die Physiotherapie eine Alternative oder sinnvolle Ergänzung zur medikamentösen oder operativen Therapie.",
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
    ),
  },
  {
    name: "Manuelle Therapie",
    description:
      "Die Manuelle Therapie ist ein Behandlungsansatz, bei dem Funktionsstörungen des Bewegungsapparates untersucht und behandelt werden. Grundlage der Manuellen Therapie sind spezielle Handgriff- und Mobilisationstechniken, bei denen Schmerzen gelindert und Bewegungsstörungen beseitigt werden. Physiotherapeuten untersuchen dabei die Gelenkmechanik, die Muskelfunktion sowie die Koordination der Bewegungen, bevor ein individueller Behandlungsplan festgelegt wird. Die Manuelle Therapie bedient sich sowohl passiver Techniken als auch aktiver Übungen. Ziel des Behandlungskonzeptes: Wiederherstellung des Zusammenspieles zwischen Gelenken, Muskeln und Nerven.",
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    name: "Vagustherapie",
    description: `Der Vagusnerv ist der längste Nerv des menschlichen Körpers und der wichtigste Bestandteil des parasympathischen Nervensystems – jenem Teil, der für Erholung, Regeneration und Heilung zuständig ist. Er verbindet Gehirn, Herz, Lunge und Verdauungsorgane miteinander und reguliert zahlreiche lebenswichtige Funktionen. Ist der Vagusnerv in seiner Aktivität gestört, können anhaltender Stress, chronische Schmerzen, Schlafprobleme, Verdauungsbeschwerden und ein geschwächtes Immunsystem die Folge sein.

Die Vagustherapie bei Physio Nord by Paul zielt darauf ab, diesen bedeutenden Nerv gezielt zu stimulieren und das Gleichgewicht zwischen Anspannung und Entspannung im vegetativen Nervensystem wiederherzustellen. Durch manuelle Techniken, spezifische Atemübungen und gezielte Stimulationsverfahren – unter anderem im Bereich der Ohrmuschel – aktivieren wir den Parasympathikus und unterstützen Ihren Körper dabei, aus dem chronischen Stressmodus herauszufinden.

Die Vagustherapie eignet sich besonders bei Burnout und chronischem Stress, Schlafstörungen, anhaltenden Schmerzzuständen, Migräne sowie bei Patienten, die nach Operationen oder schweren Erkrankungen in ihre Regeneration investieren möchten.`,
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    ),
  },
  {
    name: "Manuelle Lymphdrainage",
    description:
      "Ziel der Behandlung ist es, die reduzierte Pumpfunktion des Gefäßsystems zu unterstützen. In erster Linie dient die manuelle Lymphdrainage der Entstauung von geschwollenem Gewebe. Hierbei handelt es sich zumeist um Schwellungen an Armen oder Beinen. Wir verwenden dabei spezielle Handgriffe, bei denen durch rhythmische, kreisende und pumpende Bewegungen der Handflächen die angestaute Flüssigkeit in Richtung der zuständigen Lymphknotenstation abtransportiert wird. Durch die Atmung und durch zusätzliche Anregung entfernt liegender Lymphknoten kann dabei eine Sogwirkung erzielt werden, die den Abtransport der Gewebsflüssigkeit begünstigt.",
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
  {
    name: "Massage",
    description:
      "Massagen können sowohl als alleinige Behandlungsform für sich stehen, sie werden aber häufig auch unterstützend zu anderen Therapieformen eingesetzt. Die klassische Massage dient dazu, verspannte Muskelpartien zu lockern, die Durchblutung und den Stoffwechsel zu fördern, den Kreislauf, den Blutdruck, die Atmung und die Psyche positiv zu beeinflussen, sowie Schmerzen zu reduzieren. Neben der klassischen Massage haben sich heutzutage die unterschiedlichsten Massageformen entwickelt: wie beispielsweise Bindegewebsmassage, Aromamassage, oder Reflexzonenmassage.",
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Wärmetherapie",
    description:
      "In der Physiotherapie werden verschiedene Therapieverfahren eingesetzt, die Wärme oder Kälte nutzen, um eine schmerzlindernde Wirkung beim Patienten zu erzielen. Die Wärmetherapie wird häufig als unterstützende Maßnahme eingesetzt, weil sie die Durchblutung fördert und entspannend auf die Muskulatur und das Gewebe einwirkt. Verfahren der Wärmetherapie sind zum Beispiel Wärmepackungen, die aus Moor oder Fango bestehen. Wirkung: durchblutungsfördernd, muskelentspannend und schmerzlindernd.",
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
  {
    name: "Kältetherapie",
    description:
      "Die Kältetherapie wird häufig als unterstützende Maßnahme eingesetzt. Es gibt unterschiedliche Formen: wie zum Beispiel Kühlpacks, Kompressen, Eisbad oder Eisabreibung. Die Wirkung der Kältetherapie ist je nach Temperatur unterschiedlich. Sie wirkt schmerzlindernd, entzündungshemmend und verbessert die Durchblutung.",
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
  {
    name: "Reflektorische Atemtherapie",
    description: `Die reflektorische Atemtherapie (RAT) ist ein spezielles Behandlungskonzept innerhalb der Physiotherapie, das über manuelle Reize an Haut, Muskeln und Faszien reflektorisch auf die Atembewegung und das vegetative Nervensystem einwirkt. Ziel ist es, die Atmung zu verbessern, Spannungszustände zu regulieren und Schmerzen zu lindern.
      🔍 Grundprinzip: Die reflektorische Atemtherapie nutzt bestimmte Reize (z. B. Druck, Dehnung, Hautverschiebung, Vibration), um Reflexzonen am Körper zu aktivieren. Diese Reize lösen über das zentrale Nervensystem eine automatische Veränderung des Atemmusters aus – ohne dass der Patient willentlich atmen muss. Die reflektorische Atemtherapie ist ein hochwirksames, neurophysiologisch begründetes Verfahren zur Verbesserung der Atmung und Regulation des Körpers über Reflexe.
      Sie wird vor allem dann eingesetzt, wenn die Eigenaktivität eingeschränkt ist oder wenn eine fein abgestimmte vegetative Regulation gewünscht ist – also dort, wo andere Therapieformen oft an ihre Grenzen stoßen.
  `,
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
    ),
  },
  {
    name: "KG-ZNS",
    description: `KG-ZNS ist die Abkürzung für Krankengymnastik am zentralen Nervensystem. Dabei handelt es sich um eine spezielle Form der Physiotherapie, die gezielt auf Störungen des zentralen Nervensystems ausgerichtet ist. Solche Störungen können im Rahmen verschiedener Erkrankungen auftreten, beispielsweise nach einem Schlaganfall (Apoplex), bei Multiple Sklerose (MS), Morbus Parkinson, Schädel-Hirn-Trauma, Querschnittlähmung oder auch bei einer infantilen Zerebralparese.
Das Ziel der KG-ZNS besteht darin, Bewegungsfunktionen zu fördern und nach Möglichkeit wiederherzustellen. Dabei werden pathologische Bewegungsmuster, wie etwa eine Spastik, gehemmt und gleichzeitig physiologische Bewegungsabläufe angebahnt und geschult. Darüber hinaus steht die Verbesserung von Koordination, Gleichgewicht und Körperwahrnehmung im Vordergrund. Ein weiteres wesentliches Ziel ist die Steigerung der Selbstständigkeit im Alltag, um den Betroffenen ein möglichst eigenständiges Leben zu ermöglichen.
Die Durchführung der KG-ZNS erfolgt in der Regel nach anerkannten therapeutischen Konzepten. Hierzu zählen unter anderem das Bobath-Konzept, die Propriozeptive Neuromuskuläre Fazilitation (PNF) sowie die Vojta-Therapie, die vor allem bei Kindern Anwendung findet. In unserer Arbeit orientieren wir uns schwerpunktmäßig am PNF-Konzept.

  `,
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    name: "Beckenbodentraining",
    description: `Der Beckenboden ist das unsichtbare Kraftzentrum Ihres Körpers – und wird dennoch häufig vernachlässigt. Diese Gruppe aus Muskeln, Bändern und Bindegewebe trägt nicht nur Ihre inneren Organe, sondern spielt eine entscheidende Rolle für Kontinenz, Stabilität und sexuelles Wohlbefinden. Ist dieses System geschwächt oder verspannt, können Beschwerden wie ungewollter Harnverlust, Rückenschmerzen, Druckgefühl im Unterleib oder Schmerzen beim Geschlechtsverkehr die Folge sein.

Bei Physio Nord by Paul erhalten Sie eine individuelle Beckenbodentherapie, die weit über allgemeine Übungsanleitungen hinausgeht. Nach einer gründlichen Befundaufnahme erarbeiten wir gemeinsam mit Ihnen ein gezieltes Trainingsprogramm, das Sie sowohl in der Praxis als auch zu Hause durchführen können. Unser Angebot richtet sich an Frauen nach der Geburt oder in den Wechseljahren, an Männer nach einer Prostata-Operation sowie an alle Menschen, die präventiv ihre Körpermitte stärken möchten.

Ihre Gesundheit beginnt von innen. Wir helfen Ihnen, das Fundament zu stärken.`,
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Betriebliches Gesundheitsmanagement",
    description: `Rückenschmerzen, Verspannungen und stressbedingte Beschwerden zählen zu den häufigsten Ursachen für Fehlzeiten im Betrieb. Dabei lässt sich vieles davon verhindern – mit dem richtigen Konzept zur richtigen Zeit. Als Ihr Partner für Betriebliches Gesundheitsmanagement kommt Physio Nord by Paul direkt zu Ihnen in den Betrieb oder empfängt Ihre Mitarbeiter in unserer Praxis an der Industriestraße.

Unser Angebot umfasst ergonomische Arbeitsplatzberatungen, präventive Rückenschulungen für Ihre Belegschaft, Entspannungs- und Mobilisationskurse sowie individuelle Kurzbehandlungen im Rahmen von Gesundheitstagen. Wir entwickeln mit Ihnen gemeinsam ein maßgeschneidertes Konzept, das zu Ihrer Unternehmensstruktur und Ihrem Budget passt – und das Ihre Mitarbeiter spürbar entlastet.

Investitionen in die Gesundheit Ihrer Belegschaft zahlen sich aus: durch weniger Ausfallzeiten, höhere Motivation und eine stärkere Mitarbeiterbindung. Sprechen Sie uns an – wir kommen zu Ihnen.`,
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
  },
  {
    name: "Betreuung von Amateur- und Spitzensportlern",
    description: `Ob Sie als Hobbysportler nach einem Bänderriss schnell wieder auf den Platz möchten oder als Leistungssportler Ihre Wettkampffähigkeit sichern wollen – bei Physio Nord by Paul sind Sie in erfahrenen Händen. Inhaber Paul Münzer verfügt über langjährige Erfahrung in der Sportphysiotherapie und kennt die besonderen Anforderungen, die Sport an den menschlichen Körper stellt.

Unser sportphysiotherapeutisches Angebot umfasst die Erstversorgung und Rehabilitation nach akuten Verletzungen (z. B. Muskelfaserrisse, Bänderzerrungen, Prellungen), die gezielte Behandlung chronischer Überlastungsschäden sowie ein strukturiertes Return-to-Sport-Programm, das Sie sicher und belastbar zurück in Ihren Sport begleitet. Darüber hinaus bieten wir präventive Maßnahmen an, um Verletzungen von vornherein zu vermeiden – durch Bewegungsanalysen, Kinesio Taping und gezielte Stabilisationsübungen.

Wir betreuen Sportler aus Fußball, Laufsport, Kampfsport und vielen weiteren Disziplinen – mit dem Ziel, Sie nicht nur zu heilen, sondern leistungsfähiger zurückzubringen, als Sie gekommen sind.`,
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
  {
    name: "Ohrakupressur",
    description: `Das Ohr ist weit mehr als ein Hörorgan – es ist eine Landkarte des gesamten menschlichen Körpers. In der Aurikulotherapie, auch Ohrakupressur genannt, werden spezifische Reflexpunkte an der Ohrmuschel durch sanften Druck stimuliert. Diese Punkte stehen in direkter Verbindung mit Organen, Gelenken und Körpersystemen und können über gezielte Reize regulierend auf den gesamten Organismus wirken.

Bei Physio Nord by Paul setzen wir die Ohrakupressur als ergänzende Therapieform ein, um die Wirkung anderer Behandlungen zu verstärken und Ihren Heilungsprozess zu unterstützen. Die Anwendung ist schmerzfrei, nicht-invasiv und dauert nur wenige Minuten. Typische Einsatzgebiete sind akute und chronische Schmerzzustände (z. B. Rücken-, Nacken- oder Gelenkschmerzen), Stress und innere Unruhe, Schlafstörungen sowie unterstützend bei der Raucherentwöhnung oder Gewichtsregulation.

Die Ohrakupressur kann sowohl als eigenständige Behandlung als auch in Kombination mit unseren physiotherapeutischen Leistungen angeboten werden – individuell abgestimmt auf Ihre Beschwerden und Ihre Therapieziele.`,
    icon: (props: IconProps) => (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
        />
      </svg>
    ),
  },
];
