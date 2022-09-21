import { createContext, useEffect, useReducer, useState } from "react";
import Reducer from "./Reducer";

const ISSERVER = typeof window === "undefined";

export const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

if (typeof window !== "undefined") {
  // Perform localStorage action
  INITIAL_STATE.user = JSON.parse(localStorage.getItem("user")) || null;
}

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
