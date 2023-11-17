export let speack = "Hello"; //type string
export const version = Number(14); //type number

export const printout = `${speack} ${version}`; // template scripting

export const msg = el => {
    return el.innerText = "Javascript cours avancé";
};

/* 
date et heure 
const event = new Date();

console.log(event.toLocaleString()); 11/17/2023, 10:04:04 AM



console.log(event.toString());
// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toDateString());  "Fri Nov 17 2023 11:07:29 GMT+0100 (heure normale d’Europe centrale)"
> "Fri Nov 17 2023"

*/
export const NowDate = {
    dates: new Date().getFullYear(),
    el: document.querySelector("footer p time")
};