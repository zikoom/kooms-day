import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import firebaseSetter from "./reducers/firebaseSetter";
import loginManager from "./reducers/loginManager";




export default configureStore({
  reducer: {
    firestoreSetter: firebaseSetter,
    loginManager: loginManager,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

