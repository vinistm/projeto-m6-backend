import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Veicule } from "../../entities/veicule.entity";

const veiculeDeleteService = async (id:number) =>{
    const veiculeRepository = AppDataSource.getRepository(Veicule);
    const veicule = await veiculeRepository.findOneBy({id:id});

    if (!veicule) {
        throw new AppError(404,"Veicule does not exist");
    }
    await veiculeRepository.delete({id:id});

}

export default veiculeDeleteService;