export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  type: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
