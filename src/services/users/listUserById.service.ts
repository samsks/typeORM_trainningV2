import AppDataSource from "../../data-source";
import { User } from "../../entities";

const listUserByIdService = async (userId: number): Promise<User> => {
  const user = await AppDataSource.createQueryBuilder()
    .select("users")
    .from(User, "users")
    .where("users.id = :id_do_usuario", { id_do_usuario: userId })
    .getOne();

  return user;
};

export default listUserByIdService;
