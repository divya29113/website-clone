import "../../styles/whyChoose.css";

function WhyChoose() {
  return (
    <section className="why">

      {/* LEFT */}
      <div className="why-left">
        <p className="why-sub">WHY CHOOSE US</p>

        <h2>
          Reliable, Customized <br />
          Solutions for Your <br />
          Business Needs
        </h2>
      </div>

      {/* RIGHT */}
      <div className="why-grid">

        <div className="box box1 dark">Confidentiality & Security</div>
        <div className="box box2">Scalable & Robust Solutions</div>

        <div className="box box3">Flexible Engagement Models</div>
        <div className="box box4">24/7 Support & Maintenance</div>
        <div className="box box5">Effective & Expert Solutions</div>
        <div className="box box6">Cutting-Edge Technology</div>

        <div className="box box7">Out-of-Box Approach</div>
        <div className="box box8 dark">Assurance of Quality</div>

        <div className="circle">Have a Project In Your Mind? ↗</div>

      </div>

    </section>
  );
}

export default WhyChoose;