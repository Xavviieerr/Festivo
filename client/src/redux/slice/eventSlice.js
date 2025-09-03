import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "http://localhost:5000";

//create event function
export const addEvents = createAsyncThunk(
  "event/addEvents",
  async ({ token, formData, friendId }) => {
    console.log(token, formData, friendId);

    const response = await axios.post(
      `${baseURL}/event/newevent/${friendId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

//get all event function
export const allUserEvents = createAsyncThunk(
  "event/allUserEvents",
  async (token) => {
    const response = await axios.get(`${baseURL}/event/allevents`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

//slice
const eventSlice = createSlice({
  name: "event",
  initialState: {
    items: [],
    events: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEvents.fulfilled, (state) => {
        state.events.push(action.payload);
        toast.success("New Event Added");
      })
      .addCase(allUserEvents.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default eventSlice.reducer;
