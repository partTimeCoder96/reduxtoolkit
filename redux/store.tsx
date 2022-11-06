import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import RootReducers from './rootReducers';
const store = configureStore({
reducer:RootReducers,
middleware:[thunk,logger]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch
export default store;