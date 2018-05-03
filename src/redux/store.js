import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './modules';

function configureStore(initialState) {
  return composeWithDevTools(
    applyMiddleware(thunk)
  )(createStore)(reducers, initialState)
};

const store = configureStore();
export default store;
