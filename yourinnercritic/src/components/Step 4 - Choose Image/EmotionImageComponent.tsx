import { FormEvent, useState } from "react";
import { IHits } from "../../models/IPixabayResponse";
import { getPhotos } from "../../service/getPhotosService";
import { ScrollArrowComponent } from "../ScrollArrowComponent";
import { handleArrowClick } from "../../helpers/handleArrowClick";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";

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
        <h2
          ref={headingRef}
          className={`reveal-text ${isHeadingVisible ? "is-visible" : ""}`}
        >
          Step 4: Find an image to represent the feeling
        </h2>
        <img
          className="intro-emotion-image animation-img"
          width={1280}
          height={853}
          src="/introemotionimage.webp"
          alt="A woman sitting on the street with a camera on a stand in front of her"
          onLoad={(e) => e.currentTarget.classList.add("is-visible")}
          loading="lazy"
        />
        <p
          ref={textRef}
          className={`reveal-text ${isTextVisible ? "is-visible" : ""}`}
        >
          Your next step is to write the emotion you notice in step three in the
          box below, click search and choose an image that you think represent
          how you are feeling. This is helpful because it visualize the emotion
          outside of your body and helps the brain to get some distance to the
          emotion
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button>Search Photos</button>
        </form>
        {fetchedPhotos && (
          <section ref={fetchedImageRef}>
            {myPhotos.map((photo) => (
              <div key={photo.id} id={photo.webformatURL}>
                <img
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
          onClick={() => {
            handleArrowClick(setStepFive);
          }}
        >
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
