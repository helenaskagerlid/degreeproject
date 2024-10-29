export const scrollToNextStep = (refElement: HTMLElement) => {
  if (refElement) {
    const headerHeight = 120;
    const offsetTop =
      refElement.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};
