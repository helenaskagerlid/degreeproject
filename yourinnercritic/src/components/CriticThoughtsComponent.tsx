import { FormEvent, useEffect, useRef, useState } from "react";
import { saveToLocalStorage } from "../helpers/saveToLocalStorage";
import { ScrollArrowComponent } from "./ScrollArrowComponent";
import { handleArrowClick } from "../helpers/handleArrowClick";

interface IPropsCriticThoughtsComponent {
  criticThoughtsRef: React.RefObject<HTMLElement>;
  setStepTwo: (value: boolean) => void;
}

export const CriticThoughtsComponent = ({
  criticThoughtsRef,
  setStepTwo,
}: IPropsCriticThoughtsComponent) => {
  const [userInput, setUserInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    const currentHeading = headingRef.current;
    const currentText = textRef.current;
    if (currentText && currentHeading) {
      observer.observe(currentText);
      observer.observe(currentHeading);
    }

    return () => {
      if (currentText) observer.unobserve(currentText);
    };
  }, []);
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
          alt="a dark haird head with a hand holding a thought bubble over it"
          loading="lazy"
        />
        <h2
          ref={headingRef}
          className={`reveal-text ${isVisible ? "is-visible" : ""}`}
        >
          Step 1: Your inner Ciritic's Thoughts
        </h2>
        <p
          ref={textRef}
          className={`reveal-text ${isVisible ? "is-visible" : ""}`}
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
          <button>Save</button>
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
