import "../../styles/highlights.css";

function Highlights() {
  return (
    <section className="highlights">

      <p className="hl-sub">WEBSITE</p>
      <h2>Highlights</h2>

      <div className="hl-grid">

        {/* LEFT */}
        <div className="hl-left">
          <img src="/images/img1.jpg" className="small" />
          <img src="/images/img2.jpg" className="small" />
        </div>

        {/* CENTER BIG */}
        <div className="hl-center">
          <img src="/images/img3.jpg" className="big" />
        </div>

        {/* RIGHT */}
        <div className="hl-right">
          <img src="/images/img4.jpg" className="small" />
          <img src="/images/img5.jpg" className="small" />
        </div>

      </div>

    </section>
  );
}

export default Highlights;