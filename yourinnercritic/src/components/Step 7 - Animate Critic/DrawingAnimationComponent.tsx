// import { FormEvent, useState } from "react";
// import { saveToLocalStorage } from "../../helpers/saveToLocalStorage";
import { ScrollArrowComponent } from "../ArrowComponent/ArrowComponent";
import { handleArrowClick } from "../../helpers/handleArrowClick";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";
import "./stepSevenStyles.scss";

interface IDrawingAnimationComponentProps {
  animationRef: React.RefObject<HTMLElement>;
  setStepEight: (value: boolean) => void;
}

export const DrawingAnimationComponent = ({
  animationRef,
  setStepEight,
}: IDrawingAnimationComponentProps) => {
  // const [userInput, setUserInput] = useState("");
  // const [saved, setSaved] = useState<boolean>(false);
  // const [notSaved, setNotSaved] = useState<boolean>(false);
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   saveToLocalStorage("savedAnimation", userInput);

  //   if (userInput) {
  //     setSaved(true);
  //     setNotSaved(false);
  //   } else {
  //     setSaved(false);
  //     setNotSaved(true);
  //   }
  //   setUserInput("");
  // };

  return (
    <>
      <section className="animation-section" ref={animationRef}>
        <div className="step-seven-intro-wrapper">
          <h2
            ref={headingRef}
            className={`step-seven-heading reveal-text ${
              isHeadingVisible ? "is-visible" : ""
            }`}
          >
            Step 7: Animate your inner critic
          </h2>
          <p className="step-seven-text">
            Once your drawing is done, you’ll animate your inner critic using
            the Animated Drawing tool. Take a photo of your drawing and upload
            it to the page below. Then follow the guiding steps to animate it.
          </p>
        </div>
        <iframe
          className="step-seven-animation-frame animation-image"
          src="https://sketch.metademolab.com/canvas"
          width="1100px"
          height="700px"
          onLoad={(e) => e.currentTarget.classList.add("is-visible")}
        ></iframe>
        <p className="step-seven-text">
          When you have seen your inner critic in some different funny
          animations and feel ready for the next step you kan press the arrow
          below
        </p>
        {/*
        <img
          className="step-seven-save-animation-img"
          src="/share-animation-guide.png"
          alt=""
        />
        <p>
          Under your animated critic there should be a share button. Press that.
        </p>
        <img
          className="step-seven-save-animation-img2"
          src="/share-animation-guide3.png"
          alt=""
        />
        <p>
          Now click the little link icon and you have copied your
          animation-link. Put that below.
        </p>
        <form className="step-seven-form" onSubmit={handleSubmit}>
          <input
            className="step-seven-input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="step-seven-button btn">Save</button>
          {saved && <p>The animation was saved successfully</p>}
          {notSaved && <p>You have to add a link to your animation</p>}
        </form> */}
      </section>
      <button
        className="arrow-btn"
        onClick={() => {
          handleArrowClick(setStepEight);
        }}
      >
        {" "}
        <ScrollArrowComponent />
      </button>
    </>
  );
};
