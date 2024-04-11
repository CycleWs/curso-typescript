import { Negociations } from "../models/negociations.js";
import { View } from "./views.js";

export class NegocationsView extends View<Negociations>{
    

    protected template(model: Negociations): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>    
            </thead>
            <tbody>
                ${model.list().map(negociation =>{
                    return `
                    <tr>
                        <td>${this.formatDate(negociation.data)}</td>
                        <td>${negociation.quantidade}</td>
                        <td>${negociation.valor}</td>
                    </tr>
                    `;
                }).join('')}
            </body>
        </table>
        `;
    }

    private formatDate(data: Date): string{
        return new Intl.DateTimeFormat().format(data);
    }
}