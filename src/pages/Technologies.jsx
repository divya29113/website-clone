import "../styles/technologies.css";

function Technologies() {
  const techCards = [
    {
      img: "react.png",
      title: "React JS",
      desc: "Build fast and interactive user interfaces with component-based architecture.",
    },
    {
      img: "nextjs.png",
      title: "Next.js",
      desc: "The React framework for production with server-side rendering and more.",
    },
    {
      img: "nodejs.png",
      title: "Node.js",
      desc: "Powerful JavaScript runtime for building scalable server-side applications.",
    },
    {
      img: "mongodb.png",
      title: "MongoDB",
      desc: "NoSQL database for modern applications with high performance and scalability.",
    },
    {
      img: "typescript.png",
      title: "TypeScript",
      desc: "Typed superset of JavaScript that improves code quality and maintainability.",
    },
    {
      img: "aws.png",
      title: "AWS",
      desc: "Reliable cloud services to deploy, scale and manage applications seamlessly.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}

      <section className="tech-hero">
        <div className="tech-overlay"></div>

        <div className="tech-hero-content">
          <h1>Technologies</h1>
          <div className="tech-line"></div>

          <p>
            We use the best technologies to build
            <br />
            smart, scalable and future-ready
            <br />
            digital solutions.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="tech-about">
        <div className="tech-about-left">
          <div className="tech-image-wrapper">
            <img src="/images/about-tech.png" alt="technology" />

            <div className="tech-border"></div>
          </div>
        </div>

        <div className="tech-about-right">
          <span>ABOUT OUR TECHNOLOGIES</span>

          <h2>
            Building The Future
            <br />
            With Modern Technologies
          </h2>

          <div className="about-line"></div>

          <p>
            At Vedhanthi Technologies, we leverage the power of modern
            technologies to deliver innovative, secure and high-performance
            solutions.
          </p>

          <p>
            Our technology stack enables us to meet the dynamic needs of
            businesses across the globe with scalable and efficient solutions.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}

      <section className="tech-stack">
        <span className="stack-subtitle">OUR TECHNOLOGY STACK</span>

        <h2>Technologies We Work With</h2>

        <div className="tech-grid">
          {techCards.map((item, index) => (
            <div className="tech-card" key={index}>
              <img src={`/images/${item.img}`} alt={item.title} />

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="tech-cta">
        <div className="cta-left">
          <img src="/images/cta-icon.png" alt="icon" />

          <div>
            <h2>Let’s Build Something Amazing Together</h2>

            <p>
              We combine the right technologies to deliver exceptional digital
              experiences.
            </p>
          </div>
        </div>

        <button>GET IN TOUCH →</button>
      </section>
    </>
  );
}

export default Technologies;