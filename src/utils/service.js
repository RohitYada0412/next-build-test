export const getItemFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
  }
  return null;
};

export const removeItemFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
      return localStorage.removeItem(key);
  }
  return null;
};