import "../../styles/heritage.css";

function HeritageSection() {
  return (
    <section className="heritage-section">
      {/* LEFT CONTENT */}
      <div className="heritage-left">
        <p className="heritage-subtitle">OUR HERITAGE</p>

        <h2>
          Crafting Your Vision <br />
          Into Reality
        </h2>

        <p className="heritage-description">
          VEDHANTHI Technologies Founded in 2022, VEDHANTHI Technologies is the
          privately held provider of software and web development solutions for
          information technology, Enterprise learning services, IT training and
          management professionals.
        </p>

        <div className="mission-vision">
          <div className="mv-box">
            <h3>01</h3>
            <div className="mv-title">
              <span></span>
              <h4>Mission</h4>
            </div>
            <p>
              User Interface, User Experience, Product Design, Branding &
              Illustration, Motion Design
            </p>
          </div>

          <div className="mv-box">
            <h3>02</h3>
            <div className="mv-title">
              <span></span>
              <h4>Vision</h4>
            </div>
            <p>
              Our yoga trainers will build your perfect body workout ever and
              physique professionals.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="heritage-right">
        <img src="/images/line.png" className="line-img" alt="line design" />

        <img
          src="/images/heritage.jpg"
          className="heritage-main-img"
          alt="team work"
        />

        <div className="achievement-card">
          <h3>30+</h3>
          <p>Awards achievement</p>
        </div>
      </div>
    </section>
  );
}

export default HeritageSection;