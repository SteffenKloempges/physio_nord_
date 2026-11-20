import { Link } from "react-router-dom";
import { useRef } from "react";
import type { CSSProperties } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;
import Terminkarte from "../components/Terminkarte";
import Anfahrt from "../components/Anfahrt";
import { teamData } from "../assets/data/team";
import { leistungen } from "../assets/data/leistungen";

export default function Home() {
  const railRef = useRef<HTMLUListElement>(null);
  const scrollTeam = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth, behavior: smooth ? "smooth" : "auto" });
  };

  return (
    <>
      <section className="hero desk" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <h1 id="hero-title">Willkommen bei Physio Nord</h1>
            <p className="lead">Ihre Experten für Physiotherapie in Werl.</p>
            <div className="actions">
              <a className="btn btn--ink" href="tel:029228809021">
                Termin vereinbaren
              </a>
              <Link className="btn btn--card" to="/leistungen">
                Unsere Leistungen
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <Terminkarte tilt />
          </div>
        </div>
      </section>

      <div className="container section--s">
        <figure className="photo wide" data-reveal="zoom">
          <img
            src="/images/praxis/DSE08861.jpg"
            alt="Behandlungsraum mit Liege und Sprossenwand"
            width="1620"
            height="1080"
          />
        </figure>
      </div>

      <section className="container section" aria-labelledby="about-title">
        <div className="split" data-reveal>
          <h2 id="about-title">Wir hören Ihnen zu</h2>
          <div className="split__body">
            <p>
              Wir - Physio Nord by Paul - hören Ihnen zu und nehmen Sie wahr. Wir sehen uns als Partner und Begleiter auf Ihrem Weg der Rehabilitation und unterstützen Sie bei der Sicherung Ihrer Lebensqualität. Wir berücksichtigen dabei Ihre individuellen Bedürfnisse und erarbeiten gemeinsam einen Therapieplan. Wir helfen Ihre Schmerzen zu lindern, Sie beweglicher zu machen und geschwächte Muskulatur zu kräftigen. Außerdem ist es ein weiteres wichtiges Ziel, gemeinsam Ihre Ressourcen zu entdecken, damit Sie auch in Eigeninitiative langfristig Ihre Gesundheit unterstützen können. Natürlich sind wir nicht nur für den Norden da! Alle Menschen aus jeder Himmelsrichtung sind herzlich willkommen.
            </p>
          </div>
        </div>
        <ul className="rows">
          {features.map((feature, i) => (
            <li key={feature.name} data-reveal style={stagger(i)}>
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container section" aria-labelledby="services-title">
        <div className="head" data-reveal>
          <h2 id="services-title">Unsere Leistungen</h2>
          <p className="lead">
            Entdecken Sie unser umfangreiches Angebot an physiotherapeutischen Behandlungen.
          </p>
        </div>
        <ul className="index">
          {leistungen.map((l, i) => (
            <li key={l.slug} data-reveal style={stagger(i % 2 + Math.floor(i / 2))}>
              <Link to={`/leistungen#${l.slug}`}>
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="index-foot">
          <Link className="text-link" to="/leistungen">Alle Leistungen und häufige Fragen</Link>
        </p>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="container head" data-reveal>
          <h2 id="team-title">Unser Team</h2>
          <p className="head__aside">
            Lernen Sie unser erfahrenes Team kennen.{" "}
            <Link className="text-link" to="/team">Alle Porträts</Link>
          </p>
          <div className="rail-nav">
            <button type="button" className="icon-btn icon-btn--card" aria-label="Vorherige Teammitglieder" onClick={() => scrollTeam(-1)}>
              <ChevronLeftIcon aria-hidden="true" />
            </button>
            <button type="button" className="icon-btn icon-btn--card" aria-label="Weitere Teammitglieder" onClick={() => scrollTeam(1)}>
              <ChevronRightIcon aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="container">
          <ul className="rail" ref={railRef} tabIndex={0} aria-label="Unser Team">
            {teamData.map((p, i) => (
              <li key={p.name} data-reveal style={stagger(Math.min(i, 4))}>
                <figure className="person">
                  <img src={p.imageUrl} alt="" width="720" height="1080" loading="lazy" />
                  <figcaption>
                    <h3>{p.name}</h3>
                    <p>{p.role}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Anfahrt />
    </>
  );
}

const features = [
  {
    name: "Individuelle Betreuung",
    description:
      "Wir berücksichtigen Ihre persönlichen Bedürfnisse und erarbeiten gemeinsam einen maßgeschneiderten Therapieplan.",
  },
  {
    name: "Professionelle Expertise",
    description:
      "Unser Team verfügt über umfangreiche Erfahrung und regelmäßige Fortbildungen in verschiedenen Therapiebereichen.",
  },
  {
    name: "Moderne Ausstattung",
    description:
      "Wir arbeiten mit modernsten Geräten und Methoden, um Ihnen die bestmögliche Behandlung zu bieten.",
  },
];
