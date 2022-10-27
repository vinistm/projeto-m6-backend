import {Router} from "express"
import schemaValidation from "../middlewares/schemaValidation"
import createVeiculeController from "../controllers/veicules/createVeicule.controller"
import listVeiculesController from "../controllers/veicules/listVeicule.controller"
import veiculeRegisterSchema from "../schemas/veicules/veicule.schema"
const routes = Router()
export const veiculeRoutes = () =>{
    routes.get("", listVeiculesController);
    routes.post("", schemaValidation(veiculeRegisterSchema),createVeiculeController);
    return routes;
}
