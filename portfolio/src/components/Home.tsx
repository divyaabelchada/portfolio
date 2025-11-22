import React from "react";

interface HomeProps {
  scrollFade: boolean;
}

const Home: React.FC<HomeProps> = ({ scrollFade }) => {
  return (
    <section id="home" className={scrollFade ? "scroll-fade" : ""}>
      <h1>Hello, I'm Divyalakshmi</h1>
      <p>I have worked at multiple companies building production-grade apps</p>
      <button onClick={() => window.location.href = "resume.pdf"}>
        Download Resume
      </button>
    </section>
  );
};

export default Home;
