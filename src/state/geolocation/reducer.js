import { types } from './actions'

const initialState = {
  current: {
    lat: 0,
    lon: 0
  },
  isLoading: false
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_LOCATION:
      return { ...state, isLoading: true }

    case types.GET_LOCATION_SUCCESS:
      return { ...state, isLoading: false }

    case types.GET_LOCATION_FAIL:
      return { ...state, isLoading: false }

    default:
      return state
  }
}
