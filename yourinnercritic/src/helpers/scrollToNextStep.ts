export const scrollToNextStep = (refElement: HTMLElement) => {
  if (!refElement) return;

  const headerHeight = 120;
  const targetPosition =
    refElement.getBoundingClientRect().top + window.scrollY - headerHeight;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTime: number | null = null;

  const easeInOutQuad = (t: number): number =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const scrollAnimation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const easedProgress = easeInOutQuad(progress);
    window.scrollTo(0, startPosition + distance * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  };

  requestAnimationFrame(scrollAnimation);
};
