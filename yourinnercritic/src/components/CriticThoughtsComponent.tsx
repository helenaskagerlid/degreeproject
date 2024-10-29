interface IPropsCriticThoughtsComponent {
  criticThoughtsRef: React.RefObject<HTMLElement>;
}

export const CriticThoughtsComponent = ({
  criticThoughtsRef,
}: IPropsCriticThoughtsComponent) => {
  return (
    <>
      <section ref={criticThoughtsRef}>
        <h2>Step 1: Your inner Ciritic's Thoughts</h2>
        <p>
          Take a moment to notice which kinds of thoughts your inner ciritc is
          thinking in this situation. Then write them down in here below:
        </p>
      </section>
    </>
  );
};
