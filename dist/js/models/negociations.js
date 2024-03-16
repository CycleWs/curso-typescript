export class Negociations {
    constructor() {
        this.negociations = [];
    }
    //ou private negociations: Negociation[] = [];
    //Função criada para permitir a adção de itens do tipo Negociation dentro da array negociations (usada como metodo de acesso em outra classe)
    addNs(negociation) {
        this.negociations.push(negociation);
    }
    //ou list(): readonly Negociations[]{...}
    list() {
        return this.negociations;
    }
}
