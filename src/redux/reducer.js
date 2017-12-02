import appReducer from './modules/app'
import authReducer from './modules/auth'
import itemsReducer from './modules/items'

// Combine all redux reducers into one root reducer
export default {
  app: appReducer,
  auth: authReducer,
  items: itemsReducer
}
