import Status from "./Status"

class Deputado{
    id: number
    cpf: string
    nomeCivil:string
    dataFalecimento: string
    dataNascimento: string
    escolaridade: string
    municipioNascimento: string
    redeSocial: Array<string>
    sexo: string
    ufNascimento: string
    ultimoStatus: Status;
    uri: string
    urlWebsite: string
}
export default Deputado;