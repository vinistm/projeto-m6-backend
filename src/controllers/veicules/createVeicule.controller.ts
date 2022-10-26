import { Request,Response } from "express";
import createVeiculeService from "../../services/veicule/createVeicule.service";

const createVeiculeController = async (req:Request, res:Response)=>{
    const{title,description,km,year,value,type,status} = req.body;

    const createVeicule = await createVeiculeService({
        title,
        description,
        km,
        year,
        value,
        type,
        status
    });
    
    return res.status(201).json(createVeicule);
}
export default createVeiculeController;