import { ISessionRequest } from "../../interfaces/session.interface";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { AppError } from "../../errors/AppError";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import "dotenv/config";

const createSessionService = async ({
  email,
  password,
}: ISessionRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("User or password invalid", 401);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("User or password invalid", 401);
  }

  const token = jwt.sign(
    {
      type: user.type,
    },
    process.env.SECRET_KEY,
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return token;
};

export default createSessionService;
