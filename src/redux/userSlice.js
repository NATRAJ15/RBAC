import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload,
  },
});

export const { setUsers } = userSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/users');
  dispatch(setUsers(response.data));
};

export default userSlice.reducer;
