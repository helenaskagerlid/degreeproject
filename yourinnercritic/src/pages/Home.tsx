import { useRef, useState } from "react";
import { EmotionImageComponent } from "../components/EmotionImageComponent";
import { IntroComponent } from "../components/IntroComponent";
import { CriticThoughtsComponent } from "../components/CriticThoughtsComponent";
import { SliderComponent } from "../components/SliderComponent";

export const Home = () => {
  const [isStartedTrue, setIsStartedTrue] = useState<boolean>(false);
  const criticThoughtsRef = useRef<HTMLElement>(null);

  const scrollToNextStep = (refElement: HTMLElement) => {
    if (refElement) {
      const headerHeight = 120;
      const offsetTop =
        refElement.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <IntroComponent
        setIsStartedTrue={setIsStartedTrue}
        scrollToNextStep={scrollToNextStep}
        criticThoughtsRef={criticThoughtsRef}
      />
      {isStartedTrue && (
        <CriticThoughtsComponent criticThoughtsRef={criticThoughtsRef} />
      )}
      {isStartedTrue && <EmotionImageComponent />}
      <SliderComponent />
    </>
  );
};
