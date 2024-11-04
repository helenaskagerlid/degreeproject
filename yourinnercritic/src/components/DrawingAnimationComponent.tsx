import { ScrollArrowComponent } from "./ScrollArrowComponent";

interface IDrawingAnimationComponentProps {
  animationRef: React.RefObject<HTMLElement>;
}

export const DrawingAnimationComponent = ({
  animationRef,
}: IDrawingAnimationComponentProps) => {
  return (
    <>
      <section className="animation-section" ref={animationRef}>
        <h2>Step 7: Animate your inner critic</h2>
        <iframe
          src="https://sketch.metademolab.com/canvas"
          width="1100px"
          height="700px"
        ></iframe>
        <button>
          {" "}
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
