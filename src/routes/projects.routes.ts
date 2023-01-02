import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  insertTechnologiesToProjectController,
  listAllProjectsController,
  listAllTechnologiesProjectController,
  listProjectsByUserController,
} from "../controllers/projects";
import { ensureAuthMiddleware } from "../middlewares";
const projectsRoutes = Router();

projectsRoutes.post("", ensureAuthMiddleware, createProjectController);
projectsRoutes.get("/users/:id", listProjectsByUserController);
projectsRoutes.delete("/:id", deleteProjectController);
projectsRoutes.post("/:id/technologies", insertTechnologiesToProjectController);
projectsRoutes.get("", listAllProjectsController);
projectsRoutes.get("/:id/technologies", listAllTechnologiesProjectController);

export default projectsRoutes;
