import { useState } from "react";

export const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value));
  };

  return (
    <>
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
    </>
  );
};
