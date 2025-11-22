import React from "react";

const ProjectsPage: React.FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <section id="projectsPage" className={visible ? "visible" : ""}>
      <h1>Projects</h1>
      <p>All my notable apps and engineering work.</p>
    </section>
  );
};

export default ProjectsPage;
