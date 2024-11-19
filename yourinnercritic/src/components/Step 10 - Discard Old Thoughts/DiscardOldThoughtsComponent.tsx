import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../helpers/saveToLocalStorage";
import "./style.scss";

export const DiscardOldThoughtsComponent = () => {
  const [yourOldThoughts, setYourOldThoughts] = useState("");
  const [spin, setSpin] = useState(false);
  const [fade, setFade] = useState(false);
  const [fall, setFall] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const fetchedThoughts = getFromLocalStorage("criticalThoughts");
    setYourOldThoughts(fetchedThoughts);
  }, []);

  const addAnimationClass = (animationChoice: string) => {
    if (animationChoice === "spin") {
      setSpin(true);
      setFade(false);
      setFall(false);
      setTimeout(() => {
        setShowText(true);
      }, 3500);
    }
    if (animationChoice === "fade") {
      setFade(true);
      setSpin(false);
      setFall(false);
      setTimeout(() => {
        setShowText(true);
      }, 1500);
    }
    if (animationChoice === "fall") {
      setFall(true);
      setFade(false);
      setSpin(false);
      setTimeout(() => {
        setShowText(true);
      }, 1500);
    }
  };

  return (
    <>
      <section>
        <div
          className={
            spin
              ? "spinning-div"
              : fade
              ? "fading-div"
              : fall
              ? "falling-div"
              : ""
          }
        >
          <p>{yourOldThoughts}</p>
        </div>
        <button
          className="btn"
          onClick={() => {
            addAnimationClass("spin");
          }}
        >
          Spin and Shrink
        </button>
        <button
          className="btn"
          onClick={() => {
            addAnimationClass("fade");
          }}
        >
          Fade away
        </button>
        <button
          className="btn"
          onClick={() => {
            addAnimationClass("fall");
          }}
        >
          Fall and disappear
        </button>
        {showText && (
          <div>
            <p>Sayonara! I won't really miss you..</p>
            <p>
              If you got the taste for it, maybe you wanna try to throw away
              these old thoughts one more time? Just choose how you want to do
              it and press the buttons above. And really say goodbye this time!
            </p>
          </div>
        )}
      </section>
    </>
  );
};
