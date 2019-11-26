/* ------------ Generate the Order Number ----------------- */
    let orderNr = document.querySelector(".ordernr");
    orderNr.innerHTML = "Ordernr: " + Math.floor(Math.random() * 1000000001);

/* ------------- Generate the Date of the day ------------- */
    let date = document.querySelector(".datum");
    date.innerHTML = "Date: " + new Date().toLocaleDateString();






/* --------------- Gets the data from checkout and puts in the invoice ---------- */
function getDataCheckout (){
    const dataFromInvoice = document.querySelector(".datafromcheckout");
    dataFromInvoice.innerHTML= sessionStorage.getItem("dataToInvoice");
}

document.addEventListener("DOMContentLoaded", function (){
    getDataCheckout();
 })

