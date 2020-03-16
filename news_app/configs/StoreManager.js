import { createStore, applyMiddleware, compose } from 'redux';
import app from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas'

var store = null
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default StoreManager = () => {
    if (store === null) {
        const sagaMiddleware = createSagaMiddleware()
        store = createStore(app, composeEnhancers(applyMiddleware(sagaMiddleware)))
        sagaMiddleware.run(rootSaga)
        return store
    } else {
        return store
    }
}