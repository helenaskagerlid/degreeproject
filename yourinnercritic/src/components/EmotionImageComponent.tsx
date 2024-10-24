import { FormEvent, useState } from "react";
import { IHits } from "../models/IPixabayResponse";
import { getPhotos } from "../service/getPhotosService";

export const EmotionImageComponent = () => {
  const [myPhotos, setMyPhotos] = useState<IHits[]>([]);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const photos = await getPhotos(userInput);

    console.log("MEN KOLLA", photos);
    setMyPhotos(photos);
  };
  return (
    <>
      <p>LÄNGD: {myPhotos.length}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Search Photos</button>
      </form>
      <div>
        {myPhotos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.webformatURL} />
            <p>Photograpger: {photo.user}</p>
            <a href={photo.pageURL}>Photo-page here</a>
          </div>
        ))}
      </div>
    </>
  );
};
