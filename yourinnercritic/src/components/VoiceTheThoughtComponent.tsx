import { useEffect, useState } from "react";
import { ScrollArrowComponent } from "./ScrollArrowComponent";
import { SliderComponent } from "./SliderComponent";
import { getFromLocalStorage } from "../helpers/saveToLocalStorage";
import { ChangeVoiceComponent } from "./ChangeVoiceComponent";
import { handleArrowClick } from "../helpers/handleArrowClick";

interface ICompareThoughtsComponentProps {
  voiceTheThoughtRef: React.RefObject<HTMLElement>;
  setStepNine: (value: boolean) => void;
}

export const VoiceTheThoughtComponent = ({
  voiceTheThoughtRef,
  setStepNine,
}: ICompareThoughtsComponentProps) => {
  const [innerCriticName, setInnerCriticName] = useState("");
  const [criticalThoughts, setCriticalThoughts] = useState("");
  const [savedAnimation, setSavedAnimation] = useState("");

  useEffect(() => {
    const fetchedName = getFromLocalStorage("innerCriticName");
    setInnerCriticName(fetchedName);
    const fetchedThoughts = getFromLocalStorage("criticalThoughts");
    setCriticalThoughts(fetchedThoughts);
    const fetchedAnimation = getFromLocalStorage("savedAnimation");
    setSavedAnimation(fetchedAnimation);
  }, []);
  return (
    <>
      <section className="compare-thoughts-section" ref={voiceTheThoughtRef}>
        <h2>Step 8: Voice the thoughts</h2>
        <p>
          You critic <strong>{innerCriticName}</strong> have been having some
          old thoughts
        </p>

        {savedAnimation && (
          <>
            {" "}
            <p>The one and only {innerCriticName} </p>
            <span className="material-symbols-outlined">arrow_downward</span>
            <br /> <br />
            <iframe src={savedAnimation} width={450} height={480}></iframe>
          </>
        )}
        <p>
          The thoughts in question: "Me, <strong>{innerCriticName}</strong>,
          have been thinking: '{criticalThoughts}'"
        </p>
        <p>
          Your next step is to record saying these words in a silly voice.
          Really imagine that it is the animated {innerCriticName} who is saying
          this, and give it an exaggerative type of voice that give you a fun
          time. The goal here is to make the words feel even more distant, but
          in a goofy way. Some inspiration of types of voices you can try out:
          American, swenglish, a not so impressed teenager, a cartoon
          character.. BONUS: After you have finished recording you can even try
          to add a fun chipmunk or mountaintroll effect!
        </p>
        <ChangeVoiceComponent />
        <p>
          Now the real question is, how do you feel about these old thoughts
          after seeing <strong>{innerCriticName}</strong> in some different
          ehrm... situations?
        </p>
        <SliderComponent />
        <button
          onClick={() => {
            handleArrowClick(setStepNine);
          }}
        >
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
