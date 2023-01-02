import { Router } from "express";
import {
  createTechnologyController,
  listAllProjectsTechnologyController,
  listTechnologiesController,
} from "../controllers/technologies";

const technologiesRoutes = Router();

technologiesRoutes.post("", createTechnologyController);
technologiesRoutes.get("", listTechnologiesController);
technologiesRoutes.get("/:id/projects", listAllProjectsTechnologyController);

export default technologiesRoutes;
