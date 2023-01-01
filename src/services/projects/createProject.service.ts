import { IProjectReq } from "../../interfaces/projects.interface";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { Project } from "../../entities";

const createProjectService = async (
  projectData: IProjectReq,
  userId: number
): Promise<Project> => {
  const userRepository = AppDataSource.getRepository(User);
  const projectRepository = AppDataSource.getRepository(Project);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  //NAO USEM ESSA OPERAÇÃO, CONSOME MUITO PROCESSAMENTO
  // const users = await userRepository.find()
  // const findUser = users.find(user => user.id === userId)

  const newProject = projectRepository.create({
    ...projectData,
    user,
  });
  await projectRepository.save(newProject);

  return newProject;
};

export default createProjectService;
