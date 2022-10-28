import { Request,Response } from "express";
import listVeiculeIDService from "../../services/veicule/listVeiculeId.service";

const listVeiculeIDController = async (req: Request, res: Response) =>{
    const id = req.params.id;
    const veicule = await listVeiculeIDService(id);
    return res.status(200).send(veicule)

};
export default listVeiculeIDController
