import { nombre } from "./js/ex1.js";
import { sum } from "./js/ex2.js";
import {printTerminal} from "./js/printdata.js";

let numb1 = 3
let numb2 = 5

function app(){
    printTerminal(nombre)
    printTerminal(sum(numb1, numb2))
}
    
app()