import { Request,Response } from "express";
import listUserIdService from "../../services/user/listUserId.service";

const listUserIdController = async (req: Request, res: Response)=>{
    const id = req.params.id;
    const user = await listUserIdService(id);
    return res.status(200).send(user);

}
export default listUserIdController;