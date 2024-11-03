import { ScrollArrowComponent } from "./ScrollArrowComponent";

export const DrawingComponent = () => {
  return (
    <>
      <section>
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
