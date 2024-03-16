import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { NegocationsView } from "../views/negocations-view.js";

export class NegociationController{
    private inputDate:  HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negociations =  new Negociations;
    private negociationsView = new NegocationsView('#negociationsView');
    

    constructor(){
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
        this.negociationsView.update();

    }

    //Função utilizada para adcionar a negociação dentro da array criada na outra classa (será utilizada no botão do HTML)
    addNC(): void{
        const negociation = this.createNegociation();
        this.negociations.addNs(negociation);
        console.log(this.negociations.list());
        this.cleanForms()
    }

    //Função utilizada para criação da negociação do tipo Negociation!
    createNegociation(): Negociation{
        
        const exp = /-/g;
        const data = new Date(this.inputDate.value.replace(exp,','));
        const quantidade = parseInt(this.inputQuantity.value);
        const valor = parseFloat(this.inputValue.value);

        return new Negociation(data, quantidade, valor);
    }

    cleanForms(): void{
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();

    }
}