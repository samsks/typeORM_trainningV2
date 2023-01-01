import { Request, Response } from "express";
import { createSessionService } from "../../services/session";
import { ISessionRequest } from "../../interfaces/session.interface";

const createSessionController = async (req: Request, res: Response) => {
  const sessionData: ISessionRequest = req.body;
  const token = await createSessionService(sessionData);
  return res.json({ token });
};

export default createSessionController;
