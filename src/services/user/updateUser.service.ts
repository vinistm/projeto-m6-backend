import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors"

const updateUserService = async (
    id: string,
    name: string,
    email: string,
   
  ) => {
    const userRepository = AppDataSource.getRepository(User);
    
    const account = await userRepository.findOneBy({id:id})
  
    if (!account) {
      throw new AppError(404,"User not found");
    }
        
    const newName=name
    const newEmail = email
    
  
    const user=await userRepository.update(account!.id,{
      id:id,
      name:newName,
      email:newEmail,
      created_at:account.created_at,
      updated_at:new Date()
    });
  
    return user;
  };
export default updateUserService;