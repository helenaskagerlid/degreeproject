interface IClosingComponentProps {
  startOver: () => void;
}

export const ClosingComponent = ({ startOver }: IClosingComponentProps) => {
  return (
    <>
      <h2>Great job!</h2>
      <h3>Wanna do this all over with another situation?</h3>
      <button onClick={startOver}>Start over</button>
    </>
  );
};
