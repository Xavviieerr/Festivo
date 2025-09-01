import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = "http://localhost:5000";

//add friend function
export const addFriend = createAsyncThunk(
  "friends/addFriend",
  async ({ newFriendData, token }) => {
    const response = await axios.post(
      `${baseURL}/friend/newfriend`,
      newFriendData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

//fetch friend functions
export const fetchFriends = createAsyncThunk(
  "firends/fetchFriends",
  async (friendData, token) => {
    const response = await axios.get(
      `${baseURL}/friend/allfriends`,
      friendData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //fetchfriend cases
    builder
      .addCase(fetchFriends.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchFriends.fulfilled, (state) => {
        (state.loading = false), (state.actions = action.payload);
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //add friend cases
      .addCase(addFriend.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default friendsSlice.reducer;
