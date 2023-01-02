import AppDataSource from "../../data-source";
import { Project } from "../../entities";
import { AppError } from "../../errors/AppError";

const deleteProjectService = async (projectId: number): Promise<void> => {
  const projectRepository = AppDataSource.getRepository(Project);

  const project = await projectRepository.findOneBy({
    id: projectId,
  });

  if (!project) {
    throw new AppError("Project not found!", 404);
  }

  await projectRepository.softRemove(project);
  await projectRepository.save({
    ...project,
    end_date: new Date().toISOString().split("T")[0],
  });
};

export default deleteProjectService;
