import { Router } from "express";
import {
  createTechnologyController,
  listTechnologiesController,
} from "../controllers/technologies";

const technologiesRoutes = Router();

technologiesRoutes.post("", createTechnologyController);
technologiesRoutes.get("", listTechnologiesController);

export default technologiesRoutes;
