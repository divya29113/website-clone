import "../../styles/workGallery.css";

function WorkGallery() {
  return (
    <section className="work-gallery">

      {/* LEFT SIDE */}
      <div className="wg-left">
        <p className="wg-sub">WORK GALLERY</p>

        <h2>
          Showcasing Our Best <br /> Works
        </h2>

        <p className="wg-desc">
          Discover our diverse portfolio showcasing innovative works and
          successful collaborations, reflecting our commitment to excellence
          and client satisfaction across various industries.
        </p>

        {/* PROGRESS BARS */}
        <div className="progress">
          <p>Branding</p>
          <div className="bar">
            <div className="fill" style={{ width: "92%" }}>
              92%
            </div>
          </div>
        </div>

        <div className="progress">
          <p>Development</p>
          <div className="bar">
            <div className="fill" style={{ width: "95%" }}>
              95%
            </div>
          </div>
        </div>

        <div className="progress">
          <p>Digital Marketing</p>
          <div className="bar">
            <div className="fill" style={{ width: "97%" }}>
              97%
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="wg-right">
        <img
          src="/images/gallery.jpg"
          alt="gallery"
          className="gallery-img"
        />

        {/* CIRCLE OVERLAY */}
        <div className="circle-overlay">
          <span>Our Creations • Our Creations •</span>
          <div className="arrow">↗</div>
        </div>
      </div>

    </section>
  );
}

export default WorkGallery;