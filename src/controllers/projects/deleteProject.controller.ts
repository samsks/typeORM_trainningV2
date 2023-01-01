import { Request, Response } from "express";
import { deleteProjectService } from "../../services/projects";

const deleteProjectController = async (req: Request, res: Response) => {
  const projectId: number = parseInt(req.params.id);
  await deleteProjectService(projectId);
  return res.status(204).json();
};

export default deleteProjectController;
