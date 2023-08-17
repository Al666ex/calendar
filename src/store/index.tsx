import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

export const rootReducer = combineReducers( reducers );

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;



