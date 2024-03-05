import axios from "axios";
import { setError, setToken, setUser, setUsers } from "./authSlice";
import store from "./store";

const api = axios.create({
    baseURL: "http://146.190.140.18:5454",
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const login = async (credentials) => {
    try {
        const response = await api.post("/user/login", credentials);
        const { token } = response.data;
        store.dispatch(setUser(response.data))
        store.dispatch(setToken(token));
        localStorage.setItem("token", token);

        return token;
    } catch (error) {
        store.dispatch(setError("Invalid credentials"));
        throw error;
    }
};




