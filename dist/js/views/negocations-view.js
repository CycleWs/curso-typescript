import { View } from "./views.js";
export class NegocationsView extends View {
    template(model) {
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
                ${model.list().map(negociation => {
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
    formatDate(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
