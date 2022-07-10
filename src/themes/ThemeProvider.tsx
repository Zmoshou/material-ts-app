import * as React from "react";
import { ThemeProvider as TProvide } from "@mui/material/styles";
import { useAppSelector } from "../store/hooks";

import light from "./light";
import dark from "./dark";

type Props = {
  children?: React.ReactNode;
};

type ThemeM = {
  dark: object;
  light: object;
  [key: string]: object;
};

const themeMap: ThemeM = {
  dark: dark,
  light: light,
};

const ThemeProvider = ({ children }: Props) => {
  const theme = useAppSelector((state) => state.common.theme);

  return <TProvide theme={themeMap[theme]}>{children}</TProvide>;
};

export default ThemeProvider;
