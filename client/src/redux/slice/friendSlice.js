import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
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
  "friends/fetchFriends",
  async (token) => {
    const response = await axios.get(`${baseURL}/friend/allfriends`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

//delete a friend functions
export const deleteFriend = createAsyncThunk(
  "friends/deleteFriend",
  async ({ token, friendId }) => {
    const response = await axios.delete(
      `${baseURL}/friend/deletefriend/${friendId}`,
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
      .addCase(fetchFriends.fulfilled, (state, action) => {
        (state.loading = false), (state.items = action.payload);
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //add friend cases
      .addCase(addFriend.fulfilled, (state, action) => {
        state.items.push(action.payload);
        toast.success("Friend Added!");
      })
      //delete friend cases
      .addCase(deleteFriend.fulfilled, (state, action) => {
        (state.loading = false),
          (state.items = state.items.filter(
            (friend) => friend._id !== action.payload._id
          ));
        toast.success("Friend Deleted.");
      });
  },
});

export default friendsSlice.reducer;
