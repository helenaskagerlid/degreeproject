import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";
import "./stepElevenStyles.scss";

interface IClosingComponentProps {
  startOver: () => void;
  closingRef: React.RefObject<HTMLElement>;
}

export const ClosingComponent = ({
  startOver,
  closingRef,
}: IClosingComponentProps) => {
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();

  return (
    <>
      <section className="closing-section" ref={closingRef}>
        <h2
          ref={headingRef}
          className={`step-eleven-heading reveal-text ${
            isHeadingVisible ? "is-visible" : ""
          }`}
        >
          Great job!
        </h2>
        <img
          className="step-eleven-celebration-image animation-img"
          width={3709}
          height={5564}
          onLoad={(e) => e.currentTarget.classList.add("is-visible")}
          src="/closingcelebration.jpg"
          alt="two dogs with party hats"
          loading="lazy"
        />
        <p
          ref={headingRef}
          className={`step-eleven text reveal-text ${
            isHeadingVisible ? "is-visible" : ""
          }`}
        >
          Wanna do this all over with another situation?
        </p>
        <button className="btn" onClick={startOver}>
          Start over
        </button>
      </section>
    </>
  );
};
