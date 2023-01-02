import { Technology } from "../../entities";
import AppDataSource from "../../data-source";

const createTechnologyService = async (name: string): Promise<Technology> => {
  const technologyRepository = AppDataSource.getRepository(Technology);

  const technology = technologyRepository.create({
    name,
  });
  await technologyRepository.save(technology);
  return technology;
};

export default createTechnologyService;
