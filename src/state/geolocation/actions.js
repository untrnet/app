export const types = {
  GET_LOCATION: '[Geolocation] Get Location',
  GET_LOCATION_SUCCESS: '[Geolocation] Get Location Success',
  GET_LOCATION_FAIL: '[Geolocation] Get Location Fail'
}

export const actions = {
  getLocation: () => ({ type: types.GET_LOCATION }),
  getLocationSuccess: () => ({ type: types.GET_LOCATION_SUCCESS }),
  getLocationFail: () => ({ type: types.GET_LOCATION_FAIL })
}
