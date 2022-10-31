import { Request,Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController = async(req: Request, res: Response)=>{
    const id = req.params.id;
    await deleteUserService(id);
    res.status(200).json({message: "User deleted successfully"})
}
export default deleteUserController;
