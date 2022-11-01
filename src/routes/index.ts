import { Express } from "express";
import { veiculeRoutes } from "./veicules.routes";
import { userRoutes } from "./user.routes";
import { loginRoutes } from "./login.routes";
export const appRoutes = (app: Express) => {
  app.use("/veicules", veiculeRoutes());
  app.use("/user", userRoutes());
  app.use("/login",loginRoutes());
  };