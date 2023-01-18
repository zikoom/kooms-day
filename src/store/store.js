import { createStore } from '@reduxjs/toolkit'
import reducers from '../reducer/index'

let store = createStore(reducers);


export default store;

