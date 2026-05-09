import "../styles/career.css";

function Career() {
  const benefits = [
    {
      img: "service1.jpg",
      title: "Flexible Working Hours",
      desc: "Flexible working hours help employees balance work and personal life.",
    },
    {
      img: "service2.jpg",
      title: "Company Activities",
      desc: "We encourage teamwork through events, learning, and fun activities.",
    },
    {
      img: "service3.jpg",
      title: "Awesome Co-Workers",
      desc: "Work with supportive and talented people in a friendly environment.",
    },
    {
      img: "service4.jpg",
      title: "Transparency From Top To Bottom",
      desc: "We follow open communication and clear decision-making across teams.",
    },
    {
      img: "service5.jpg",
      title: "Competitive Salaries",
      desc: "We value skills and provide fair compensation for every role.",
    },
    {
      img: "service6.jpg",
      title: "Growth Opportunities",
      desc: "Improve your career with learning, mentoring, and project exposure.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}

      <section className="career-hero">
        <div className="career-circle left-circle"></div>
        <div className="career-circle right-circle"></div>

        <div className="career-container">
          <div className="career-image-left">
            <img src="/images/career1.jpg" alt="career" />
          </div>

          <div className="career-content">
            <span className="career-dot"></span>

            <h1>
              Career <br />
              Growth
            </h1>

            <p>
              Unlock your potential with exciting opportunities
              <br />
              in a fast-paced industry.
            </p>
          </div>

          <div className="career-image-right">
            <img src="/images/career2.jpg" alt="career" />
          </div>
        </div>
      </section>

      {/* LIFE SECTION */}

      <section className="career-life">
        <h2 className="life-title">
          Better Together, Grow Together
        </h2>

        <div className="life-content">
          <div>
            <h3>Life</h3>
            <p>@ VEDHANTHI TECHNOLOGIES</p>
          </div>

          <p className="life-desc">
            It is a dream to work with Vedhanthi Technologies.
            The culture and ecosystem are excellent and supportive
            for every employee.
          </p>
        </div>

        {/* STEPS */}

        <div className="steps-wrapper">
          <div className="step-circle">
            <h4>Step 01</h4>
            <p>Submit your application and resume.</p>
          </div>

          <div className="step-circle">
            <h4>Step 02</h4>
            <p>HR reviews your profile and skills.</p>
          </div>

          <div className="step-circle">
            <h4>Step 03</h4>
            <p>Attend technical interview or task.</p>
          </div>

          <div className="step-circle">
            <h4>Step 04</h4>
            <p>Attend HR discussion and final review.</p>
          </div>

          <div className="step-circle">
            <h4>Step 05</h4>
            <p>Receive offer letter and joining details.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}

      <section className="benefits-section">
        <h2 className="benefits-title">
          BENEFITS OF WORKING WITH VEDHANTHI TECHNOLOGIES
        </h2>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <img
                className="benefit-bg"
                src={`/images/${item.img}`}
                alt={item.title}
              />

              <div className="benefit-default">
                <h4>{item.title}</h4>

                <div className="benefit-emoji">
                  {index === 0 && "📅"}
                  {index === 1 && "📊"}
                  {index === 2 && "👥"}
                  {index === 3 && "🖥️"}
                  {index === 4 && "💰"}
                  {index === 5 && "📈"}
                </div>
              </div>

              <div className="benefit-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIRING SECTION */}

      <section className="hiring-section">
        <p className="hiring-subtitle">FIND YOUR FIT</p>

        <h2>We’re Currently hiring</h2>

        <div className="job-list">
          {[
            ["01", "Software Engineer – PHP", "02 Open Roles"],
            ["02", "Software Engineer – Android", "04 Open Roles"],
            ["03", "Software Engineer – Java", "01 Open Roles"],
            ["04", "Software Engineer – Dot Net", "03 Open Roles"],
            ["05", "React.Js Developer", "06 Open Roles"],
            ["06", "Software Engineer – Tester", "02 Open Roles"],
            ["07", "IOS Developer", "03 Open Roles"],
            ["08", "Business Development", "01 Open Roles"],
          ].map(([num, title, role], index) => (
            <div className="job-item" key={index}>
              <div className="job-left">
                <span>{num} /</span>

                <h3>{title}</h3>
              </div>

              <div className="job-right">
                <p>( {role} )</p>

                <span className="job-arrow">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Career;