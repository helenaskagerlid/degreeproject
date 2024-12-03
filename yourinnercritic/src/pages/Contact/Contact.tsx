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
              src="\public\helenaprofile.JPG"
              alt=""
            />
          </div>
        </article>
      </section>
    </>
  );
};
