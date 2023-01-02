import {
  IUserResponse,
  IUserUpdateRequest,
} from "../../interfaces/users.interface";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { userWithoutPasswordSerializer } from "../../serializers/users.serializer";

const updateUserService = async (
  userData: IUserUpdateRequest,
  userId: number
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });
  await userRepository.save(updatedUser);

  const updatedUserWithoutPassword =
    await userWithoutPasswordSerializer.validate(updatedUser, {
      stripUnknown: true,
    });

  return updatedUserWithoutPassword;
};

export default updateUserService;
