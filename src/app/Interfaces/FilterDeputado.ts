interface FilterDeputado {
    nome: string;
    siglaPartido?: Array<string>;
    siglaUf?: Array<string>;
    ordenarPor: string
}

export default FilterDeputado;