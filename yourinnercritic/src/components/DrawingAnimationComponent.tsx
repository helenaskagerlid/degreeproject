import { FormEvent, useState } from "react";
import { saveToLocalStorage } from "../helpers/saveToLocalStorage";
import { ScrollArrowComponent } from "./ScrollArrowComponent";
import { handleArrowClick } from "../helpers/handleArrowClick";

interface IDrawingAnimationComponentProps {
  animationRef: React.RefObject<HTMLElement>;
  setStepEight: (value: boolean) => void;
}

export const DrawingAnimationComponent = ({
  animationRef,
  setStepEight,
}: IDrawingAnimationComponentProps) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveToLocalStorage("savedAnimation", userInput);
  };
  return (
    <>
      <section className="animation-section" ref={animationRef}>
        <h2>Step 7: Animate your inner critic</h2>
        <iframe
          src="https://sketch.metademolab.com/canvas"
          width="1100px"
          height="700px"
          loading="lazy"
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
