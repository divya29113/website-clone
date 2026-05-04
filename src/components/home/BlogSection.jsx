import "../../styles/blog.css";

function BlogSection() {
  return (
    <section className="blog">

      <p className="blog-sub">BLOGS</p>

      <h2>
        Latest <span>articles</span>
      </h2>

      <div className="blog-grid">

        {/* BLOG 1 */}
        <div className="blog-card">
          <div className="img-box">
            <img src="/images/blog1.jpg" />
            <div className="date">17<br /><span>Apr 2021</span></div>
          </div>

          <p className="meta">Development • Admin</p>

          <h3>
            Our Top10 Great Examples of Responsive Websites
          </h3>
        </div>

        {/* BLOG 2 */}
        <div className="blog-card">
          <div className="img-box">
            <img src="/images/blog2.jpg" />
            <div className="date">09<br /><span>Apr 2022</span></div>
          </div>

          <p className="meta">Designing • Admin</p>

          <h3>
            We Make 5 Web Design Blogs You Should Be Reading
          </h3>
        </div>

        {/* BLOG 3 */}
        <div className="blog-card">
          <div className="img-box">
            <img src="/images/blog3.jpg" />
            <div className="date">30<br /><span>Mar 2023</span></div>
          </div>

          <p className="meta">Branding • Admin</p>

          <h3>
            7 Ways To Improve Website Usability And Accessibility
          </h3>
        </div>

      </div>

      {/* BUTTON */}
      <div className="blog-btn">
        <button>↗ See All Articles</button>
      </div>

    </section>
  );
}

export default BlogSection;