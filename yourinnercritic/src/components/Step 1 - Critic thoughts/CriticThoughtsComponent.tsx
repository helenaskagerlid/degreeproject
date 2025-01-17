import { FormEvent, useState } from "react";
import {
  deleteFromLocalStorage,
  saveToLocalStorage,
} from "../../helpers/saveToLocalStorage";
import { handleArrowClick } from "../../helpers/handleArrowClick";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";
import "./stepOneStyles.scss";

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
  const [deleteMessage, setDeleteMessage] = useState<boolean>(false);
  const [savedMessage, setSavedMessage] = useState<boolean>(false);
  const [notSaved, setNotSaved] = useState<boolean>(false);
  const [showCheckmark, setShowCheckmark] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (userInput === "") {
      setNotSaved(true);
      setSavedMessage(false);
    } else {
      saveToLocalStorage("criticalThoughts", userInput);
      setNotSaved(false);
      setSavedMessage(true);
      setDeleteMessage(false);
      setShowCheckmark(false);
      setTimeout(() => setShowCheckmark(true), 0);
      handleArrowClick(setStepTwo);
    }
  };

  const handleDelete = (e: FormEvent) => {
    e.preventDefault();
    deleteFromLocalStorage("criticalThoughts");
    setDeleteMessage(true);
    setSavedMessage(false);
    setShowCheckmark(false);
  };

  return (
    <>
      <section className="critic-thoughts-section" ref={criticThoughtsRef}>
        <h2
          ref={headingRef}
          className={`step-one-heading reveal-text ${
            isHeadingVisible ? "is-visible" : ""
          }`}
        >
          Step 1: Your inner Critic's Thoughts
        </h2>
        <div className="step-one-wrapper">
          <img
            className="step-one-img animation-img"
            width={5464}
            height={4881}
            onLoad={(e) => e.currentTarget.classList.add("is-visible")}
            src="/criticthoughtsimg.webp"
            alt="a dark haired head with a hand holding a thought bubble over it"
          />
        </div>
        <div className="step-one-wrapper">
          <p
            ref={textRef}
            className={`step-one-text reveal-text ${
              isTextVisible ? "is-visible" : ""
            }`}
          >
            Take a moment to notice which kinds of thoughts your inner critic is
            thinking in this situation. Then write them down here below:
          </p>
          <form className="step-one-form" onSubmit={handleSubmit}>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Write the critic's thoughts here"
              className="step-one-text-area"
            />
            <div className="step-one-hover-wrapper">
              <p className="step-one-note">
                Information about storage of your thoughts
              </p>
              <p className="step-one-storage-info">
                {" "}
                Note: When you click save your thoughts will be stored in your
                local storage. This will be deleted when you have done the last
                step or leave the page. But if you would like to delete it
                before that, just click the delete button here below
              </p>
            </div>
            <div className="step-one-button-wrapper">
              <div className="step-one-delete-wrapper">
                {" "}
                <button className="btn step-one-btn" onClick={handleDelete}>
                  Delete
                </button>
                {deleteMessage && <p className="deleted">Deleted</p>}
              </div>

              <div className="step-one-save-wrapper">
                {" "}
                <button className="btn step-one-btn">Save you thoughts</button>
                {showCheckmark && (
                  <div className="step-one-checkmark-wrapper">
                    {savedMessage && <p className="saved">Saved</p>}
                    <div className="step-one-checkmark"></div>
                  </div>
                )}
                {notSaved && <p className="saved">Write a thought, please</p>}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
