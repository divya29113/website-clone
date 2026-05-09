import "../styles/contact.css";

function Contact() {
  return (
    <>
      {/* CONTACT BANNER */}
      <section className="contact-banner">
        <img
          src="/images/contact-banner.png"
          alt="Contact Banner"
          className="contact-banner-img"
        />

        <div className="contact-overlay"></div>

        <div className="contact-banner-content">
          <h1>Contact Us</h1>

          <div className="breadcrumb">
            <span>Home</span>
            <span>•</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <span className="contact-small-title">GET IN TOUCH</span>

          <h2>
            Happy to Answer <br />
            All Questions
          </h2>

          <p className="contact-desc">
            Great! We're excited to hear from you and let's start something
            special together. call us for any enquiry.
          </p>

          {/* INFO GRID */}
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="icon">✉</div>
              <h4>Mail Us 24/7</h4>
              <p>vedhanthitechnologies@gmail.com</p>
            </div>

            <div className="contact-info-card">
              <div className="icon">☎</div>
              <h4>Phone Us 24/7</h4>
              <p>+(91) - 63693 11519</p>
            </div>

            <div className="contact-info-card">
              <div className="icon">⌖</div>
              <h4>Our Location</h4>
              <p>
                LIC colony, Selvapuram,
                <br />
                Coimbatore - 26
              </p>
            </div>

            <div className="contact-info-card">
              <div className="icon">◷</div>
              <h4>Working Hours</h4>
              <p>
                Monday - Saturday
                <br />9 am to 6 pm
              </p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="follow-section">
            <h5>FOLLOW US:</h5>

            <div className="social-icons">
              <span>f</span>
              <span>x</span>
              <span>ig</span>
              <span>in</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-box">
          <span className="form-small-title">CONTACT US</span>

          <h2>Let’s get in touch</h2>

          <p>
            We're thrilled to connect with you! Explore our current openings
            and join us in creating something extraordinary.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="FullName" />

            <input type="email" placeholder="Email" />

            <input type="text" placeholder="Subject" />

            <textarea placeholder="Message"></textarea>

            <button type="submit">
              ↗ <span>Get In Touch</span>
            </button>
          </form>
        </div>
        <section className="map-section">
  <iframe
    className="contact-map"
    title="Vedhanthi Technologies Map"
    src="https://www.google.com/maps?q=Vedhanthi%20Technologies%20Private%20Limited%20Coimbatore&output=embed"
    loading="lazy"
    allowFullScreen
  ></iframe>
</section>
      </section>
    </>
  );
}

export default Contact;