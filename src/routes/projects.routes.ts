import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  insertTechnologiesToProjectController,
  listProjectsByUserController,
} from "../controllers/projects";
import { ensureAuthMiddleware } from "../middlewares";
const projectsRoutes = Router();

projectsRoutes.post("", ensureAuthMiddleware, createProjectController);
projectsRoutes.get("/users/:id", listProjectsByUserController);
projectsRoutes.delete("/:id", deleteProjectController);
projectsRoutes.post("/:id/technologies", insertTechnologiesToProjectController);

export default projectsRoutes;
