interface IPropsIntroComponent {
  setStepOne: (value: boolean) => void;
  scrollToNextStep: (elementRef: HTMLElement) => void;
  criticThoughtsRef: React.RefObject<HTMLElement>;
}

export const IntroComponent = ({
  setStepOne,
  scrollToNextStep,
  criticThoughtsRef,
}: IPropsIntroComponent) => {
  const getStarted = () => {
    setStepOne(true);
    setTimeout(() => {
      scrollToNextStep(criticThoughtsRef.current!);
    }, 0);
  };
  return (
    <>
      <section className="intro-component-section">
        <img
          className="color-bulb"
          src="../../src/assets/feelingsimg.jpg"
          alt=""
        />
        <h1>Welcome to Tame Your Inner Critic</h1>
        <p>
          This site is a step-by-step guide to help you understand and work with
          your inner critic in creative ways. To get started, think about a
          situation where your inner critic was active, and follow along as we
          guide you through the process of addressing it in a new and fun way.
        </p>
        <button id="startBtn" className="start-btn" onClick={getStarted}>
          Get started
        </button>
      </section>
    </>
  );
};
