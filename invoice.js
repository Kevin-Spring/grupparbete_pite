/* ------------ Generate the Order Number ----------------- */
    let orderNr = document.querySelector(".ordernr");
    orderNr.innerHTML = "Ordernr: #" + Math.floor(Math.random() * 1000000001);

/* ------------- Generate the Date of the day ------------- */
    let date = document.querySelector(".datum");
    date.innerHTML = "Date: " + new Date().toLocaleDateString();






/* --------------Variables for queryselectors---------------*/
    

/* --------------- Gets the data from checkout and puts in the invoice ---------- */
function getDataCheckout (){

    const productPriceInvoice1 = document.querySelector(".productInvoicePrice1");
    const productPriceInvoice2 = document.querySelector(".productInvoicePrice2");
    const productPriceInvoice3 = document.querySelector(".productInvoicePrice3");
    const productPriceInvoice4 = document.querySelector(".productInvoicePrice4");
    const productPriceInvoice5 = document.querySelector(".productInvoicePrice5");
    const productPriceInvoice6 = document.querySelector(".productInvoicePrice6");

    const productNameInvoice1 = document.querySelector(".productInvoiceName1");
    const productNameInvoice2 = document.querySelector(".productInvoiceName2");
    const productNameInvoice3 = document.querySelector(".productInvoiceName3");
    const productNameInvoice4 = document.querySelector(".productInvoiceName4");
    const productNameInvoice5 = document.querySelector(".productInvoiceName5");
    const productNameInvoice6 = document.querySelector(".productInvoiceName6");
    
    productPriceInvoice1.innerHTML = sessionStorage.getItem("productPrice1");
    productPriceInvoice2.innerHTML = sessionStorage.getItem("productPrice2");
    productPriceInvoice3.innerHTML = sessionStorage.getItem("productPrice3");
    productPriceInvoice4.innerHTML = sessionStorage.getItem("productPrice4");
    productPriceInvoice5.innerHTML = sessionStorage.getItem("productPrice5");
    productPriceInvoice6.innerHTML = sessionStorage.getItem("productPrice6");

    productNameInvoice1.innerHTML = sessionStorage.getItem("productName1");
    productNameInvoice2.innerHTML = sessionStorage.getItem("productName2");  
    productNameInvoice3.innerHTML = sessionStorage.getItem("productName3");  
    productNameInvoice4.innerHTML = sessionStorage.getItem("productName4");  
    productNameInvoice5.innerHTML = sessionStorage.getItem("productName5");  
    productNameInvoice6.innerHTML = sessionStorage.getItem("productName6");      

}

 function total() {

    const productPriceInvoice1 = document.querySelector(".productInvoicePrice1");
    const productPriceInvoice2 = document.querySelector(".productInvoicePrice2");
    const productPriceInvoice3 = document.querySelector(".productInvoicePrice3");
    const productPriceInvoice4 = document.querySelector(".productInvoicePrice4");
    const productPriceInvoice5 = document.querySelector(".productInvoicePrice5");
    const productPriceInvoice6 = document.querySelector(".productInvoicePrice6");


    productPriceInvoice1.innerHTML = sessionStorage.getItem("productPrice1");
    productPriceInvoice2.innerHTML = sessionStorage.getItem("productPrice2");
    productPriceInvoice3.innerHTML = sessionStorage.getItem("productPrice3");
    productPriceInvoice4.innerHTML = sessionStorage.getItem("productPrice4");
    productPriceInvoice5.innerHTML = sessionStorage.getItem("productPrice5");
    productPriceInvoice6.innerHTML = sessionStorage.getItem("productPrice6");

    let totalProductPrice1 = productPriceInvoice1.innerHTML;
    let totalProductPrice2 = productPriceInvoice2.innerHTML;
    let totalProductPrice3 = productPriceInvoice3.innerHTML;
    let totalProductPrice4 = productPriceInvoice4.innerHTML;
    let totalProductPrice5 = productPriceInvoice5.innerHTML;
    let totalProductPrice6 = productPriceInvoice6.innerHTML;



    let displayTotal = document.querySelector(".totalinvoicesum");
    let displayTaxes = document.querySelector(".totaltaxes");
    let dispalyTotalTaxes = document.querySelector(".totalinvoicesumtaxes");
    

    let totalsum =  (Number(totalProductPrice1)) + (Number(totalProductPrice2)) + 
                    (Number(totalProductPrice3)) + (Number(totalProductPrice4)) + 
                    (Number(totalProductPrice5)) + (Number(totalProductPrice6));

    displayTotal.innerHTML = "Belopp före moms: " + (Number(totalsum));
    displayTaxes.innerHTML = "Total moms: " + (Number(totalsum) * .25);
    dispalyTotalTaxes.innerHTML = "Summa att betala: " + ((Number(totalsum)) + (Number(totalsum)) * .25);

    return;

 }

 total();










 document.addEventListener("DOMContentLoaded", function (){
    getDataCheckout();
 })


 
