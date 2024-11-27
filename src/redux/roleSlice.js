import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const roleSlice = createSlice({
  name: 'roles',
  initialState: [],
  reducers: {
    setRoles: (state, action) => action.payload,
  },
});

export const { setRoles } = roleSlice.actions;

export const fetchRoles = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/roles');
  dispatch(setRoles(response.data));
};

export default roleSlice.reducer;
