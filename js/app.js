document.addEventListener("DOMContentLoaded", e => {
    //console.dir(document.children)

    const version = Number(14); //type number
    let bool = true; //type float
    let double = 1.5; //type number
    let speack = "Hello"; //type string
    let type = null; //type object
    let nombre = 10; //type indéfinie
    let table = ["html", 1984, false];
    let x = "10";
    /* console.log(typeof table)
    console.log(parseFloat(double)) */

    const printout = `${speack} ${version}`; // template scripting
    console.log(printout);
    //condition ternaire

    nombre % 2 === 0 ? console.log(`chiffre paire ${nombre}`) : console.log(`chiffre impaire ${nombre}`);

    nombre === x ? console.log(true) : console.log(false);
    console.table(table);
    console.log(speack.split(""));
});