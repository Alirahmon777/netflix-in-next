const getLocalStorage = (key) =>
  typeof window !== "undefined"
    ? JSON.parse(window.localStorage.getItem(key))
    : false;

const setLocalStorage = (key, value) =>
  typeof window !== "undefined"
    ? window.localStorage.setItem(key, JSON.stringify(value))
    : false;

const removeLocalStorage = (key) =>
  typeof window !== "undefined" ? window.localStorage.removeItem(key) : false;

export { getLocalStorage, setLocalStorage, removeLocalStorage };
