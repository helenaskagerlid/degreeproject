import { FormEvent, useState } from "react";
import { saveToLocalStorage } from "../../helpers/saveToLocalStorage";
import { ScrollArrowComponent } from "../ScrollArrowComponent";
import { handleArrowClick } from "../../helpers/handleArrowClick";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";

interface IPropsCriticThoughtsComponent {
  criticThoughtsRef: React.RefObject<HTMLElement>;
  setStepTwo: (value: boolean) => void;
}

export const CriticThoughtsComponent = ({
  criticThoughtsRef,
  setStepTwo,
}: IPropsCriticThoughtsComponent) => {
  const [userInput, setUserInput] = useState("");
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();
  const { isVisible: isTextVisible, elementRef: textRef } =
    useVisibilityObserver<HTMLParagraphElement>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveToLocalStorage("criticalThoughts", userInput);
    setUserInput("");
  };
  return (
    <>
      <section className="critic-thoughts-section" ref={criticThoughtsRef}>
        <img
          className="critic-thoughts-img animation-img"
          width={5464}
          height={4881}
          onLoad={(e) => e.currentTarget.classList.add("is-visible")}
          src="/criticthoughtsimg.webp"
          alt="a dark haired head with a hand holding a thought bubble over it"
          loading="lazy"
        />
        <h2
          ref={headingRef}
          className={`reveal-text ${isHeadingVisible ? "is-visible" : ""}`}
        >
          Step 1: Your inner Ciritic's Thoughts
        </h2>
        <p
          ref={textRef}
          className={`reveal-text ${isTextVisible ? "is-visible" : ""}`}
        >
          Take a moment to notice which kinds of thoughts your inner ciritc is
          thinking in this situation. Then write them down here below:
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="btn">Save</button>
        </form>
        <button
          onClick={() => {
            handleArrowClick(setStepTwo);
          }}
        >
          {" "}
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
