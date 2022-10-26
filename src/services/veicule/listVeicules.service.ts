import { AppDataSource} from "../../data-source";
import { Veicule } from "../../entities/Veicule/veicule.entity";

const listVeiculeService = async ()=>{
    const veiculesRepository = AppDataSource.getRepository(Veicule);
    const veicule = await veiculesRepository.find();

    return veicule;
};
export default listVeiculeService;