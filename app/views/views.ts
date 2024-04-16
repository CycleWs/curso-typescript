export abstract class View<T>{
    
    protected element: HTMLElement;
    private escape = false;

    constructor(seletor: string, escape?: boolean){
        const element = document.querySelector(seletor);
        if(element){
            this.element = element as HTMLElement;
        }else{
            throw Error(`Seletor ${seletor} não existe no DOM`);
        }
        if(escape){
            this.escape = escape;
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void{
        let template = this.template(model);
        if(this.escape){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}