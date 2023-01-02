import { Request, Response } from "express";
import { ITechnologyToProject } from "../../interfaces/projects.interface";
import { insertTechnologiesToProjectService } from "../../services/projects";

const insertTechnologiesToProjectController = async (
  req: Request,
  res: Response
) => {
  const projectId: number = parseInt(req.params.id);
  const technologies: ITechnologyToProject = req.body;
  const response = await insertTechnologiesToProjectService(
    technologies,
    projectId
  );
  return res.json({
    message: response,
  });
};

export default insertTechnologiesToProjectController;
