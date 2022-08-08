export const LabelFilters = {
  All: 'All',
  Active: 'active',
  Completed: 'completed',
}

export const SortAlphabet = {
  Asc: 'ascending',
  Desc: 'descending',
}

const initialState = {
  label: LabelFilters.All,
  sort: SortAlphabet.Asc,
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/labelFilterChanged': {
      return {
        ...state,
        label: action.payload
      }
    }
    case 'filters/sortAlphabet': {
      return {
        ...state,
        sort: action.payload
      }
    }
    default:
      return state
  }
}

