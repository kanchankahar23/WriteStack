import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"; // ✅ import karo

const store = configureStore({
  reducer: {
    auth: authSlice, // ✅ register karo
  },
});

export default store;