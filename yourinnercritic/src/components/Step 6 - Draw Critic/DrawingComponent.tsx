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
          loading="lazy"
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
          <p
            ref={textRef}
            className={`step-six-text reveal-text ${
              isTextVisible ? "is-visible" : ""
            }`}
          >
            Intstructions about drawing the inner critic
          </p>
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
