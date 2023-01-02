import { Request, Response } from "express";
import { createTechnologyService } from "../../services/technologies";

const createTechnologyController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newTechnology = await createTechnologyService(name);
  return res.status(201).json(newTechnology);
};

export default createTechnologyController;
