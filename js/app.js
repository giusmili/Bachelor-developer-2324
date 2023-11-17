/* importation des variables ou fonction via un export js */
import { msg } from "./app_data.js";
import { printout } from "./app_data.js";
import { speack } from "./app_data.js";
import { NowDate } from "./app_data.js";

/* chargement du dom */
document.addEventListener("DOMContentLoaded", e => {
    //console.dir(document.children)

    msg(document.querySelector("title"));
    let bool = true; //type float
    let double = 1.5; //type number
    let type = null; //type object
    let nombre = 10; //type indéfinie
    let table = ["html", 1984, false];
    let x = "10";
    /* console.log(typeof table)
    console.log(parseFloat(double)) */

    console.log(NowDate.dates);
    NowDate.el.innerText = NowDate.dates;

    console.log(printout);
    //condition ternaire

    nombre % 2 === 0 ? console.log(`chiffre paire ${nombre}`) : console.log(`chiffre impaire ${nombre}`);

    nombre === x ? console.log(true) : console.log(false);
    console.table(table);
    console.log(speack.split(""));

    //tableaux

    table = ["html", 1984, false];

    table.push(nombre); //ajouter en fin de tableau un élément
    console.log(table.length);
    table.pop(nombre);
    table.unshift(nombre); //ajouter en début de tableau un élément
    table.shift(nombre); //supprimer en début de tableau un élément
    console.log(table);

    const user = {
        nom: "Javascript",
        version: "ES6"
        // Object.keys(persons) ou Object.value(persons)
    };console.table(Object.keys(user));

    for (let index in user) {
        let values = user[index];
        console.log(`${index} : ${values}\n`);
    }
    let nom = "javascrpt html css";
    const printouts = nom.split(" "); //diviser la chaine
    console.table(printouts);
});