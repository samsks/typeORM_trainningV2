import { Request, Response } from "express";
import { listTechnologiesService } from "../../services/technologies";

const listTechnologiesController = async (req: Request, res: Response) => {
  const technologies = await listTechnologiesService();
  return res.json(technologies);
};

export default listTechnologiesController;
