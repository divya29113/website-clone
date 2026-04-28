import "../../styles/whoWeAre.css";

function WhoWeAreSection() {
  return (
    <section className="who-section">
      <div className="who-left">
        <img src="/images/who-main.jpg" className="who-main-img" alt="Who we are" />

        <img src="/images/who-small.jpg" className="who-small-img" alt="Team" />
      </div>

      <div className="who-right">
        <p className="who-subtitle">WHO WE ARE</p>

        <h2>
          We want to bring the <br />
          <span>business ↗</span> and the <br />
          <span>digital ↗</span> world <br />
          together
        </h2>

        <p className="who-description">
          We’re a team of strategic digital marketing working globally with
          largest brands. We believe that progress only happens when you make
          things safe. We combine ideas and behaviors, and insights with design,
          technological data to produce brand experiences that customers love our
          services.
        </p>

        <p className="who-bold">
          Developing a brand requires a great deal of effort in collaboration
          with strong and reliable development partners.
        </p>
      </div>
    </section>
  );
}

export default WhoWeAreSection;