import { useEffect, useRef, useState } from "react";
import { EmotionImageComponent } from "../components/EmotionImageComponent";
import { IntroComponent } from "../components/IntroComponent";
import { CriticThoughtsComponent } from "../components/CriticThoughtsComponent";
import { SliderComponent } from "../components/SliderComponent";
import { NoticeEmotionComponent } from "../components/NoticeEmotionComponent";
import { scrollToNextStep } from "../helpers/scrollToNextStep";
import { CriticNameComponent } from "../components/CriticNameComponent";
import { DrawingComponent } from "../components/DrawingComponent";
import { DrawingAnimationComponent } from "../components/DrawingAnimationComponent";

export const Home = () => {
  const [fetchedPhotos, setFetchedPhotos] = useState(false);
  const [stepOne, setStepOne] = useState<boolean>(false);
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [stepThree, setStepThree] = useState<boolean>(false);
  const [stepFour, setStepFour] = useState<boolean>(false);
  const [stepFive, setStepFive] = useState<boolean>(false);
  const [stepSix, setStepSix] = useState<boolean>(false);
  const [stepSeven, setStepSeven] = useState<boolean>(false);
  const fetchedImageRef = useRef<HTMLElement>(null);
  const criticThoughtsRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLElement>(null);
  const noticeEmotionRef = useRef<HTMLElement>(null);
  const emotionImageRef = useRef<HTMLElement>(null);
  const criticNameRef = useRef<HTMLElement>(null);
  const drawingRef = useRef<HTMLElement>(null);
  const animationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (fetchedPhotos && fetchedImageRef) {
      setTimeout(() => {
        scrollToNextStep(fetchedImageRef.current!);
      }, 300);
    }
    if (stepOne && criticThoughtsRef.current) {
      setTimeout(() => {
        scrollToNextStep(criticThoughtsRef.current!);
      }, 200);
    }
    if (stepTwo && sliderRef.current) {
      setTimeout(() => {
        scrollToNextStep(sliderRef.current!);
      }, 200);
    }
    if (stepThree && noticeEmotionRef.current) {
      setTimeout(() => {
        scrollToNextStep(noticeEmotionRef.current!);
      }, 200);
    }
    if (stepFour && emotionImageRef.current) {
      setTimeout(() => {
        scrollToNextStep(emotionImageRef.current!);
      }, 200);
    }
    if (stepFive && criticNameRef.current) {
      setTimeout(() => {
        scrollToNextStep(criticNameRef.current!);
      }, 200);
    }
    if (stepSix && drawingRef.current) {
      setTimeout(() => {
        scrollToNextStep(drawingRef.current!);
      }, 200);
    }
    if (stepSeven && animationRef) {
      setTimeout(() => {
        scrollToNextStep(animationRef.current!);
      }, 200);
    }
  }, [fetchedPhotos, stepOne, stepTwo, stepThree, stepFour, stepFive, stepSix]);

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
      {stepSeven && <DrawingAnimationComponent animationRef={animationRef} />}
    </>
  );
};
