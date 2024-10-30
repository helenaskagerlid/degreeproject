import { useEffect, useRef, useState } from "react";
import { EmotionImageComponent } from "../components/EmotionImageComponent";
import { IntroComponent } from "../components/IntroComponent";
import { CriticThoughtsComponent } from "../components/CriticThoughtsComponent";
import { SliderComponent } from "../components/SliderComponent";
import { NoticeEmotionComponent } from "../components/NoticeEmotionComponent";
import { scrollToNextStep } from "../helpers/scrollToNextStep";

export const Home = () => {
  const [stepOne, setStepOne] = useState<boolean>(false);
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [stepThree, setStepThree] = useState<boolean>(false);
  const [stepFour, setStepFour] = useState<boolean>(false);
  const criticThoughtsRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLElement>(null);
  const noticeEmotionRef = useRef<HTMLElement>(null);
  const emotionImageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (stepOne && criticThoughtsRef.current) {
      setTimeout(() => {
        scrollToNextStep(criticThoughtsRef.current!);
      }, 100);
    }
    if (stepTwo && sliderRef.current) {
      setTimeout(() => {
        scrollToNextStep(sliderRef.current!);
      }, 100);
    }
    if (stepThree && noticeEmotionRef.current) {
      setTimeout(() => {
        scrollToNextStep(noticeEmotionRef.current!);
      }, 100);
    }
    if (stepFour && emotionImageRef.current) {
      setTimeout(() => {
        scrollToNextStep(emotionImageRef.current!);
      }, 100);
    }
  }, [stepOne, stepTwo, stepThree, stepFour]);

  return (
    <>
      <IntroComponent setStepOne={setStepOne} />
      {stepOne && (
        <CriticThoughtsComponent
          criticThoughtsRef={criticThoughtsRef}
          setStepTwo={setStepTwo}
        />
      )}
      {stepTwo && (
        <SliderComponent setStepThree={setStepThree} sliderRef={sliderRef} />
      )}
      {stepThree && (
        <NoticeEmotionComponent
          setStepFour={setStepFour}
          noticeEmotionRef={noticeEmotionRef}
        />
      )}
      {stepFour && <EmotionImageComponent emotionImageRef={emotionImageRef} />}
    </>
  );
};
