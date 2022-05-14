class FilterDeputado {
    public siglaPartido: string[];
    public siglaUf: string[];

    constructor(siglaPartido: string[], siglaUf:string[]){
        this.siglaPartido = siglaPartido;
        this.siglaUf = siglaUf;
    }
}

export default FilterDeputado;