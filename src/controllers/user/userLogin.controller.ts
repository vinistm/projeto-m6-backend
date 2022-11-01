import { Request, Response } from "express";
import userLoginService from "../../services/user/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    const user = await userLoginService({ email, password });
  
    return res.status(200).json({ token: user});
  };
  
export default userLoginController;


