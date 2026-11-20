import { useState } from 'react';
import type { CSSProperties } from 'react';
import { faq } from '../assets/data/faq';

const clean = (s: string) => s.split('\n').map((l) => l.trim()).join('\n').replace(/([^\n])\n(?!\n)/g, '$1 ');

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="container section faq" aria-labelledby="faq-title">
      <h2 id="faq-title">Häufig gestellte Fragen</h2>
      <dl>
        {faq.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={index} className="faq__item" data-reveal style={{ "--i": index } as CSSProperties}>
              <dt>
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={open}
                  aria-controls={`faq-${index}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span>{item.question}</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </dt>
              <dd id={`faq-${index}`} className="faq__a" hidden={!open}>
                {clean(item.answer)}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
