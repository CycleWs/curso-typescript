import { NegociationController } from "./controllers/negociation-controller.js";
const controller = new NegociationController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.addNC();
    });
}
else {
    throw Error(`Não foi possivel inicializar a aplicação.  Verifique se o form existe!`);
}
