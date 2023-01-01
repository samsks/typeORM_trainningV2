import { Router } from "express";
import {
  createUsersController,
  listUsersController,
} from "../controllers/users";
import {
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware,
} from "../middlewares";
import { userSerializer } from "../serializers/users.serializer";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  createUsersController
);
userRoutes.get("", ensureAuthMiddleware, listUsersController);

export default userRoutes;
