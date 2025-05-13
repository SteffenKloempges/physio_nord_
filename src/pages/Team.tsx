export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Unser Team
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Lernen Sie unser erfahrenes Team kennen
        </p>
        
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 place-items-center">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col items-center justify-center max-w-96">
              <img
                className="aspect-[3/4] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt={person.name}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: 'Paul Münzer',
    role: 'Physiotherapeut & Inhaber',
    imageUrl: '/team/paul_muenzer.jpg',
    description:
      'Seit 2003 bin ich als staatlich geprüfter und anerkannter Physiotherapeut tätig. Meine Ausbildung zum Lymph- und Ödemtherapeuten sowie zum Manualtherapeuten habe ich erfolgreich abgeschlossen. Zusätzlich bin ich Rückenschulinstruktor und habe mich in Medizinischer Trainingstherapie sowie Kinesio-Taping weitergebildet.',
  },
  // Weitere Teammitglieder können hier hinzugefügt werden
]; 