import { useState } from "react";
import type { CSSProperties } from "react";
import { teamData } from "../assets/data/team";

export default function Team() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      <header className="container page-head">
        <h1>Unser Team</h1>
        <p className="lead">Lernen Sie unser erfahrenes Team kennen.</p>
      </header>

      <div className="container">
        <ul className="team">
          {teamData.map((person, i) => {
            const isLong = person.description.length > 200;
            const isExpanded = expanded[person.name];
            const displayText =
              isExpanded || !isLong
                ? person.description
                : person.description.slice(0, 200).trimEnd() + "…";
            return (
              <li key={person.name} data-reveal style={{ "--i": i % 4 } as CSSProperties}>
                <figure className="person">
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    width="720"
                    height="1080"
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                  <figcaption>
                    <h2 className="title-size">{person.name}</h2>
                    <p>{person.role}</p>
                  </figcaption>
                </figure>
                <p className="person__bio" id={`bio-${i}`}>{displayText}</p>
                {isLong && (
                  <button
                    type="button"
                    className="toggle"
                    aria-expanded={!!isExpanded}
                    aria-controls={`bio-${i}`}
                    onClick={() => toggleExpand(person.name)}
                  >
                    {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
