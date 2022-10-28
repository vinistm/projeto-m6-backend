import {Router} from "express"
import schemaValidation from "../middlewares/schemaValidation"
import createVeiculeController from "../controllers/veicules/createVeicule.controller"
import listVeiculesController from "../controllers/veicules/listVeicule.controller"
import veiculeRegisterSchema from "../schemas/veicules/veicule.schema"
import listVeiculeIDController from "../controllers/veicules/listVeiculeId.controller"
import deleteVeiculeController from "../controllers/veicules/deleteVeicule.controller"


const routes = Router()
export const veiculeRoutes = () =>{
    routes.get("", listVeiculesController);
    routes.post("", schemaValidation(veiculeRegisterSchema),createVeiculeController);
    routes.delete("/:id",deleteVeiculeController);
    routes.get(":/id",listVeiculeIDController);
    return routes;
}
