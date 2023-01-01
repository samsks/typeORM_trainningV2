import { IUserRequest, IUserResponse } from "../../interfaces/users.interface";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { userResponseSerializer } from "../../serializers/users.serializer";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);
  await userRepository.save(user);

  const userResponse = await userResponseSerializer.validate(user, {
    stripUnknown: true,
  });

  return userResponse;
};

export default createUserService;
