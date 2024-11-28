import { handleArrowClick } from "../../helpers/handleArrowClick";
import { ScrollArrowComponent } from "../ArrowComponent/ArrowComponent";
import { SliderComponent } from "../Slider/SliderComponent";

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
      <section ref={oldThoughtsRef}>
        <h2>Step 9 - Check in with those old thoughts</h2>
        <p>
          Now the real question is, how do you feel about these old thoughts
          after seeing your inner critic in some different ehrm... situations?
          Check in and put the value on the slider to where it resonates now.
        </p>
        <SliderComponent />
        <button
          onClick={() => {
            handleArrowClick(setStepTen);
          }}
        >
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
