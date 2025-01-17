import { handleArrowClick } from "../../helpers/handleArrowClick";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";
import { ScrollArrowComponent } from "../ArrowComponent/ArrowComponent";
import "./stepSixStyles.scss";

interface IDrawingComponentProps {
  drawingRef: React.RefObject<HTMLElement>;
  setStepSeven: (value: boolean) => void;
}

export const DrawingComponent = ({
  drawingRef,
  setStepSeven,
}: IDrawingComponentProps) => {
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();
  const { isVisible: isTextVisible, elementRef: textRef } =
    useVisibilityObserver<HTMLParagraphElement>();

  return (
    <>
      <section className="drawing-section" ref={drawingRef}>
        <img
          className="step-six-img animation-img"
          src="/drawing-critic-img.jpg"
          width={6000}
          height={4000}
          alt="a child writing a cartoon character on a paper on the floor"
          onLoad={(e) => e.currentTarget.classList.add("is-visible")}
        />
        <div className="step-six-text-wrapper">
          <h2
            ref={headingRef}
            className={`step-six-heading reveal-text ${
              isHeadingVisible ? "is-visible" : ""
            }`}
          >
            Step 6: Draw your inner critic
          </h2>
          <div
            ref={textRef}
            className={`step-six-text reveal-text ${
              isTextVisible ? "is-visible" : ""
            }`}
          >
            <p>
              {" "}
              Now it’s time to unleash your creativity and leave perfectionism
              behind! Your task is to draw your inner critic. You can use paper
              and coloring pens or a digital tool, but we recommend the physical
              approach, as it’s shown to have a positive effect on the brain.
              This step helps create distance from your inner critic, making it
              feel more separate from you. Let your creativity flow—give it
              shape, color, and details that reflect your feelings. Don’t worry
              about perfection, just enjoy the process and express yourself!
            </p>
          </div>
        </div>
      </section>
      <button
        className="arrow-btn"
        onClick={() => {
          handleArrowClick(setStepSeven);
        }}
      >
        <ScrollArrowComponent />
      </button>
    </>
  );
};
