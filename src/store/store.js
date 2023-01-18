import { createStore } from '@reduxjs/toolkit'
import reducers from '../reducer/index'

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;

