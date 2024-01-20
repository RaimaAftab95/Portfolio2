import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  // reducer is an object which contains function which are changing our state
  reducers: {
    setActiveUser(state, action) {
      // state = {
      //   text: action.payload,
      // };

      // comment 1/13
      //state.name= action.payload;
      const { navigate, username } = action.payload;
      toast.success("user is logged in");
      //action.payload.navigate("/");
      navigate("/");
      return {
        //name:action.payload,
        name: username,
      };
    },
    // making another func
    logoutUser(state, action) {
      //state={};

      // comment13/1
      //state.name = '';
      toast.info("User is logged out");
      return {};
    },
  },
});

export const { setActiveUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
