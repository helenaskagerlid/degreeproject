import { FormEvent, useState } from "react";
import { saveToLocalStorage } from "../../helpers/saveToLocalStorage";
import { ScrollArrowComponent } from "../ScrollArrowComponent";
import { handleArrowClick } from "../../helpers/handleArrowClick";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";

interface IDrawingAnimationComponentProps {
  animationRef: React.RefObject<HTMLElement>;
  setStepEight: (value: boolean) => void;
}

export const DrawingAnimationComponent = ({
  animationRef,
  setStepEight,
}: IDrawingAnimationComponentProps) => {
  const [userInput, setUserInput] = useState("");
  const [saved, setSaved] = useState<boolean>(false);
  const [notSaved, setNotSaved] = useState<boolean>(false);
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveToLocalStorage("savedAnimation", userInput);

    if (userInput) {
      setSaved(true);
      setNotSaved(false);
    } else {
      setSaved(false);
      setNotSaved(true);
    }
    setUserInput("");
  };

  return (
    <>
      <section className="animation-section" ref={animationRef}>
        <h2
          ref={headingRef}
          className={`reveal-text ${isHeadingVisible ? "is-visible" : ""}`}
        >
          Step 7: Animate your inner critic
        </h2>
        <iframe
          className="animation-image"
          src="https://sketch.metademolab.com/canvas"
          width="1100px"
          height="700px"
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add("is-visible")}
        ></iframe>
        <h3>
          Hey, before you go to the next step, remember to save the link for
          your favourite animation and put it below!
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button>Save</button>
          {saved && <p>The animation was saved successfully</p>}
          {notSaved && <p>You have to add a link to your animation</p>}
        </form>
        <button
          onClick={() => {
            handleArrowClick(setStepEight);
          }}
        >
          {" "}
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
