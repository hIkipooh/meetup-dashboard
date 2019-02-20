const initialState = {
  country: null,
  cities: [],
  selectedCity: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_COUNTRY": {
      const stateChanges = { country: action.country };
      return {
        ...state,
        ...stateChanges,
      };
    }
    case "RENDER_CITIES": {
      const stateChanges = { cities: action.cities };
      return {
        ...state,
        ...stateChanges,
      };
    }
    case "SELECT_CITY": {
      const stateChanges = { selectedCity: action.city };
      return {
        ...state,
        ...stateChanges,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
