import { Request, Response } from "express";
import { listAllTechnologiesProjectService } from "../../services/projects";

const listAllTechnologiesProjectController = async (
  req: Request,
  res: Response
) => {
  const projectId: number = parseInt(req.params.id);
  const technologies = await listAllTechnologiesProjectService(projectId);
  return res.json(technologies);
};

export default listAllTechnologiesProjectController;
