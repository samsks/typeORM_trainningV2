import AppDataSource from "../../data-source";
import { Project } from "../../entities";

const listAllProjectsService = async () => {
  const projects = await AppDataSource.createQueryBuilder()
    .select(["projects.id", "projects.name"])
    .from(Project, "projects")
    .getMany();

  return projects;
};

export default listAllProjectsService;
