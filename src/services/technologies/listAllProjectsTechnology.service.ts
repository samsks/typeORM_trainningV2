import AppDataSource from "../../data-source";
import { Technology } from "../../entities";

const listAllProjectsTechnologyService = async (techId: number) => {
  const technologyRepository = AppDataSource.getRepository(Technology);

  const projects = await technologyRepository
    .createQueryBuilder("technologies")
    .innerJoinAndSelect(
      "technologies.technologiesToProjects",
      "technologiesToProjects"
    )
    .innerJoinAndSelect("technologiesToProjects.project", "projects")
    .where("technologies.id = :id_tecnologia", { id_tecnologia: techId })
    .getMany();

  return projects;
};

export default listAllProjectsTechnologyService;
