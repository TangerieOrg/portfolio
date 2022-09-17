export enum Permission {
    User = "USER",
    Developer = "DEV",
    Admin = "ADMIN"
}

export interface User {
    username : string;
    permission : Permission[];
}

export interface AuthenticationContextType {
    
}