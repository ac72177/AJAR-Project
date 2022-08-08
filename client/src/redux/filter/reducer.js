export const LabelFilters = {
  All: "All",
};

const initialState = {
  label: LabelFilters.All,
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/labelFilterChanged": {
      return {
        ...state,
        label: action.payload,
      };
    }
    default:
      return state;
  }
}
