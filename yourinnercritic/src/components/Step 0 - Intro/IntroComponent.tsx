import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";
import "./stepZeroStyles.scss";

interface IPropsIntroComponent {
  setStepOne: (value: boolean) => void;
}

export const IntroComponent = ({ setStepOne }: IPropsIntroComponent) => {
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();
  const { isVisible: isTextVisible, elementRef: textRef } =
    useVisibilityObserver<HTMLParagraphElement>();

  const getStarted = () => {
    setStepOne(true);
  };

  return (
    <>
      <section className="intro-component-section">
        <h1
          ref={headingRef}
          className={`reveal-text ${isHeadingVisible ? "is-visible" : ""}`}
        >
          Welcome to Tame Your Inner Critic
        </h1>
        <p
          ref={textRef}
          className={`intro-text reveal-text ${
            isTextVisible ? "is-visible" : ""
          }`}
        >
          This site is a step-by-step guide to help you understand and work with
          your inner critic, you know that harsh voice in your head, in creative
          ways. To get started, think about a situation where your inner critic
          was active, and follow along as we guide you through the process of
          addressing it in a new and fun way.
        </p>
        <button id="startBtn" className="start-btn btn" onClick={getStarted}>
          Get started
        </button>
      </section>
    </>
  );
};
