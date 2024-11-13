interface IPropsIntroComponent {
  setStepOne: (value: boolean) => void;
}

export const IntroComponent = ({ setStepOne }: IPropsIntroComponent) => {
  const getStarted = () => {
    setStepOne(true);
  };
  return (
    <>
      <section className="intro-component-section">
        {/* <img className="feelings-img" src="/feelingsimg.jpg" alt="" /> */}
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
