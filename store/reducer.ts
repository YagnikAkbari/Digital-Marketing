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
  // Define how state should change in response to different actions
  switch (action.type) {
    case TOOGLE_THEME:
      return { ...state, theme: action?.payload };
    default:
      return state;
  }
};

export default rootReducer;
