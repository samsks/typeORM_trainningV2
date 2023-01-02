import { Technology } from "../../entities";
import AppDataSource from "../../data-source";

const listTechnologiesService = async (): Promise<Technology[]> => {
  const technologyRepository = AppDataSource.getRepository(Technology);

  const technologies = await technologyRepository.find();

  return technologies;
};

export default listTechnologiesService;
