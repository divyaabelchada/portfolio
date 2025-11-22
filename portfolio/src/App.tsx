import React, { useEffect, useState, useRef } from "react";
import "./App.css";

import Home from "./components/Home";
import CompanySection from "./components/CompanySection";
import ProjectsPage from "./components/ProjectsPage";

import { companies } from "./data/companies";

function App() {
  const [scrollFade, setScrollFade] = useState(false);
  const [visibleCompanies, setVisibleCompanies] = useState<boolean[]>(
    Array(companies.length).fill(false)
  );
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setScrollFade(y > 100);

      // company fade transition
      const newVisible = [...visibleCompanies];
      companies.forEach((_, idx) => {
        const el = document.getElementById(`details-${idx}`)?.parentElement;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 120) newVisible[idx] = true;
        }
      });

      setVisibleCompanies(newVisible);

      // project section visibility
      if (projectRef.current) {
        const rect = projectRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) setProjectsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCompanies]);

  return (
    <div className={`app-root ${lightMode ? "light" : ""}`}>
      <button
        id="themeToggle"
        onClick={() => setLightMode((v) => !v)}
      >
        🌓
      </button>

      <Home scrollFade={scrollFade} />

      {companies.map((c, i) => (
        <CompanySection
          key={i}
          company={c}
          visible={visibleCompanies[i]}
          index={i}
        />
      ))}

      <div ref={projectRef}>
        <ProjectsPage visible={projectsVisible} />
      </div>
    </div>
  );
}

export default App;
