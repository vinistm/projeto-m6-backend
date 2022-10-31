import {Router} from "express"

import createUserController from "../controllers/user/createUser.controller"
import listUserIdController from "../controllers/user/listUserId.controller"
import listUsersController from "../controllers/user/listUsers.controller"
import deleteUserController from "../controllers/user/deleteUser.controller"

const routes = Router()
export const userRoutes = () =>{
    routes.get("/list",listUsersController)
    routes.post("/register",createUserController)
    routes.delete("/:id",deleteUserController)
    routes.get("/list/:id",listUserIdController)
    return routes;
}