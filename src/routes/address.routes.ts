import { Router } from "express";
import { createAddressController } from "../controllers/address";
import { ensureAuthMiddleware } from "../middlewares";

const addressRoutes = Router();

addressRoutes.post("", ensureAuthMiddleware, createAddressController);
// addressRoutes.get("");

export default addressRoutes;
