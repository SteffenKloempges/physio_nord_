import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FAQ from "../components/FAQ";
import { leistungen } from "../assets/data/leistungen";

export default function Leistungen() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const t = window.setTimeout(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    }, 320);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <>
      <header className="container page-head">
        <h1>Unsere Leistungen</h1>
        <p className="lead">
          Entdecken Sie unser umfangreiches Angebot an physiotherapeutischen Behandlungen.
        </p>
      </header>

      <div className="container">
        <figure className="photo wide" data-reveal="zoom">
          <img
            src="/images/praxis/DSA02377.jpg"
            alt="Eine Therapeutin behandelt den Fuß einer Patientin"
            width="1620"
            height="1080"
            fetchPriority="high"
          />
        </figure>
      </div>

      <div className="container section services">
        <nav className="services__nav" aria-label="Leistungen">
          <ol>
            {leistungen.map((l) => (
              <li key={l.slug}>
                <a href={`#${l.slug}`}>{l.name}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="services__list">
          {leistungen.map((l) => (
            <article key={l.slug} id={l.slug} className="service" data-reveal>
              <h2>{l.name}</h2>
              <p className="service__body">{l.description}</p>
            </article>
          ))}
        </div>
      </div>

      <FAQ />
    </>
  );
}
