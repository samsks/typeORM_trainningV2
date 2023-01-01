import { Request, Response } from "express";
import { IProjectReq } from "../../interfaces/projects.interface";
import { createProjectService } from "../../services/projects";

const createProjectController = async (req: Request, res: Response) => {
  const projectData: IProjectReq = req.body;
  const userId: number = req.user.id;
  const newProject = await createProjectService(projectData, userId);
  return res.status(201).json(newProject);
};

export default createProjectController;
