import { Request, Response } from "express";
import { listAllProjectsService } from "../../services/projects";

const listAllProjectsController = async (req: Request, res: Response) => {
  const projects = await listAllProjectsService();
  return res.json(projects);
};

export default listAllProjectsController;
