import "../styles/digitalmarketing.css";

function DigitalMarketing() {
  const services = [
    "Social Media Marketing",
    "Search Engine Optimization",
    "Pay-Per-Click",
    "LinkedIn Automation Tools",
    "Business 2 Business",
    "Business 2 Consumer",
  ];

  const process = [
    {
      number: "01",
      title: "Research & Strategy",
      desc: "We analyze your business, competitors, and audience to build a strong digital strategy.",
    },
    {
      number: "02",
      title: "Content Creation",
      desc: "Our creative team develops engaging content that attracts and converts customers.",
    },
    {
      number: "03",
      title: "Marketing Execution",
      desc: "We run campaigns across SEO, social media, PPC, and multiple online platforms.",
    },
    {
      number: "04",
      title: "Performance Analysis",
      desc: "Track campaign growth and improve results using data-driven optimization.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="digital-hero">
        <img
          src="/images/digital-bg.jpg"
          alt="Digital Marketing"
          className="digital-hero-bg"
        />

        <div className="digital-overlay"></div>

        <div className="digital-content">
          <h1>Digital Marketing</h1>

          <div className="digital-bottom">
            <div className="project-count">
              <h2>250+</h2>

              <p>
                Projects completed
                <br />
                successfully
              </p>
            </div>

            <div className="digital-text">
              <span>*</span>

              <p>
                We Work to Give Customers
                <br />
                <strong>Unique Experience</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY SECTION */}
      <section className="strategy-section">
        <div className="strategy-left">
          <img
            src="/images/digital1.jpg"
            alt="team"
            className="strategy-main-img"
          />

          <img
            src="/images/digital2.png"
            alt="shape"
            className="strategy-lines"
          />
        </div>

        <div className="strategy-right">
          <h2>
            Strategic Digital
            <br />
            Marketing Excellence
          </h2>

          <p>
            The proposal of this digital marketing proposal is to give you some
            information about VEDHANTHI Technologies Private Limited and the
            digital marketing services we offer, along with information and
            pricing for custom digital marketing services based on your needs.
          </p>

          <p>
            In today's digital business world, you need a partner who can help
            you take advantage of marketing opportunities across a variety of
            channels in real-time.
          </p>

          <img
            src="/images/digital3.jpg"
            alt="marketing"
            className="strategy-small-img"
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="services-left">
          <p className="services-subtitle">
            DIGITAL MARKETING SERVICES
          </p>

          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <span>
                {String(index + 1).padStart(2, "0")} /
              </span>

              <h3>{service}</h3>
            </div>
          ))}
        </div>

        <div className="services-right">
          <h2>Social Media Marketing</h2>

          <p>
            Social networks are now a substantial part of every marketing
            strategy, and the benefits of using social media are so great that
            anyone not implementing this cost-effective resource is missing out
            on a phenomenal marketing opportunity.
          </p>

          <p>
            It's easy to see that social media marketing is a key element for
            success in marketing and many marketers realize the potential for
            business growth using the platform.
          </p>

          <img
            src="/images/digital2.png"
            alt="shape"
            className="services-shape"
          />
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="marquee-section">
        <div className="marquee-track">
          <span>SEO</span>
          <span>*</span>

          <span>Pay-Per-Click</span>
          <span>*</span>

          <span>Automation</span>
          <span>*</span>

          <span>Digital Solution</span>
          <span>*</span>

          <span>Business</span>
          <span>*</span>

          <span>Social Media</span>
          <span>*</span>

          <span>SEO</span>
          <span>*</span>

          <span>Pay-Per-Click</span>
          <span>*</span>

          <span>Automation</span>
          <span>*</span>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <div className="process-heading">
          <p>OUR WORK PROCESS</p>

          <h2>
            Simple Process For
            <br />
            Digital Success
          </h2>
        </div>

        <div className="process-container">
          {process.map((item, index) => (
            <div className="process-card" key={index}>
              <span className="process-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default DigitalMarketing;