import "../../styles/process.css";

function ProcessSection() {
  return (
    <section className="process-section">
      <h2>Our Streamlined Process</h2>

      <div className="process-tabs">
        <button className="active">Planning & Analysis</button>
        <button>Development</button>
        <button>Maintenance & Support</button>
        <button>Project Closure & Evaluation</button>
      </div>

      <div className="process-content">
        <div className="process-left">
          <img src="/images/tab.jpg" alt="Planning process" />
        </div>

        <div className="process-right">
          <h3>Crafting the Blueprint</h3>

          <p>
            We begin by understanding your vision and objectives, conducting
            thorough research, and creating a detailed plan. This foundational
            step ensures that we align our strategy with your business goals,
            setting the stage for a successful project.
          </p>

          <div className="process-circle">
            Have A Project In <br />
            Your Mind? ↗
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;