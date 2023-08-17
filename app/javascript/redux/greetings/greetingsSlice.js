import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../fetchAPI";

export const fetchGreeting = createAsyncThunk(
  'greeting/fetch',
  async () => {
    const greeting = await fetchApi();
    console.log(greeting);
    return await greeting;
  }
);

const initialState = {
  greeting: {},
  isLoading: false,
  error: undefined
}

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
    });
    builder.addCase(fetchGreeting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action);
    });
  }
});

export default greetingsSlice.reducer;


