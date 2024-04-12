import { weekDays } from "../enums/weekDays.js";
import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { MessageView } from "../views/message-view.js";
import { NegocationsView } from "../views/negocations-view.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negociations();
        this.negociationsView = new NegocationsView('#negociationsView');
        this.MessageView = new MessageView('#messageView');
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
        this.negociationsView.update(this.negociations);
    }
    //Função utilizada para adcionar a negociação dentro da array criada na outra classa (será utilizada no botão do HTML)
    addNC() {
        const negociation = Negociation.createBy(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isBusinessDay(negociation.data)) {
            this.MessageView.update("Apenas negociações em dias úteis são aceitas");
            return;
        }
        this.negociations.addNs(negociation);
        this.cleanForms();
        this.updateView();
    }
    isBusinessDay(date) {
        return date.getDay() < weekDays.SABADO &&
            date.getDay() > weekDays.DOMINGO;
    }
    //Função utilizada para criação da negociação do tipo Negociation!
    // private createNegociation(): Negociation{
    //     const exp = /-/g;
    //     const data = new Date(this.inputDate.value.replace(exp,','));
    //     const quantidade = parseInt(this.inputQuantity.value);
    //     const valor = parseFloat(this.inputValue.value);
    //     return new Negociation(data, quantidade, valor);
    // }
    cleanForms() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.negociationsView.update(this.negociations);
        this.MessageView.update("Negociação adicionada com sucesso");
    }
}
