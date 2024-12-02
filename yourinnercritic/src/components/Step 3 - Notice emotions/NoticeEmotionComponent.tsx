import { handleArrowClick } from "../../helpers/handleArrowClick";
import { useVisibilityObserver } from "../../hooks/useVisibilityObserver";
import { ScrollArrowComponent } from "../ArrowComponent/ArrowComponent";
import "./stepThreeStyles.scss";

interface INoticeEmotionComponentProps {
  noticeEmotionRef: React.RefObject<HTMLElement>;
  setStepFour: (value: boolean) => void;
}

export const NoticeEmotionComponent = ({
  noticeEmotionRef,
  setStepFour,
}: INoticeEmotionComponentProps) => {
  const { isVisible: isHeadingVisible, elementRef: headingRef } =
    useVisibilityObserver<HTMLHeadingElement>();
  const { isVisible: isTextVisible, elementRef: textRef } =
    useVisibilityObserver<HTMLParagraphElement>();

  return (
    <>
      <section ref={noticeEmotionRef} className="notice-emotion-section">
        <img
          className="step-three-img animation-img"
          width={4000}
          height={4364}
          src="/noticeemotionimg.webp"
          alt="A woman holding her hand on the chin, looking up with a thinking expressing"
          onLoad={(e) => e.currentTarget.classList.add("is-visible")}
        />
        <div className="step-three-text-wrapper">
          {" "}
          <h2
            ref={headingRef}
            className={`step-three-heading reveal-text ${
              isHeadingVisible ? "is-visible" : ""
            }`}
          >
            Step 3: Notice your emotions
          </h2>
          <p
            ref={textRef}
            className={`step-three-text reveal-text ${
              isTextVisible ? "is-visible" : ""
            }`}
          >
            Take your time and notice what emotions these thoughts are awakening
            in your body. Which emotion/emotions are there? And where are they
            in your body right now?
          </p>
        </div>
      </section>
      <button
        className="arrow-btn"
        onClick={() => {
          handleArrowClick(setStepFour);
        }}
      >
        {" "}
        <ScrollArrowComponent />
      </button>
    </>
  );
};
