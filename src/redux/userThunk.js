import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Add user
export const addUser = createAsyncThunk(
  'users/addUser',
  async (newUser, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        newUser,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to add user');
    }
  },
);

// Fetch user list
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  return response.data;
});

// Update user by ID
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({userId, userData}, {rejectWithValue}) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        userData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

// Delete user by ID
export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId, {rejectWithValue}) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      return userId; // Return userId to remove it from state
    } catch (error) {
      return rejectWithValue(error.response.data || 'Failed to delete user');
    }
  },
);
