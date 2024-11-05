import { ScrollArrowComponent } from "./ScrollArrowComponent";
import { handleArrowClick } from "../helpers/handleArrowClick";
import { SliderComponent } from "./SliderComponent";

interface ICheckThoughtsComponentProps {
  sliderRef: React.RefObject<HTMLElement>;
  setStepThree: (value: boolean) => void;
}

export const CheckThoughtsComponent = ({
  sliderRef,
  setStepThree,
}: ICheckThoughtsComponentProps) => {
  return (
    <>
      <section className="slider-section" ref={sliderRef}>
        <h2>Step 2: How true does the words feel like?</h2>
        <p>
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
