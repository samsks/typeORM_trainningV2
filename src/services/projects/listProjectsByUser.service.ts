import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { Project } from "../../entities";

const listProjectsByUserService = async (
  userId: number
): Promise<Project[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      projects: true,
    },
    withDeleted: true,
  });

  return user.projects;
};

export default listProjectsByUserService;
