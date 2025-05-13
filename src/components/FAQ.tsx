import { useState, useRef, useEffect } from 'react';
import { faq } from '../assets/data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faq.length);
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-8">
            Häufig gestellte Fragen
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faq.map((item, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between text-left text-gray-900"
                  >
                    <span className="text-base font-semibold leading-7">
                      {item.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <svg 
                        className={`h-6 w-6 transform transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <div
                  ref={el => contentRefs.current[index] = el}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{item.answer}</p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 