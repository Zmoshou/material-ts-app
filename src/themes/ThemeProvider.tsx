import * as React from "react";
import { createTheme, ThemeProvider as TProvide, useTheme } from "@mui/material/styles";
import { zhCN, enUS, Localization } from "@mui/material/locale";
import { useAppSelector } from "../store/hooks";

import light from "./light";
import dark from "./dark";

type Props = {
  children?: React.ReactNode;
};

type ThemeType = {
  dark: object;
  light: object;
  [key: string]: object;
};

const themeMap: ThemeType = {
  dark: dark,
  light: light,
};

type localesType = {
  zhCN: Localization;
  enUS: Localization;
};

const localesMap: localesType = {
  zhCN: zhCN,
  enUS: enUS,
};

const ThemeProvider = ({ children }: Props) => {
  const theme = useAppSelector((state) => state.common.theme);
  const locale = useAppSelector((state) => state.common.locale) as never;
  const themeWithLocale = React.useMemo(() => createTheme(themeMap[theme], localesMap[locale]), [locale, theme]);

  return <TProvide theme={themeWithLocale}>{children}</TProvide>;
};

export default ThemeProvider;
