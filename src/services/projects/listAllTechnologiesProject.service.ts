import AppDataSource from "../../data-source";
import { Project } from "../../entities";

const listAllTechnologiesProjectService = async (projectId: number) => {
  const projectRepository = AppDataSource.getRepository(Project);

  const technologies = await projectRepository
    .createQueryBuilder("projects")
    .innerJoinAndSelect(
      "projects.technologiesToProjects",
      "technologiesToProjects"
    )
    .innerJoinAndSelect("technologiesToProjects.technology", "technologies")
    .where("projects.id = :id_projeto", { id_projeto: projectId })
    .select([
      "projects.id as id_projeto",
      "technologiesToProjects",
      "technologies",
    ])
    .getRawMany();

  return technologies;
};

export default listAllTechnologiesProjectService;
