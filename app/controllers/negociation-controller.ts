import { weekDays } from "../enums/weekDays.js";
import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { MessageView } from "../views/message-view.js";
import { NegocationsView } from "../views/negocations-view.js";

export class NegociationController{
    private inputDate:  HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negociations =  new Negociations();
    private negociationsView = new NegocationsView('#negociationsView',true);
    private MessageView = new MessageView('#messageView');

    constructor(){
        this.inputDate = <HTMLInputElement> document.querySelector("#data");
        this.inputQuantity = <HTMLInputElement> document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor") as HTMLInputElement; //AMBAS AS FORMAS DE CASTAR PARA DIZER QUE É DO TIPO HTMLInputElement estão corretas (linhaas 16, 17 e 18)
        this.negociationsView.update(this.negociations);

    }

    //Função utilizada para adcionar a negociação dentro da array criada na outra classa (será utilizada no botão do HTML)
    public addNC(): void{
        const negociation = Negociation.createBy(
            this.inputDate.value,
            this.inputQuantity.value,
            this.inputValue.value
        );

        if(!this.isBusinessDay(negociation.data)){
            this.MessageView.update("Apenas negociações em dias úteis são aceitas");
            return;
        }
        this.negociations.addNs(negociation);
        this.cleanForms();
        this.updateView();
        
    }

    private isBusinessDay(date: Date){
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

    private cleanForms(): void{
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();

    }

    private updateView(): void{
        this.negociationsView.update(this.negociations);
        this.MessageView.update("Negociação adicionada com sucesso");
    }

}