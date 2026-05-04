import "../../styles/footer.css";

function Footer() {
  return (
    <>
      <section className="footer-cta">
        <h2>
          <span>Have a Project</span>
          <b>In your Mind</b>
        </h2>

        <button className="contact-circle">
          Contact <br /> Us ↗
        </button>
      </section>

      <footer className="footer">
        <div className="footer-col footer-brand">
          <img src="/images/logo.png" alt="Vedhanthi Logo" />

          <p>
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <p>Web App Development</p>
          <p>Mobile App Development</p>
          <p>Testing Service</p>
          <p>Devops</p>
          <p>Design Service</p>
        </div>

        <div className="footer-col">
          <h4>Technologies</h4>
          <p>Open Source</p>
          <p>Microsoft Skills</p>
          <p>Native Mobile App</p>
          <p>Hybrid Mobile App</p>
          <p>QA Automation</p>
        </div>

        <div className="footer-col">
          <h4>Address</h4>
          <p>
            47A Anandha Bhavanam Sasthri Street, <br />
            LIC colony, Selvapuram, Coimbatore - 26
          </p>

          <a href="#">View On Map</a>

          <h4 className="inquiry-title">Inquiries</h4>
          <h3>+(91) - 63693 11519</h3>
          <p>info.vedhanthitechnologies.com</p>

          <div className="socials">
            <span>f</span>
            <span>t</span>
            <span>in</span>
            <span>ig</span>
          </div>
        </div>

        <div className="copyright">
          © 2026 <span>Vedhanthi Technologies.</span> All Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;