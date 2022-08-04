import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
const middleware = [thunk];
if(process.env.NODE_ENV !== 'production'){
  middleware.push();

}
export const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)