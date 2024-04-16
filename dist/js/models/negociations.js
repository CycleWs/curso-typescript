export class Negociations {
    constructor() {
        this.negociations = [];
    }
    addNs(negociation) {
        this.negociations.push(negociation);
    }
    list() {
        return this.negociations;
    }
}
