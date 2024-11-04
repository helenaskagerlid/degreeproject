import { handleArrowClick } from "../helpers/handleArrowClick";
import { ScrollArrowComponent } from "./ScrollArrowComponent";

interface IDrawingComponentProps {
  drawingRef: React.RefObject<HTMLElement>;
  setStepSeven: (value: boolean) => void;
}

export const DrawingComponent = ({
  drawingRef,
  setStepSeven,
}: IDrawingComponentProps) => {
  return (
    <>
      <section ref={drawingRef}>
        <h2>Step 6: Draw your inner critic</h2>
        <img
          className="draw-inner-critic-img"
          src="/drawInnerCriticImg.jpg"
          alt=""
        />
        <p>Intstructions about drawing the inner critic</p>
        <button
          onClick={() => {
            handleArrowClick(setStepSeven);
          }}
        >
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
