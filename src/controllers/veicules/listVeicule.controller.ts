import { Request,Response } from "express";
import listVeiculeService from "../../services/veicule/listVeicules.service";

const listVeiculesController = async(req: Request, res: Response) => {
    const list = await listVeiculeService();
    return res.status(200).json(list);
};
export default listVeiculesController;
