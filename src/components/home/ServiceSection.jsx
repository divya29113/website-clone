import "../../styles/services.css";

function ServicesSection() {
  return (
    <section className="services">

      {/* LEFT SIDE (STICKY) */}
      <div className="services-left">
        <p className="sub">OUR EXPERTISE</p>

        <h2>
          Services We <br /> Provide
        </h2>

        <p className="desc">
          We are offering the following information's about us that circular
          that what we actually.
        </p>

        <div className="circle-btn">
          Have a project in your mind? ↗
        </div>
      </div>

      {/* RIGHT SIDE (SCROLL CONTENT) */}
      <div className="services-right">

        <div className="service-item">
          <h3>Branding Design</h3>
          <p>Effective branding design is the cornerstone of your brand.</p>
          <span>01</span>
        </div>

        <div className="service-item">
          <h3>Interactive Design</h3>
          <p>Interactive design combines creativity and functionality.</p>
          <span>02</span>
        </div>

        <div className="service-item">
          <h3>Web & Mobile Development</h3>
          <p>Discover innovative web and mobile solutions.</p>
          <span>03</span>
        </div>

        <div className="service-item">
          <h3>Digital Marketing</h3>
          <p>Promote products or services with digital marketing.</p>
          <span>04</span>
        </div>

        <div className="service-item">
          <h3>Testing Service</h3>
          <p>Ensure highest quality and reliability.</p>
          <span>05</span>
        </div>

        <div className="service-item">
          <h3>Illustration Modelling</h3>
          <p>Create stunning visual narratives.</p>
          <span>06</span>
        </div>

      </div>

    </section>
  );
}

export default ServicesSection;