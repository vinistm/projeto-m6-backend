import { AppDataSource } from "../../data-source";
import { Veicule } from "../../entities/veicule.entity";
import { AppError } from "../../errors";

const listVeiculeIDService = async(id:string) =>{
    const veiculeRepository = AppDataSource.getRepository(Veicule);

    const veicule = await veiculeRepository.findOneBy({
        id:parseInt(id),
    });
    if(!veicule) {
        throw new AppError(404,"VEICULE_NOT_FOUND");
    }
    return veicule;
}
export default listVeiculeIDService;