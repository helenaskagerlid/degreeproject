export const saveCriticalThoughts = (criticalThoughts: string) => {
  localStorage.setItem("criticalThoughts", JSON.stringify(criticalThoughts));
};

export const getSavedCriticalThoughts = () => {
  const savedThoughts = localStorage.getItem("criticalThoughts");
  return savedThoughts ? JSON.parse(savedThoughts) : "";
};
