interface IPropsCriticThoughtsComponent {
  criticThoughtsRef: React.RefObject<HTMLHeadingElement>;
}

export const CriticThoughtsComponent = ({
  criticThoughtsRef,
}: IPropsCriticThoughtsComponent) => {
  return (
    <>
      <section>
        <h2 ref={criticThoughtsRef}>Step 1: Your inner Ciritic's Thoughts</h2>
        <p>
          Take a moment to notice which kinds of thoughts your inner ciritc is
          thinking in this situation. Then write them down in here below:
        </p>
      </section>
    </>
  );
};
