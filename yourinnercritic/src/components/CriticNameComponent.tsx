import { FormEvent, useState } from "react";
import { saveCriticalThoughts } from "../helpers/saveToLocalStorage";

export const CriticNameComponent = () => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveCriticalThoughts(userInput);
  };
  return (
    <>
      <h2>Step 5: Choose a name for your inner critic</h2>
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
    </>
  );
};
