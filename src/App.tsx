import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Leistungen from "./pages/Leistungen";
import Kontakt from "./pages/Kontakt";
import PageTransition from "./components/PageTransition";
import Praxis from "./pages/Praxis";

interface ScrollToTopProps {
  children: ReactNode;
}

function ScrollToTop({ children }: ScrollToTopProps) {
  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <main ref={mainRef} className="flex-grow">
      {children}
    </main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/team"
          element={
            <PageTransition>
              <Team />
            </PageTransition>
          }
        />
        <Route
          path="/praxis"
          element={
            <PageTransition>
              <Praxis />
            </PageTransition>
          }
        />
        <Route
          path="/leistungen"
          element={
            <PageTransition>
              <Leistungen />
            </PageTransition>
          }
        />
        <Route
          path="/kontakt"
          element={
            <PageTransition>
              <Kontakt />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop>
          <AnimatedRoutes />
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
