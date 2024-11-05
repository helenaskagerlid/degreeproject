import { useEffect, useState } from "react";
import { ScrollArrowComponent } from "./ScrollArrowComponent";
import { SliderComponent } from "./SliderComponent";
import { getFromLocalStorage } from "../helpers/saveToLocalStorage";

export const CompareThoughtsComponent = () => {
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
      <h2>Step 8: Check in with your thoughts</h2>
      <p>
        You critic <strong>{innerCriticName}</strong> have been having some old
        thoughts
      </p>
      <br />
      <br />
      <iframe src={savedAnimation} width={500} height={500}></iframe>
      <p>
        The thoughts in question: "Me, <strong>{innerCriticName}</strong>, have
        been thinking {criticalThoughts}"
      </p>
      <p>
        Now the real question is, how do you feel about these old thoughts after
        seeing <strong>{innerCriticName}</strong> in some different ehrm...
        situations?
      </p>
      {/* - Påminnelse om att lägga in
      länken från tidigare steget - En IFrame med Animationen - Hämta namnet på
      kritikern - Hämta de gamla tankarna - Slider-komponenten för att känna in
      hur sanna orden känns nu */}
      <SliderComponent />
      <button>
        {" "}
        <ScrollArrowComponent />
      </button>
    </>
  );
};
