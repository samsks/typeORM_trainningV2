import { Router } from "express";
import createSessionController from '../controllers/session/session.controller';

const sessionRoutes = Router();

sessionRoutes.post("", createSessionController);

export default sessionRoutes;
