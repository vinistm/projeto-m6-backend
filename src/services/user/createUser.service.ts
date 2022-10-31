import { IUser,IUserRequest } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { hash } from "bcryptjs";


const createUserService = async ({ email, name, password,seller,purcharser }: IUserRequest) :Promise<IUser>=> {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where: {
          email: email,
        },
      });
    
      if (findUser) {
        throw new AppError(400,"User already exists");
      }
    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        seller,
        purcharser
        
        
    })

    await userRepository.save(user)
    
    const userReturn: IUser={
      id:user.id,
      name:user.name,
      email:user.email,
      seller:user.seller,
      purcharser:user.purcharser,
      created_at:user.created_at,
      updated_at:user.updated_at,
    }
    return userReturn

}

export default createUserService