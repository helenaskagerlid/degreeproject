import { ScrollArrowComponent } from "../ScrollArrowComponent";
import { handleArrowClick } from "../../helpers/handleArrowClick";
import { SliderComponent } from "../Slider/SliderComponent";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";

interface ICheckThoughtsComponentProps {
  sliderRef: React.RefObject<HTMLElement>;
  setStepThree: (value: boolean) => void;
}

export const CheckThoughtsComponent = ({
  sliderRef,
  setStepThree,
}: ICheckThoughtsComponentProps) => {
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();
  const { isVisible: isTextVisible, elementRef: textRef } =
    useVisibilityObserver<HTMLParagraphElement>();

  return (
    <>
      <section className="slider-section" ref={sliderRef}>
        <h2
          ref={headingRef}
          className={`reveal-text ${isHeadingVisible ? "is-visible" : ""}`}
        >
          Step 2: How true does the words feel like?
        </h2>
        <p
          ref={textRef}
          className={`reveal-text ${isTextVisible ? "is-visible" : ""}`}
        >
          Take a moment to notice how true the inner critic's word feels like.
          Use the slider to place it on a scale from "Not an inch true" to
          "Feels true on every level" for how you are feeling right now
        </p>
        <SliderComponent />

        <button
          onClick={() => {
            handleArrowClick(setStepThree);
          }}
        >
          {" "}
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
