import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import loginManager from "./reducers/loginManager";




export default configureStore({
  reducer: {
    loginManager: loginManager,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

