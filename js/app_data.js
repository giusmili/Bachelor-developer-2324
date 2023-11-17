export let speack = "Hello"; //type string
export const version = Number(14); //type number

export const printout = `${speack} ${version}`; // template scripting

export const msg = el => {
    return el.innerText = "Javascript cours avancé";
};

/* date et heure */
export const NowDate = {
    dates: new Date().getFullYear(),
    el: document.querySelector("footer p time")
};