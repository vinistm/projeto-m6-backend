export interface IUserRequest {
    name: string;
    email: string;
    password: string;
    purcharser: boolean;
    seller: boolean;
    
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    purcharser: boolean;
    seller: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface IUserLogin {
    email: string;
    password: string;
  }