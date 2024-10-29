import { useRef, useState } from "react";
import { EmotionImageComponent } from "../components/EmotionImageComponent";
import { IntroComponent } from "../components/IntroComponent";
import { CriticThoughtsComponent } from "../components/CriticThoughtsComponent";
import { SliderComponent } from "../components/SliderComponent";
import { NoticeEmotionComponent } from "../components/NoticeEmotionComponent";

export const Home = () => {
  const [stepOne, setStepOne] = useState<boolean>(false);
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
        setStepOne={setStepOne}
        scrollToNextStep={scrollToNextStep}
        criticThoughtsRef={criticThoughtsRef}
      />
      {stepOne && (
        <CriticThoughtsComponent criticThoughtsRef={criticThoughtsRef} />
      )}
      {stepOne && <EmotionImageComponent />}
      <SliderComponent />
      <NoticeEmotionComponent />
    </>
  );
};
