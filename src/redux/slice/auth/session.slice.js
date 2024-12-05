import AxiosDefault from "@/redux/AxiosDefault";
import { API_URL } from "@/redux/enpoint";
import { getItemFromLocalStorage, removeItemFromLocalStorage } from "@/utils/service";
// import { getItemFromLocalStorage, removeItemFromLocalStorage } from "@/utils/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  isAdminLogin: getItemFromLocalStorage('ATo784~sd!014') ? true : false,
};


export const authLogin = createAsyncThunk("auth/login", async (pramas) => {
  try {
    const response = await AxiosDefault({
      method: "POST",
      url: API_URL.login,
      data: pramas
    });
    return response.data;
  } catch (err) {
    return err.response?.data;
  }
});
export const authOTP = createAsyncThunk("auth/OTP", async (pramas) => {
  try {
    const response = await AxiosDefault({
      method: "POST",
      url: API_URL.verifyOTP,
      data: pramas
    });
    return response.data;
  } catch (err) {
    return err.response?.data;
  }
});


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      removeItemFromLocalStorage('ATo784~sd!014');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state) => {
      state.loading = false;
      // state.isAdminLogin = true;
    }).addCase(authOTP.fulfilled, (state) => {
      state.loading = false;
      state.isAdminLogin = true;
    })
  }
})

export default authSlice.reducer;