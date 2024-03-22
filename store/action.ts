export const TOOGLE_THEME = "TOOGLE_THEME";

export const toggleTheme = (
  payload: string
): { type: string; payload: string } => {
  return { type: TOOGLE_THEME, payload };
};
