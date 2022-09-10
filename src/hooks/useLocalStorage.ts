import React, { useState } from "react";

export const useLocalStorage = <S>(
key: string,
initialState?: S | (() => S)
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const [state, setState] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (err) {
      return initialState;
    }
  });

  const setValue = <S>(
    value?: S | ((value: S) => S)
  ) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
    }
  }

  return [state, setValue];
}
