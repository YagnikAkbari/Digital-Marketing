import { TOOGLE_THEME } from "./action";

interface ToggleThemeState {
  theme: string;
}

export interface ToggleThemeAction {
  type: string;
  payload: string;
}

const initialState: ToggleThemeState = {
  theme: "m-light",
};

const rootReducer = (
  state: ToggleThemeState = initialState,
  action: ToggleThemeAction
) => {
  switch (action.type) {
    case TOOGLE_THEME:
      return { ...state, theme: action?.payload };
    default:
      return state;
  }
};

export default rootReducer;
