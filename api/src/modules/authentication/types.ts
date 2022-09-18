export enum Permission {
    User = "USER",
    Developer = "DEV",
    Admin = "ADMIN"
}

export interface User {
    username : string;
    permissions : Permission[];
}

export interface LoginResponse {
    cookie : string;
}