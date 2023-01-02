import express from "express";
import "express-async-errors";
import handleError from "./errors/handlerError";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/users.routes";
import addressRoutes from "./routes/address.routes";
import projectsRoutes from './routes/projects.routes';
import technologiesRoutes from "./routes/technologies.routes";

const app = express();
app.use(express.json());

app.use("/login", sessionRoutes);
app.use("/users", userRoutes);
app.use("/address", addressRoutes);
app.use('/projects', projectsRoutes)
app.use('/technologies', technologiesRoutes)

app.use(handleError);

export default app;
