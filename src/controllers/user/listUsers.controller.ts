import { Request,Response } from "express";
import listUsersServices from "../../services/user/listUsers.service";

const listUsersController = async(req:Request, res:Response)=>{
    const userList = await listUsersServices()
    return res.status(200).json(userList);
}
export default listUsersController

