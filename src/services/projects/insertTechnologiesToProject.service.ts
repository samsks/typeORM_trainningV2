import { ITechnologyToProject } from "../../interfaces/projects.interface";
import AppDataSource from "../../data-source";
import { Technology, Project, TechnologyToProject } from "../../entities";
import { createTechnologyService } from "../technologies";
import { AppError } from "../../errors/AppError";

const insertTechnologiesToProjectService = async (
  technologies: ITechnologyToProject,
  projectId: number
): Promise<string> => {
  const projectRepository = AppDataSource.getRepository(Project);
  const technologyRepository = AppDataSource.getRepository(Technology);
  const technologyToProjectRepository =
    AppDataSource.getRepository(TechnologyToProject);

  const project = await projectRepository.findOneBy({
    id: projectId,
  });

  if (!project) {
    throw new AppError("Project not found!", 404);
  }

  technologies.technologies.forEach(async (el) => {
    let technology = await technologyRepository.findOneBy({
      name: el.name,
    });
    if (!technology) {
      technology = await createTechnologyService(el.name);
    }
    await technologyToProjectRepository.save({
      project,
      technology,
      added_in: el.added_in,
    });
  });

  return "Technologies added successfully!";
};

export default insertTechnologiesToProjectService;
