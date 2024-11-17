interface IClosingComponentProps {
  startOver: () => void;
  closingRef: React.RefObject<HTMLElement>;
}

export const ClosingComponent = ({
  startOver,
  closingRef,
}: IClosingComponentProps) => {
  return (
    <>
      <section ref={closingRef}>
        <h2>Great job!</h2>
        <h3>Wanna do this all over with another situation?</h3>
        <button onClick={startOver}>Start over</button>
      </section>
    </>
  );
};
