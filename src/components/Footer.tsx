import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white sticky bottom-0">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/kontakt" className="text-gray-400 hover:text-white">
            Kontakt
          </Link>
          <Link to="/impressum" className="text-gray-400 hover:text-white">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-gray-400 hover:text-white">
            Datenschutz
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Physio Nord. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
} 