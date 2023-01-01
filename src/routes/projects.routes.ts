import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  listProjectsByUserController,
} from "../controllers/projects";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const projectsRoutes = Router();

projectsRoutes.post("", ensureAuthMiddleware, createProjectController);
projectsRoutes.get("/users/:id", listProjectsByUserController);
projectsRoutes.delete("/:id", deleteProjectController);

export default projectsRoutes;
