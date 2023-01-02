import { Request, Response } from "express";
import { listUserByIdService } from "../../services/users";

const listUserByIdController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  const user = await listUserByIdService(userId);
  return res.json(user);
};

export default listUserByIdController;
