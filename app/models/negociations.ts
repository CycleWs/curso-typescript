import { Negociation } from "./negociation.js";

export class Negociations{
    private negociations: Array<Negociation> = [];
    //ou private negociations: Negociation[] = [];

    //Função criada para permitir a adção de itens do tipo Negociation dentro da array negociations (usada como metodo de acesso em outra classe)
    addNs(negociation: Negociation){
        this.negociations.push(negociation);
    }
    
    //ou list(): readonly Negociations[]{...}
    list(): ReadonlyArray<Negociation>{
        return this.negociations;
    }
}
