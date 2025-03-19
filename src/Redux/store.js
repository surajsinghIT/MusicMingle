import { createStore, applyMiddleware, compose } from 'redux'
import createDebounce from 'redux-debounced'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['auth', 'home', 'user', 'courses']
}
// console.log(rootReducer)
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, createDebounce()]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }
