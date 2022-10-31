import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors"

const listUserIdService = async (id:string)=> {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const oneUser= users.find((user)=> user.id === id);

    if(!oneUser){
        throw new AppError(404,"User not found");
    }

    return oneUser

}

export default listUserIdService