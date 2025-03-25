import {createSlice} from '@reduxjs/toolkit';
import {addUser, deleteUser, fetchUsers, updateUser} from './userThunk';
const initialState = {
  users: [],
  user: null,
  loading: false,
  error: null,
};
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      // Add new user
      .addCase(addUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // Add new user to list
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get list slice
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, state => {
        state.loading = false;
        state.error = 'Failed to fetch users';
      })

      // Update user by ID
      .addCase(updateUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(
          user => user.id === action.payload.id,
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, state => {
        state.loading = false;
        state.error = 'Failed to update user';
      })

      // Delete user
      .addCase(deleteUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(user => user.id !== action.payload); // Remove user from list
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to delete user';
      });
  },
});
export default userSlice.reducer;
