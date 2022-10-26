import {Router} from "express"
import createVeiculeController from "../controllers/veicules/createVeicule.controller"
import listVeiculesController from "../controllers/veicules/listVeicule.controller"

const routes = Router()
export const veiculeRoutes = () =>{
    routes.get("/", listVeiculesController);
    routes.post("/", createVeiculeController);
    return routes;
}
