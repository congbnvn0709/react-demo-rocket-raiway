import { Spin } from "antd";
import React, { createContext, useState } from "react";

export const LoadingContext = createContext({});
export function SpinnerProvider(props) {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <Spin spinning={isLoading}>{children}</Spin>
    </LoadingContext.Provider>
  );
}

export function useSpinner() {
  const context = React.useContext(LoadingContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}
