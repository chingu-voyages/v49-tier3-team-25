import { store } from "./store";
import { Provider } from "react-redux";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export function ReduxProvider({ children }: Props) {
  return <Provider store={store}> {children}</Provider>;
}
