import { FormEvent, useState } from "react";
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveToLocalStorage("criticalThoughts", userInput);
    setUserInput("");
  };
  return (
    <>
      <section ref={criticThoughtsRef}>
        <img
          className="critic-thoughts-img"
          src="/criticthoughtsimg.jpg"
          alt=""
        />
        <h2>Step 1: Your inner Ciritic's Thoughts</h2>
        <p>
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
