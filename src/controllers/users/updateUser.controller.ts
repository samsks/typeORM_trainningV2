import { Request, Response } from "express";
import { IUserUpdateRequest } from "../../interfaces/users.interface";
import { updateUserService } from "../../services/users";

const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdateRequest = req.body;
  const userId = parseInt(req.params.id);
  const updatedUser = await updateUserService(userData, userId);
  return res.json(updatedUser);
};

export default updateUserController;
