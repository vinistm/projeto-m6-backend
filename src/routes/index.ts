import { Express } from "express";
import { veiculeRoutes } from "./veicules.routes";
import { userRoutes } from "./user.routes";
export const appRoutes = (app: Express) => {
  app.use("/veicules", veiculeRoutes());
  app.use("/user", userRoutes());
  };