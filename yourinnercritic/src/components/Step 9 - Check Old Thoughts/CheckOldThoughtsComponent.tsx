import { handleArrowClick } from "../../helpers/handleArrowClick";
import { ScrollArrowComponent } from "../ArrowComponent/ArrowComponent";
import { SliderComponent } from "../Slider/SliderComponent";
import "./stepNineStyles.scss";

interface ICheckOldThoughtsComponentProps {
  oldThoughtsRef: React.RefObject<HTMLElement>;
  setStepTen: (value: boolean) => void;
}

export const CheckOldThoughtsComponent = ({
  oldThoughtsRef,
  setStepTen,
}: ICheckOldThoughtsComponentProps) => {
  return (
    <>
      <section className="check-old-thoughts-section" ref={oldThoughtsRef}>
        <h2 className="step-nine-heading">
          Step 9 - Check in with those old thoughts
        </h2>
        <p className="step-nine-text">
          Now the real question is, how do you feel about these old thoughts
          after seeing your inner critic in some different ehrm... situations?
          Check in and put the value on the slider to where it resonates now.
        </p>
        <div className="step-nine-slider-wrapper">
          <SliderComponent />
        </div>
      </section>
      <button
        className="arrow-btn"
        onClick={() => {
          handleArrowClick(setStepTen);
        }}
      >
        <ScrollArrowComponent />
      </button>
    </>
  );
};
