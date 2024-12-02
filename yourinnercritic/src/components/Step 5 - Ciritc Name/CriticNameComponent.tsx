import { FormEvent, useState } from "react";
import { saveToLocalStorage } from "../../helpers/saveToLocalStorage";
import { ScrollArrowComponent } from "../ArrowComponent/ArrowComponent";
import { handleArrowClick } from "../../helpers/handleArrowClick";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";
import "./stepFiveStyles.scss";

interface ICriticNameComponentProps {
  criticNameRef: React.RefObject<HTMLElement>;
  setStepSix: (value: boolean) => void;
}

export const CriticNameComponent = ({
  criticNameRef,
  setStepSix,
}: ICriticNameComponentProps) => {
  const [userInput, setUserInput] = useState("");
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();
  const { isVisible: isTextVisible, elementRef: textRef } =
    useVisibilityObserver<HTMLParagraphElement>();
  const { isVisible: isSecondTextVisible, elementRef: secondTextRef } =
    useVisibilityObserver<HTMLParagraphElement>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveToLocalStorage("innerCriticName", userInput);
    setUserInput("");
  };

  return (
    <>
      <section className="critic-name-section" ref={criticNameRef}>
        <img
          className="step-five-img animation-img"
          width={5335}
          height={3557}
          src="/criticNameImage.webp"
          alt="A blurry image of a slate with different names written on it"
          onLoad={(e) => e.currentTarget.classList.add("is-visible")}
          loading="lazy"
        />
        <div className="step-five-wrapper">
          <h2
            ref={headingRef}
            className={`step-five-heading reveal-text ${
              isHeadingVisible ? "is-visible" : ""
            }`}
          >
            Step 5: Choose a name for your inner critic
          </h2>
          <p
            ref={textRef}
            className={`step-five-text reveal-text ${
              isTextVisible ? "is-visible" : ""
            }`}
          >
            Now it's time to take a moment and give your inner critic a name.
          </p>
          <form className="step-five-form" onSubmit={handleSubmit}>
            <input
              className="step-five-input"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="step-five-button btn">Save</button>
          </form>
          <p
            ref={secondTextRef}
            className={`step-five-advice reveal-text ${
              isSecondTextVisible ? "is-visible" : ""
            }`}
          >
            A little advice: Choose a goofy or dorky name that make you
            smile/giggle/roll your eyes in some way. This is not only a way to
            bring in some fun in your day to day life, but also a really helpful
            to keep that inner voice more distant. Like, try noticing a negative
            thought and then reply to yourself "Oh, Hi Klas-Göran (insert your
            choosen inner critics name), are you here again?"
          </p>
        </div>
      </section>
      <button
        className="arrow-btn"
        onClick={() => {
          handleArrowClick(setStepSix);
        }}
      >
        {" "}
        <ScrollArrowComponent />
      </button>
    </>
  );
};
