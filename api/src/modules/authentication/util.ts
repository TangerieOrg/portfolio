import axios from "axios";
import { LoginResponse, User } from "./types";

const AUTH_URL = process.env.AUTH_SERVICE_URL ?? "http://localhost:8000";

export async function getUser(cookie : string) {
    console.log("Attemping to get user", cookie, AUTH_URL);
    return await axios.get(`${AUTH_URL}/`, {
        data: { cookie }
    }).then(x => x?.data as User | undefined).catch(err => undefined);
}

export async function loginUser(username : string, password : string) {
    const response = await axios.get(`${AUTH_URL}/login`, {
        data: {
            username,
            password
        }
    }).then(x => x?.data as LoginResponse | undefined).catch(err => undefined);

    return response?.cookie;
}

export async function registerUser(username : string, password : string) {
    const response = await axios.get(`${AUTH_URL}/register`, {
        data: {
            username,
            password
        }
    }).then(x => x?.data).catch(err => undefined);

    return response;
}