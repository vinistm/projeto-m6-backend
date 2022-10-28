import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Veicule } from "../../entities/veicule.entity";

const updateVeiculeService = async (id: number, title:string)=>{
    const veiculeRepository = AppDataSource.getRepository(Veicule);
    const veicule = await veiculeRepository.findOneBy({id:id});

    if(!veicule){
        throw new AppError(404,"Veicule not found");
    }
    const newTitle = title;

    await veiculeRepository.update(veicule!.id,{
        title: newTitle,
        status: veicule!.status,
    });
    return true;
};
export default updateVeiculeService
