import { useState } from "react";
import { ScrollArrowComponent } from "./ScrollArrowComponent";
import { handleArrowClick } from "../helpers/handleArrowClick";

interface IPropsSliderComponent {
  sliderRef: React.RefObject<HTMLElement>;
  setStepThree: (value: boolean) => void;
}

export const SliderComponent = ({
  sliderRef,
  setStepThree,
}: IPropsSliderComponent) => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value));
  };

  return (
    <>
      <section className="slider-section" ref={sliderRef}>
        <h2>Step 2: How true does the words feel like?</h2>
        <p>
          Take a moment to notice how true the inner critic's word feels like.
          Use the slider to place it on a scale from "Not an inch true" to
          "Feels true on every level" for how you are feeling right now
        </p>
        <div className="slidecontainer">
          <label htmlFor="myRange" className="slider-label">
            Not an inch true
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={sliderValue}
            className="slider"
            id="myRange"
            onChange={handleSliderChange}
          />
          <label htmlFor="myRange" className="slider-label">
            Feels true on every level
          </label>
        </div>

        <p id="sliderValue" className="slider-value">
          {sliderValue}
        </p>
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
