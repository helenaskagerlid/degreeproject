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
          <div
            ref={textRef}
            className={`step-six-text reveal-text ${
              isTextVisible ? "is-visible" : ""
            }`}
          >
            <p>
              {" "}
              Okay, for your next step you will need to bring out your
              creativivy and leave the perfectionist behind! Beacuse now you are
              invited to draw your inner critic. You can choose to do it on
              regular paper or on your device in a digital drawing program. But
              we would like to recommend you to go and look for your coloring
              pens and a paper since it's proven to have a very positive effect
              on the brain to create something in the physical world.
            </p>
            <p>
              {" "}
              This step is also very important to help you get more distance
              from your inner critic since it will be placed even more outside
              of your head when you bring it out on paper. So, just use your
              creativity — give your inner critic a shape, colors, and details
              that reflect how you feel about it. Don’t worry about making it
              perfect; the goal is to express yourself and to have a fun time.
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
