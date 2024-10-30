import { FormEvent, useState } from "react";
import { IHits } from "../models/IPixabayResponse";
import { getPhotos } from "../service/getPhotosService";

interface IEmotionImageComponentProps {
  emotionImageRef: React.RefObject<HTMLElement>;
  fetchedPhotos: boolean;
  setFetchedPhotos: (value: boolean) => void;
  fetchedImageRef: React.RefObject<HTMLElement>;
}

export const EmotionImageComponent = ({
  emotionImageRef,
  fetchedPhotos,
  setFetchedPhotos,
  fetchedImageRef,
}: IEmotionImageComponentProps) => {
  const [myPhotos, setMyPhotos] = useState<IHits[]>([]);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const photos = await getPhotos(userInput);
    setMyPhotos(photos);
    setFetchedPhotos(true);
  };
  return (
    <>
      <section ref={emotionImageRef}>
        <h2>Step 4: Find an image to represent the feeling</h2>
        <img className="intro-emotion-image" src="/introemotionimage.jpg" />
        <p>
          Your next step is to write the emotion you notice in step three in the
          box below, click search and choose an image that you think represent
          how you are feeling
        </p>{" "}
        <p>
          This is helpful because it visualize the emotion outside of your body
          and helps the brain to get some distance to the emotion
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
              <div key={photo.id}>
                <img src={photo.webformatURL} />
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
      </section>
    </>
  );
};
