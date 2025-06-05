import { useState } from "react";
import { teamData } from "../assets/data/team";

export default function Team() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Unser Team
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Lernen Sie unser erfahrenes Team kennen
        </p>

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamData.map((person) => {
            const isLong = person.description.length > 200;
            const isExpanded = expanded[person.name];
            const displayText =
              isExpanded || !isLong
                ? person.description
                : person.description.slice(0, 200) + "...";
            return (
              <div
                key={person.name}
                className="flex flex-col items-center max-w-96 h-full bg-white rounded-2xl shadow p-6"
              >
                <img
                  className="aspect-[3/4] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600 text-center">
                  {displayText}
                  {isLong && (
                    <button
                      className="ml-2 text-blue-600 hover:underline focus:outline-none"
                      onClick={() => toggleExpand(person.name)}
                    >
                      {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
                    </button>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
