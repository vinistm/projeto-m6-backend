import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors"
import { IUserLogin } from "../../interfaces/user";
import * as bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userLoginService = async ({ email, password }: IUserLogin) => {
    const userInfoRepository = AppDataSource.getRepository(User);
  
    const user = await userInfoRepository.findOneBy({ email: email });
  
    if (!user) {
      throw new AppError(400, "Wrong email/password");
    }
  
    const passwordMatch = bcryptjs.compareSync(password, user.password);
  
    if (!passwordMatch) {
      throw new AppError(400, "Wrong email/password");
    }
    
    const token = jwt.sign(
      {
        id: user!.id,
        email: user!.email,
      },
      process.env.SECRET_KEY as string,
      {
        expiresIn: "24h",
      }
    );
  
    return token;
  };
  export default userLoginService;
  