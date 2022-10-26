import { Express } from "express";
import { veiculeRoutes } from "./veicules.routes";
export const appRoutes = (app: Express) => {
  app.use("/veicules", veiculeRoutes());
  };