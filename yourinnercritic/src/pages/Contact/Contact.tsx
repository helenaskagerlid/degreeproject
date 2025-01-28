import "./contactStyles.scss";

export const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <article className="contact-content">
          <div className="contact-text-wrapper">
            <h2>Contact</h2>
            <p className="contact-text">
              If you have any questions about the project feel free to reach out
              to me at helenaskagerlid@gmail.com
            </p>
          </div>
          <div className="contact-image-wrapper">
            <img
              className="contact-photo"
              src="\public\helenaprofile.jpg"
              width={1920}
              height={1280}
              onLoad={(e) => e.currentTarget.classList.add("is-visible")}
              alt="a profile pictore of a woman with blond hair"
            />
          </div>
        </article>
      </section>
    </>
  );
};
