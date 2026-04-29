import "../../styles/hero.css";

function HeroSection() {
  return (
    <section className="hero">
      {/* LEFT SIDE CONTENT */}
      <div className="hero-left">
        <img src="/images/arrow.png" className="arrow-img" alt="arrow" />

        <h1>
          Transforming <br />
          <span>Ideas Into Reality</span>
        </h1>

        <p>Integrating seamless solutions for operational excellence.</p>

        <button className="explore-btn">
          Explore <br /> Us ↗
        </button>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="hero-right">
        <img src="/images/star.png" className="star-img" alt="star" />

        <img
          src="/images/card.png"
          className="card-img"
          alt="business growth"
        />

        <div className="dots"></div>

        <img src="/images/girl.jpg" className="girl-img" alt="business woman" />
      </div>
    </section>
  );
}

export default HeroSection;