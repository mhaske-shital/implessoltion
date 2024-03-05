import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        error: null,
        user: null,
        users: [],

    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.token = null;
            state.error = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },

    },
});

export const {
    setToken,
    setError,
    setUser,
    setUsers,

} = loginSlice.actions;
export const selectToken = (state) => state.auth.token;
export const selectError = (state) => state.auth.error;
export const selectUser = (state) => state.auth.user;



export default loginSlice.reducer;

