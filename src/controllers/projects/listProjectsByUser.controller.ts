import { Request, Response } from "express";
import { listProjectsByUserService } from "../../services/projects";

const listProjectsByUserController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  const projects = await listProjectsByUserService(userId);
  return res.json(projects);
};

export default listProjectsByUserController;
