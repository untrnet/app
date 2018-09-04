import { combineReducers } from 'redux'

import { reducer as geoLocation } from './geolocation'

export default combineReducers({
  geoLocation
})
