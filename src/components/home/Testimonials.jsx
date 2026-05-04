import "../../styles/testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial-marquee">
        <span>What Our Clients Say</span>
        <b>*</b>
        <span>What Our Clients Say</span>
        <b>*</b>
        <span>What Our Clients Say</span>
      </div>

      <div className="testimonial-content">
        <img src="/images/testimonial1.jpg" alt="client" className="client-img" />

        <div className="stars">★ ★ ★ ★ ★</div>

        <p className="client-review">
          “I would like to express my thanks & appreciation to you for
          understanding the subject matter and for your excellent writing.
          Good job and well done”
        </p>

        <h4>Jordan Peele</h4>
        <p className="role">Manager</p>
      </div>
    </section>
  );
}

export default Testimonials;