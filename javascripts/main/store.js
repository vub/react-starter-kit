import {
  applyMiddleware,
  createStore,
} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

let loggerMiddleware;
if (process.env.REDUX_LOGGER === '1') {
  loggerMiddleware = applyMiddleware(logger);
}

const store = createStore(
  reducers,
  loggerMiddleware,
);

export default store;
