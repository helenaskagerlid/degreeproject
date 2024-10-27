import { useRef, useState } from "react";
import { EmotionImageComponent } from "../components/EmotionImageComponent";
import { IntroComponent } from "../components/IntroComponent";
import { CriticThoughtsComponent } from "../components/CriticThoughtsComponent";

export const Home = () => {
  const [isStartedTrue, setIsStartedTrue] = useState<boolean>(false);
  const criticThoughtsRef = useRef(null);
  return (
    <>
      <IntroComponent
        setIsStartedTrue={setIsStartedTrue}
        // criticThoughtsRef={criticThoughtsRef}
      />
      {isStartedTrue && (
        <CriticThoughtsComponent criticThoughtsRef={criticThoughtsRef} />
      )}
      {isStartedTrue && <EmotionImageComponent />}
    </>
  );
};
