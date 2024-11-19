import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";

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
      <section ref={closingRef}>
        <h2
          ref={headingRef}
          className={`reveal-text ${isHeadingVisible ? "is-visible" : ""}`}
        >
          Great job!
        </h2>
        <h3
          ref={headingRef}
          className={`reveal-text ${isHeadingVisible ? "is-visible" : ""}`}
        >
          Wanna do this all over with another situation?
        </h3>
        <button className="btn" onClick={startOver}>
          Start over
        </button>
      </section>
    </>
  );
};
