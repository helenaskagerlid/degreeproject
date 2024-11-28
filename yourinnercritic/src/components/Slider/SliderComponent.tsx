import { useState } from "react";
import "./sliderStyles.scss";

export const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value));
  };
  return (
    <>
      <div className="slider-wrapper">
        <label htmlFor="myRange" className="slider-label-left">
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
        <label htmlFor="myRange" className="slider-label-right">
          Feels true on every level
        </label>
        <div className="value-wrapper">
          <p id="sliderValue" className="slider-value">
            {sliderValue}
          </p>
        </div>
      </div>
    </>
  );
};
