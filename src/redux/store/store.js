import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../slices/MailSlices";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
