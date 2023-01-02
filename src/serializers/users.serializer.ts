import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserResponse,
  IUserUpdateRequest,
} from "../interfaces/users.interface";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
  type: yup.string().required(),
});

const userResponseSerializer: SchemaOf<IUserResponse> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  type: yup.string().notRequired(),
  id: yup.number().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

const userWithoutPasswordSerializer: SchemaOf<IUserResponse> = yup
  .object()
  .shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    type: yup.string().notRequired(),
    id: yup.number().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });

const userUpdateSerializer: SchemaOf<IUserUpdateRequest> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
});

export {
  userSerializer,
  userResponseSerializer,
  userWithoutPasswordSerializer,
  userUpdateSerializer,
};
