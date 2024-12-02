import { FormEvent, useState } from "react";
import { IHits } from "../../models/IPixabayResponse";
import { getPhotos } from "../../service/getPhotosService";
import { ScrollArrowComponent } from "../ArrowComponent/ArrowComponent";
import { handleArrowClick } from "../../helpers/handleArrowClick";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";
import "./stepFourStyles.scss";

interface IEmotionImageComponentProps {
  emotionImageRef: React.RefObject<HTMLElement>;
  fetchedPhotos: boolean;
  fetchedImageRef: React.RefObject<HTMLElement>;
  setFetchedPhotos: (value: boolean) => void;
  setStepFive: (value: boolean) => void;
}

export const EmotionImageComponent = ({
  emotionImageRef,
  fetchedPhotos,
  setFetchedPhotos,
  fetchedImageRef,
  setStepFive,
}: IEmotionImageComponentProps) => {
  const [myPhotos, setMyPhotos] = useState<IHits[]>([]);
  const [userInput, setUserInput] = useState("");
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();
  const { isVisible: isTextVisible, elementRef: textRef } =
    useVisibilityObserver<HTMLParagraphElement>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const photos = await getPhotos(userInput);
    setMyPhotos(photos);
    setFetchedPhotos(true);
  };

  const saveImage = (imageLink: string) => {
    localStorage.setItem("savedImage", JSON.stringify(imageLink));
  };

  return (
    <>
      <section className="emotion-image-section" ref={emotionImageRef}>
        <img
          className="step-four-img animation-img"
          width={1280}
          height={853}
          src="/introemotionimage.webp"
          alt="A woman sitting on the street with a camera on a stand in front of her"
          onLoad={(e) => e.currentTarget.classList.add("is-visible")}
          loading="lazy"
        />
        <div className="step-four-wrapper">
          <h2
            ref={headingRef}
            className={`step-four-heading reveal-text ${
              isHeadingVisible ? "is-visible" : ""
            }`}
          >
            Step 4: Find an image to represent the feeling
          </h2>

          <p
            ref={textRef}
            className={`step-four-text reveal-text ${
              isTextVisible ? "is-visible" : ""
            }`}
          >
            Your next step is to write the emotion you notice in step three in
            the box below, click search and choose an image that you think
            represent how you are feeling. This is helpful because it visualize
            the emotion outside of your body and helps the brain to get some
            distance to the emotion
          </p>
          <form className="step-four-form" onSubmit={handleSubmit}>
            <input
              className="step-four-input"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="btn step-four-button">Search Photos</button>
          </form>
        </div>
      </section>
      {fetchedPhotos && (
        <section className="step-four-images-section" ref={fetchedImageRef}>
          {myPhotos.map((photo) => (
            <div
              className="step-four-image-wrapper"
              key={photo.id}
              id={photo.webformatURL}
            >
              <img
                className="step-four-search-image"
                src={photo.webformatURL}
                onClick={() => {
                  saveImage(photo.webformatURL);
                }}
              />
              <p>
                Photograpger:{" "}
                <a target="_blank" href={photo.pageURL}>
                  {photo.user}
                </a>
              </p>
            </div>
          ))}
        </section>
      )}

      <button
        className="arrow-btn"
        onClick={() => {
          handleArrowClick(setStepFive);
        }}
      >
        <ScrollArrowComponent />
      </button>
    </>
  );
};
