import { Request, Response } from "express";
import { listAllProjectsTechnologyService } from "../../services/technologies";

const listAllProjectsTechnologyController = async (
  req: Request,
  res: Response
) => {
  const techId: number = parseInt(req.params.id);
  const projects = await listAllProjectsTechnologyService(techId);
  return res.json(projects);
};

export default listAllProjectsTechnologyController;
