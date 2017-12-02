import R from 'ramda'
import { createAction, handleActions } from 'redux-actions'
import { createRoutine } from 'redux-routines'
import api from '../../api'

// Actions
export const getAllItemsRoutine = createRoutine('react-ui/auth/GET_ALL_ITEMS')

// Reducer
export default handleActions({
  [getAllItemsRoutine.SUCCESS]: (state, { payload }) => R .pipe(R.concat, R.uniq)(state, payload)
}, [])

// Action creators
export const getAllItems = createAction(getAllItemsRoutine.TRIGGER, () => async (dispatch) => {
  try {
    dispatch(getAllItemsRoutine.request())
    const response = await api.wrapFailure(dispatch, api.fetch('items/all', {
      method: 'GET'
    }))

    dispatch(getAllItemsRoutine.success(response))
    return response
  } catch (e) {
    dispatch(getAllItemsRoutine.failure(e))
  } finally {
    dispatch(getAllItemsRoutine.fulfill())
  }
})
