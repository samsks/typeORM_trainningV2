import express from "express";
import "express-async-errors";
import handleError from "./errors/handlerError";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/users.routes";
import addressRoutes from "./routes/address.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/address", addressRoutes);

app.use(handleError);

export default app;
