import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { NegocationsView } from "../views/negocations-view.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negociations();
        this.negociationsView = new NegocationsView('#negociationsView');
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
        this.negociationsView.update(this.negociations);
    }
    //Função utilizada para adcionar a negociação dentro da array criada na outra classa (será utilizada no botão do HTML)
    addNC() {
        const negociation = this.createNegociation();
        this.negociations.addNs(negociation);
        this.negociationsView.update(this.negociations);
        this.cleanForms();
    }
    //Função utilizada para criação da negociação do tipo Negociation!
    createNegociation() {
        const exp = /-/g;
        const data = new Date(this.inputDate.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantity.value);
        const valor = parseFloat(this.inputValue.value);
        return new Negociation(data, quantidade, valor);
    }
    cleanForms() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
