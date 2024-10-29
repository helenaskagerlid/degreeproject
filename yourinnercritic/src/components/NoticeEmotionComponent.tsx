import { ScrollArrowComponent } from "./ScrollArrowComponent";

interface INoticeEmotionComponentProps {
  noticeEmotionRef: React.RefObject<HTMLElement>;
  setStepFour: (value: boolean) => void;
}

export const NoticeEmotionComponent = ({
  noticeEmotionRef,
  setStepFour,
}: INoticeEmotionComponentProps) => {
  const handleClick = () => {
    setStepFour(true);
  };
  return (
    <>
      <section ref={noticeEmotionRef}>
        <h2>Step 3: Notice your emotions</h2>
        <p>
          Take your time and notice what emotions these thoughts are awakening
          in your body. Which emotion/emotions are there? And where are they in
          your body right now?
        </p>
        <img
          className="notice-emotion-img"
          src="../../public/noticeemotionimg.jpg"
          alt=""
        />
        <button onClick={handleClick}>
          {" "}
          <ScrollArrowComponent />
        </button>
      </section>
    </>
  );
};
