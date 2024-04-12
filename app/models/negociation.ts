export class Negociation{
    
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number){}

    get volume(): number{
        return this.quantidade * this.valor;
    }

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    public static createBy( dateString: string, quantityString: string, valueString: string): Negociation{
        const exp = /-/g;
        const data = new Date(dateString.replace(exp,','));
        const quantidade = parseInt(quantityString);
        const valor = parseFloat(valueString);

        return new Negociation(data, quantidade, valor);
    }
}