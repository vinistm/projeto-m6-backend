import { Request,Response } from "express";
import veiculeDeleteService from "../../services/veicule/deleteVeicule.service";

const deleteVeiculeController = async (req: Request, res: Response)=>{
    const id = req.params.id;
    const idNumber = parseInt(id);
    await veiculeDeleteService(idNumber);
    return res.status(200).json({message:"Veicule deleted successfully"})
}
export default deleteVeiculeController;
