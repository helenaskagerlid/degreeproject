import { ScrollArrowComponent } from "./ScrollArrowComponent";

interface IDrawingComponentProps {
  drawingRef: React.RefObject<HTMLElement>;
}

export const DrawingComponent = ({ drawingRef }: IDrawingComponentProps) => {
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
        <button>
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
