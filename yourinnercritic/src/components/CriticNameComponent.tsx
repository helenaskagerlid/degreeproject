import { FormEvent, useState } from "react";
import { saveToLocalStorage } from "../helpers/saveToLocalStorage";
import { ScrollArrowComponent } from "./ScrollArrowComponent";

interface ICriticNameComponentProps {
  criticNameRef: React.RefObject<HTMLElement>;
}

export const CriticNameComponent = ({
  criticNameRef,
}: ICriticNameComponentProps) => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveToLocalStorage("innerCriticName", userInput);
    setUserInput("");
  };
  return (
    <>
      <section ref={criticNameRef}>
        <h2>Step 5: Choose a name for your inner critic</h2>
        <img className="critic-name-image" src="/criticNameImage.jpg" alt="" />
        <p>Now take a moment to give your inner critic a name.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button>Save</button>
        </form>
        <p className="not-asked-for-advice">
          A little "not asked for"-advice: Choose a goofy or dorky name that
          make you smile/giggle/roll your eyes in some way. This is not only a
          way to bring in some fun in your day to day life, but also a really
          helpful to keep that inner voice more distant. Like, try noticing a
          negative thought and then reply to yourself "Oh, Hi Klas-Göran (insert
          your choosen inner critics name), are you here again?"
        </p>
        <button>
          {" "}
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
