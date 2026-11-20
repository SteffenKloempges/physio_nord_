import type { CSSProperties } from "react";

const lead = [
  { file: "DSE07229.jpg", alt: "Übung mit Hanteln unter Anleitung einer Therapeutin" },
  { file: "DSA02728.jpg", alt: "Empfangsbereich mit Stuhl und gerahmtem Bild" },
];

const images = [
  { file: "DSA02492.jpg", alt: "Paul Münzer behandelt das Bein eines Patienten auf der Liege" },
  { file: "DSA02437.jpg", alt: "Mobilisation der Hand eines Patienten" },
  { file: "DSA02641.jpg", alt: "Eine Therapeutin behandelt den Rücken einer Patientin" },
  { file: "DSA02791.jpg", alt: "Tasse mit der Aufschrift „Physio mit Herz“" },
  { file: "DSE08959.jpg", alt: "Eine Mitarbeiterin schreibt am Empfang" },
  { file: "DSE08932.jpg", alt: "Eingang der Praxis mit Treppe" },
  { file: "DSE08921.jpg", alt: "Holzschild mit dem Logo von Physio Nord" },
  { file: "DSE08890.jpg", alt: "Wartebereich mit Stühlen" },
  { file: "DSE08861.jpg", alt: "Behandlungsraum mit Liege und Sprossenwand" },
  { file: "DSE08880.jpg", alt: "Massagelotionen auf einer Behandlungsliege" },
  { file: "DSE08825.jpg", alt: "Eine Fangopackung in Nahaufnahme" },
  { file: "DSE08785.jpg", alt: "Schlingentrainer an der Sprossenwand" },
  { file: "DSE08672.jpg", alt: "Flur der Praxis" },
  { file: "DSE08701.jpg", alt: "Behandlungsraum mit Liege und Fenster" },
  { file: "DSA02192.jpg", alt: "Zwei Mitarbeiterinnen am Empfang" },
  { file: "DSA02377.jpg", alt: "Eine Therapeutin behandelt den Fuß einer Patientin" },
  { file: "DSE07238.jpg", alt: "Eine Therapeutin dehnt das Bein eines Patienten" },
  { file: "DSE07241.jpg", alt: "Eine Therapeutin bei der Dehnung, lächelnd" },
  { file: "DSA06641.jpg", alt: "Heller Behandlungsraum mit Liege und Pflanzen" },
  { file: "DSA02807.jpg", alt: "Behandlungsliege am Fenster" },
  { file: "DSA02796.jpg", alt: "Faszienball, Holzroller und Tennisball" },
  { file: "DSA02723.jpg", alt: "Pflanze und Sparschwein am Empfang" },
];

export default function Praxis() {
  return (
    <>
      <header className="container page-head">
        <h1>Einblicke in unsere Praxis</h1>
        <p className="lead">Industriestraße 9, 59457 Werl.</p>
      </header>
      <div className="container">
        <div className="gallery-lead">
          {lead.map((img, i) => (
            <figure className="photo" key={img.file}>
              <img
                src={`/images/praxis/${img.file}`}
                alt={img.alt}
                width={i === 0 ? 1620 : 720}
                height="1080"
                fetchPriority={i === 0 ? "high" : "auto"}
              />
            </figure>
          ))}
        </div>
        <div className="gallery">
          {images.map((img, i) => (
            <figure className="photo" key={img.file} data-reveal style={{ "--i": i % 3 } as CSSProperties}>
              <img src={`/images/praxis/${img.file}`} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
