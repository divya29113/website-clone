import "../../styles/highlights.css";

const projects = [
  { img: "img1.jpg", title: "Project One" },
  { img: "img2.jpg", title: "Project Two" },
  { img: "img3.jpg", title: "Project Three" },
  { img: "img4.jpg", title: "Project Four" },
  { img: "img5.jpg", title: "Project Five" },
  { img: "img6.jpg", title: "Project Six" },
  { img: "img7.jpg", title: "Project Seven" },
];

function Highlights() {
  const repeatedProjects = [...projects, ...projects];

  return (
    <section className="highlights">
      <p className="hl-sub">WEBSITE</p>
      <h2>Highlights</h2>

      <div className="hl-grid">
        {repeatedProjects.map((project, index) => (
          <div className="hl-card" key={index}>
            <img src={`/images/${project.img}`} alt={project.title} />
            <div className="hl-overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;