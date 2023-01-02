import AppDataSource from "../../data-source";
import { User, Project } from "../../entities";

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
    withDeleted: true, // Opcional para aparecer os excluidos pelo soft delete
  });

  return user.projects;
};

export default listProjectsByUserService;
