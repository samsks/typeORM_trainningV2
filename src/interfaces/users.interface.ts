export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  type: string;
}

export interface IUserResponse {
  name: string;
  email: string;
  type: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdateRequest {
  name?: string;
  email?: string;
  password?: string;
}
