import resumePdf from "../assets/files/TaeHyeok_Lee_Resume.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "TaeHyeok_Lee_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Web Developer
          <span className="hero-subtitle-text">
            Crafting digital experiences
          </span>
        </h1>
        <p className="hero-subtitle">
          Web developer with {new Date().getFullYear() - 2022} years of
          experience building scalable B2B systems for enterprise clients,
          including Samsung, using{" "}
          <span className="tech-text tech-angular">Angular</span>,{" "}
          <span className="tech-text tech-react">React</span>,{" "}
          <span className="tech-text tech-typescript">TypeScript</span>,{" "}
          <span className="tech-text tech-nestjs">NestJS</span>, and{" "}
          <span className="tech-text tech-mongodb">MongoDB</span>.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
          <button onClick={handleDownload} className="btn btn-tertiary">
            Download Resume
          </button>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;
