import React, { useState } from "react";
import type { Company } from "../data/companies";

interface Props {
  company: Company;
  visible: boolean;
  index: number;
}

const CompanySection: React.FC<Props> = ({ company, visible, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className={`company-section ${visible ? "visible" : ""}`}>
      <div className="app-card">
        <div className="app-icon"></div>
        <h2>{company.name}</h2>
        <p>Role: {company.role}</p>
        <p>Years: {company.years}</p>

        <button onClick={() => setShowDetails(true)}>Explore Projects</button>
      </div>

      <div
        className={`details ${showDetails ? "visible" : ""}`}
        id={`details-${index}`}
      >
        <h3>What I Did at {company.name}</h3>
        <p>{company.description}</p>

        <video controls>
          <source src={company.video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default CompanySection;
