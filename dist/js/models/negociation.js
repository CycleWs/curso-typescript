export class Negociation {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static createBy(dateString, quantityString, valueString) {
        const exp = /-/g;
        const data = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantityString);
        const valor = parseFloat(valueString);
        return new Negociation(data, quantidade, valor);
    }
}
