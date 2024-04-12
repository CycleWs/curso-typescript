import { NegociationController } from "./controllers/negociation-controller.js";

const controller = new NegociationController();
const form = document.querySelector('.form');

form.addEventListener('submit', event =>{
    event.preventDefault();
    controller.addNC();
})
