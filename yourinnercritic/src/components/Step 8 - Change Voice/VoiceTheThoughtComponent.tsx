import { useEffect, useState } from "react";
import { ScrollArrowComponent } from "../ArrowComponent/ArrowComponent";
import { getFromLocalStorage } from "../../helpers/saveToLocalStorage";
import { ChangeVoiceComponent } from "./ChangeVoiceComponent";
import { handleArrowClick } from "../../helpers/handleArrowClick";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";
import "./stepEightStyles.scss";

interface ICompareThoughtsComponentProps {
  voiceTheThoughtRef: React.RefObject<HTMLElement>;
  setStepNine: (value: boolean) => void;
}

export const VoiceTheThoughtComponent = ({
  voiceTheThoughtRef,
  setStepNine,
}: ICompareThoughtsComponentProps) => {
  const [innerCriticName, setInnerCriticName] = useState("");
  const [criticalThoughts, setCriticalThoughts] = useState("");
  const [savedAnimation, setSavedAnimation] = useState("");
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();
  const { isVisible: isTextVisible, elementRef: textRef } =
    useVisibilityObserver<HTMLParagraphElement>();
  const { isVisible: isSecondTextVisible, elementRef: secondTextRef } =
    useVisibilityObserver<HTMLParagraphElement>();
  // const { isVisible: isThirdTextVisible, elementRef: thirdTextRef } =
  //   useVisibilityObserver<HTMLParagraphElement>();
  const { isVisible: isFourthTextVisible, elementRef: fourthTextRef } =
    useVisibilityObserver<HTMLParagraphElement>();

  useEffect(() => {
    const fetchedName = getFromLocalStorage("innerCriticName");
    setInnerCriticName(fetchedName);
    const fetchedThoughts = getFromLocalStorage("criticalThoughts");
    setCriticalThoughts(fetchedThoughts);
    const fetchedAnimation = getFromLocalStorage("savedAnimation");
    setSavedAnimation(fetchedAnimation);
  }, []);
  return (
    <>
      <section className="voice-the-thoughts-section" ref={voiceTheThoughtRef}>
        <h2
          ref={headingRef}
          className={`step-eight-heading reveal-text ${
            isHeadingVisible ? "is-visible" : ""
          }`}
        >
          Step 8: Voice the thoughts
        </h2>
        <div className="step-eight-text-wrapper">
          <p
            ref={textRef}
            className={`step-eight-text1 reveal-text ${
              isTextVisible ? "is-visible" : ""
            }`}
          >
            You critic <strong>{innerCriticName}</strong> has been having some
            unhelpful thoughts. The thoughts in question: "Me,{" "}
            <strong>{innerCriticName}</strong>, have been thinking: '
            {criticalThoughts}'"
          </p>
          <p
            ref={fourthTextRef}
            className={`step-eight-text4 reveal-text ${
              isFourthTextVisible ? "is-visible" : ""
            }`}
          >
            Your next step is to record saying these words in a silly voice.
            Really imagine that it is the animated {innerCriticName} who is
            saying this, and give it an exaggerative type of voice that give you
            a fun time. The goal here is to make the words feel even more
            distant, but in a goofy way. Some inspiration of types of voices you
            can try out: American, swenglish, a not so impressed teenager, a
            cartoon character..
          </p>
        </div>
        {savedAnimation && (
          <>
            {" "}
            {/* <span className="material-symbols-outlined">arrow_downward</span> */}
            <br /> <br />
            <div className="step-eight-iframe-wrapper">
              <iframe
                className={`step-eight-iframe animation-img text-reveal ${
                  isSecondTextVisible ? "is-visible" : ""
                }`}
                src={savedAnimation}
                width={450}
                height={480}
                onLoad={(e) => e.currentTarget.classList.add("is-visible")}
              ></iframe>
              <p
                ref={secondTextRef}
                className={`step-eight-text2 text-reveal ${
                  isSecondTextVisible ? "is-visible" : ""
                }`}
              >
                The one and only {innerCriticName}{" "}
              </p>
            </div>
          </>
        )}
        {/* <p
          ref={thirdTextRef}
          className={`step-eight-text3 reveal-text ${
            isThirdTextVisible ? "is-visible" : ""
          }`}
        >
          The thoughts in question: "Me, <strong>{innerCriticName}</strong>,
          have been thinking: '{criticalThoughts}'"
        </p> */}

        <p className="step-eight-text5">
          BONUS: After you have finished recording you can even try to add a fun
          chipmunk or mountaintroll effect!
        </p>
        <div className="step-eight-change-voice-wrapper">
          <ChangeVoiceComponent />
        </div>
      </section>
      <button
        className="arrow-btn"
        onClick={() => {
          handleArrowClick(setStepNine);
        }}
      >
        <ScrollArrowComponent />
      </button>
    </>
  );
};
