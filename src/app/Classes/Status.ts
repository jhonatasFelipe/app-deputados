import Gabinete from './Gabinete';
class Status{
    id: number;
    nome:string;
    nomeEleitoral:string;
    urlFoto: string;
    condicaoEleitoral: string;
    data: string;
    descricaoStatus:string;
    email:string;
    gabinete: Gabinete;
    idLegislatura: number;
    siglaPartido: string;
    siglaUf:string;
    situacao:string;
    uri:string;
    uriPartido: string; 
}

export default Status;