interface IPropsIntroComponent {
  setIsStartedTrue: (value: boolean) => void;
  criticThoughtsRef: React.RefObject<HTMLElement>;
}

export const IntroComponent = ({
  setIsStartedTrue,
  criticThoughtsRef,
}: IPropsIntroComponent) => {
  const getStarted = () => {
    setIsStartedTrue(true);
    setTimeout(() => {
      criticThoughtsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 0);
  };
  return (
    <>
      <section className="intro-component-section">
        <img
          className="color-bulb"
          src="../../src/assets/color_bulb.jpg"
          alt=""
        />
        <h1>Welcome to Tame Your Inner Critic</h1>
        <p>
          This site is a step-by-step guide to help you understand and work with
          your inner critic in creative ways. To get started, think about a
          situation where your inner critic was active, and follow along as we
          guide you through the process of addressing it in a new and fun way.
        </p>
        <button onClick={getStarted}>Get started</button>
      </section>
    </>
  );
};
