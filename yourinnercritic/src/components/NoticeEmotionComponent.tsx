import { handleArrowClick } from "../helpers/handleArrowClick";
import { ScrollArrowComponent } from "./ScrollArrowComponent";

interface INoticeEmotionComponentProps {
  noticeEmotionRef: React.RefObject<HTMLElement>;
  setStepFour: (value: boolean) => void;
}

export const NoticeEmotionComponent = ({
  noticeEmotionRef,
  setStepFour,
}: INoticeEmotionComponentProps) => {
  return (
    <>
      <section ref={noticeEmotionRef} className="notice-emotion-section">
        <img
          className="notice-emotion-img animation-img"
          width={4000}
          height={4364}
          src="/noticeemotionimg.webp"
          alt="A woman holding her hand on the chin, looking up with a thinking expressing"
          onLoad={(e) => e.currentTarget.classList.add("is-visible")}
        />
        <h2>Step 3: Notice your emotions</h2>

        <p>
          Take your time and notice what emotions these thoughts are awakening
          in your body. Which emotion/emotions are there? And where are they in
          your body right now?
        </p>
        <button
          onClick={() => {
            handleArrowClick(setStepFour);
          }}
        >
          {" "}
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
