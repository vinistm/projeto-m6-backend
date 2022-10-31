import { Request,Response } from "express";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
    const{name,email,password,seller, purcharser} = req.body;

    const createUser = await createUserService({
        name,
        email,
        password,
        seller,
        purcharser
    })
    
    return res.status(201).json(createUser)
  };
  export default createUserController;