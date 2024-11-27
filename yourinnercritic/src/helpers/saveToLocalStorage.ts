export const saveToLocalStorage = (name: string, item: string) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export const getFromLocalStorage = (key: string) => {
  const savedItem = localStorage.getItem(key);
  return savedItem ? JSON.parse(savedItem) : "";
};

export const deleteFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
