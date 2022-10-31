import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors"

const deleteUserService = async(id: string): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ id: id })

    if(!user){
        throw new AppError(404,"User not found")
    }

    await userRepository.delete({ id:id })

    return
}

export default deleteUserService