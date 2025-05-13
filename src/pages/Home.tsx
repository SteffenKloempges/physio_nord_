import { Typewriter } from "../components/Typewriter";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Willkommen bei <Typewriter />
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-900">
          Ihre Experten für Physiotherapie in Werl
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-900">Wir - Physio Nord by Paul - hören Ihnen zu und nehmen Sie wahr. Wir sehen uns als Partner und Begleiter auf Ihrem Weg der Rehabilitation und unterstützen Sie bei der Sicherung Ihrer Lebensqualität. Wir berücksichtigen dabei Ihre individuellen Bedürfnisse und erarbeiten gemeinsam einen Therapieplan. Wir helfen Ihre Schmerzen zu lindern, Sie beweglicher zu machen und geschwächte Muskulatur zu kräftigen. Außerdem ist es ein weiteres wichtiges Ziel, gemeinsam Ihre Ressourcen zu entdecken, damit Sie auch in Eigeninitiative langfristig Ihre Gesundheit unterstützen können. Natürlich sind wir nicht nur für den Norden da! Alle Menschen aus jeder Himmelsrichtung sind herzlich willkommen.</p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:py-8 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8 lg:gap-y-16 place-items-center">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg h-full w-full transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {feature.name}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      </main>
  );
}

const features = [
  {
    name: (
      <>
        Individuelle<br />
        Betreuung
      </>
    ),
    description:  
      'Wir berücksichtigen Ihre persönlichen Bedürfnisse und erarbeiten gemeinsam einen maßgeschneiderten Therapieplan.',
  },
  {
    name: (
      <>
        Professionelle<br />
        Expertise
      </>
    ),
    description:
      'Unser Team verfügt über umfangreiche Erfahrung und regelmäßige Fortbildungen in verschiedenen Therapiebereichen.',
  },
  {
    name: (
      <>
        Moderne<br />
        Ausstattung
      </>
    ),
    description:
      'Wir arbeiten mit modernsten Geräten und Methoden, um Ihnen die bestmögliche Behandlung zu bieten.',
  },
]; 