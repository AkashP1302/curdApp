# CRUD App - React Native

## Project Overview

This is a **React Native CRUD application** built using **React Native CLI**, featuring user management functionality. The app utilizes **React Navigation** for navigation and **Redux Toolkit** for state management.

## Features

- Fetch and display a list of users from a mock API
- Add new users
- Edit existing user details
- Delete users
- Use a **Bottom Sheet** for adding and editing users
- Implement **pagination** for improved performance
- Handle API errors and loading states gracefully
- Ensure proper validation and structured project architecture

## API Endpoints

- **Fetch Users (GET):** `https://jsonplaceholder.typicode.com/users`
- **Add User (POST):** `https://jsonplaceholder.typicode.com/users`
- **Update User (PUT):** `https://jsonplaceholder.typicode.com/users/{id}`
- **Delete User (DELETE):** `https://jsonplaceholder.typicode.com/users/{id}`

## Project Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AkashP1302/curdApp
   cd curdApp
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run the Application:**
   ```bash
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```
4. **Start the Metro Bundler:**
   ```bash
   npx react-native start
   ```

## State Management

- Uses **Redux Toolkit** for managing user data.
- State updates correctly after performing CRUD operations.

## Validation & Error Handling

- Proper validation for user inputs.
- Gracefully handles API errors and loading states.
