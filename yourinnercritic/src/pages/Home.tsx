import { useEffect, useRef, useState } from "react";
import { EmotionImageComponent } from "../components/Step 4 - Choose Image/EmotionImageComponent";
import { IntroComponent } from "../components/Step 0 - Intro/IntroComponent";
import { CriticThoughtsComponent } from "../components/Step 1 - Critic thoughts/CriticThoughtsComponent";
import { NoticeEmotionComponent } from "../components/Step 3 - Notice emotions/NoticeEmotionComponent";
import { scrollToNextStep } from "../helpers/scrollToNextStep";
import { CriticNameComponent } from "../components/Step 5 - Ciritc Name/CriticNameComponent";
import { DrawingComponent } from "../components/Step 6 - Draw Critic/DrawingComponent";
import { DrawingAnimationComponent } from "../components/Step 7 - Animate Critic/DrawingAnimationComponent";
import { CheckThoughtsComponent } from "../components/Step 2 - Check thoughts/CheckThoughtsComponent";
import { ClosingComponent } from "../components/Step 9 - Closing/ClosingComponent";
import { VoiceTheThoughtComponent } from "../components/Step 8 - Change Voice/VoiceTheThoughtComponent";

export const Home = () => {
  const [fetchedPhotos, setFetchedPhotos] = useState(false);
  const [stepOne, setStepOne] = useState<boolean>(false);
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [stepThree, setStepThree] = useState<boolean>(false);
  const [stepFour, setStepFour] = useState<boolean>(false);
  const [stepFive, setStepFive] = useState<boolean>(false);
  const [stepSix, setStepSix] = useState<boolean>(false);
  const [stepSeven, setStepSeven] = useState<boolean>(false);
  const [stepEight, setStepEight] = useState<boolean>(false);
  const [stepNine, setStepNine] = useState<boolean>(false);
  const fetchedImageRef = useRef<HTMLElement>(null);
  const criticThoughtsRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLElement>(null);
  const noticeEmotionRef = useRef<HTMLElement>(null);
  const emotionImageRef = useRef<HTMLElement>(null);
  const criticNameRef = useRef<HTMLElement>(null);
  const drawingRef = useRef<HTMLElement>(null);
  const animationRef = useRef<HTMLElement>(null);
  const voiceTheThoughtRef = useRef<HTMLElement>(null);
  const closingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (stepOne && criticThoughtsRef.current) {
      setTimeout(() => {
        scrollToNextStep(criticThoughtsRef.current!);
      }, 800);
    }
    if (stepTwo && sliderRef.current) {
      setTimeout(() => {
        scrollToNextStep(sliderRef.current!);
      }, 800);
    }
    if (stepThree && noticeEmotionRef.current) {
      setTimeout(() => {
        scrollToNextStep(noticeEmotionRef.current!);
      }, 800);
    }
    if (stepFour && emotionImageRef.current) {
      setTimeout(() => {
        scrollToNextStep(emotionImageRef.current!);
      }, 800);
    }
    if (fetchedPhotos && fetchedImageRef) {
      setTimeout(() => {
        scrollToNextStep(fetchedImageRef.current!);
      }, 800);
    }
    if (stepFive && criticNameRef.current) {
      setTimeout(() => {
        scrollToNextStep(criticNameRef.current!);
      }, 800);
    }
    if (stepSix && drawingRef.current) {
      setTimeout(() => {
        scrollToNextStep(drawingRef.current!);
      }, 800);
    }
    if (stepSeven && animationRef) {
      setTimeout(() => {
        scrollToNextStep(animationRef.current!);
      }, 800);
    }
    if (stepEight && voiceTheThoughtRef) {
      setTimeout(() => {
        scrollToNextStep(voiceTheThoughtRef.current!);
      }, 800);
    }
    if (stepNine && closingRef) {
      setTimeout(() => {
        scrollToNextStep(closingRef.current!);
      }, 800);
    }
  }, [
    fetchedPhotos,
    stepOne,
    stepTwo,
    stepThree,
    stepFour,
    stepFive,
    stepSix,
    stepSeven,
    stepEight,
    stepNine,
  ]);

  const startOver = () => {
    setStepOne(false);
    setStepTwo(false);
    setStepThree(false);
    setStepFour(false);
    setStepFive(false);
    setStepSix(false);
    setStepSeven(false);
    setStepEight(false);
    setStepNine(false);
  };

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
        <CheckThoughtsComponent
          setStepThree={setStepThree}
          sliderRef={sliderRef}
        />
      )}
      {stepThree && (
        <NoticeEmotionComponent
          setStepFour={setStepFour}
          noticeEmotionRef={noticeEmotionRef}
        />
      )}
      {stepFour && (
        <EmotionImageComponent
          fetchedPhotos={fetchedPhotos}
          setFetchedPhotos={setFetchedPhotos}
          emotionImageRef={emotionImageRef}
          fetchedImageRef={fetchedImageRef}
          setStepFive={setStepFive}
        />
      )}
      {stepFive && (
        <CriticNameComponent
          criticNameRef={criticNameRef}
          setStepSix={setStepSix}
        />
      )}
      {stepSix && (
        <DrawingComponent drawingRef={drawingRef} setStepSeven={setStepSeven} />
      )}
      {stepSeven && (
        <DrawingAnimationComponent
          animationRef={animationRef}
          setStepEight={setStepEight}
        />
      )}
      {stepEight && (
        <VoiceTheThoughtComponent
          voiceTheThoughtRef={voiceTheThoughtRef}
          setStepNine={setStepNine}
        />
      )}
      {stepNine && (
        <ClosingComponent startOver={startOver} closingRef={closingRef} />
      )}
    </>
  );
};
