import { Router } from "express";
import {
  createUsersController,
  listUsersController,
  updateUserController,
} from "../controllers/users";
import listUserByIdController from "../controllers/users/listUserById.controller";
import {
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware,
} from "../middlewares";
import {
  userSerializer,
  userUpdateSerializer,
} from "../serializers/users.serializer";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  createUsersController
);
userRoutes.get("", ensureAuthMiddleware, listUsersController);
userRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(userUpdateSerializer),
  updateUserController
);
userRoutes.get("/:id", listUserByIdController);

export default userRoutes;
