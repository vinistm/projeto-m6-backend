import { Veicule } from "../../entities/Veicule/veicule.entity";
import { IVeiculesRequest } from "../../interfaces/veicules";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
const createVeiculeService = async({
    title,description,km,year,value,type,status
}:IVeiculesRequest)=>{
    const veiculeRepository = AppDataSource.getRepository(Veicule)
    const veicule = await veiculeRepository.findOneBy({
        title: title,
});
    if(veicule){
        throw new AppError(400,"Veicule already exists");
    }
    const veiculeCreate = new Veicule();
    veiculeCreate.title = title;
    veiculeCreate.description = description;
    veiculeCreate.km = km;
    veiculeCreate.year = year;
    veiculeCreate.value = value;
    veiculeCreate.type = type;
    veiculeCreate.status = status;
    veiculeRepository.create(veiculeCreate)
    await veiculeRepository.save(veiculeCreate);
    return veiculeCreate;
};
export default createVeiculeService
