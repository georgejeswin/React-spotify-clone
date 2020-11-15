export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //remove after finish
  // token:
  //   "BQD9Ml8rCdeG1n8yi2tV8gTsTlFIQCRu1DyYjBNuQGGWb18uxtoHfBW6NEHq7knA_l4fbha37AjsPi6exyLTH3AiDr32A-KcQTy_vocncRL2C7sb2DKfMqXjquqnGihqCCVWI3vmjQexjKfsuJUcaIAIbZeZ8nJRF5cLRHlREjFCTKhV",
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
