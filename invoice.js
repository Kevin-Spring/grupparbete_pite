/* ------------ Generate the Order Number ----------------- */
    let orderNr = document.querySelector(".ordernr");
    orderNr.innerHTML = "Ordernr: #" + Math.floor(Math.random() * 1000000001);

/* ------------- Generate the Date of the day ------------- */
    let date = document.querySelector(".datum");
    date.innerHTML = "Date: " + new Date().toLocaleDateString();

/*--------------------- Get due date ---------------------- */
    let dueDate = document.querySelector(".dueDate");

    let thisDate = new Date();
    thisDate.setDate(thisDate.getDate() + 30);
    dueDate.innerHTML = "Due Date: " + thisDate.toLocaleDateString();

/* ------------- Generate random customer nr -------------- */
/*     let customerNr = document.querySelector(".customernr");
    customerNr.innerHTML = "Customer nr: " + Math.floor(Math.random() * 10001); */

/* ----------- Gets the customer information ---------- */
    const getFirstName = sessionStorage.getItem("firstName");
    const getLastName = sessionStorage.getItem("lastName");
    const getCompany = sessionStorage.getItem("company");
    const getPhone = sessionStorage.getItem("phone");
    const getAdress = sessionStorage.getItem("adress");
    const getPostnummer = sessionStorage.getItem("postnummer");

/* ---------- Puts the customer information in the HTML ------- */
    function fetchingCustomer () {
        const NameHTML = document.querySelector(".nameHTML");
        const companyHTML = document.querySelector(".companyHTML");
        const phoneHTML = document.querySelector(".phoneHTML");
        const adressHTML = document.querySelector(".adressHTML");
        const postnummerHTML = document.querySelector(".postnummerHTML");

        NameHTML.innerHTML = getFirstName + " " + getLastName;
        companyHTML.innerHTML = getCompany;
        phoneHTML.innerHTML = getPhone;
        adressHTML.innerHTML = getAdress;
        postnummerHTML.innerHTML = getPostnummer;
        
    }
    fetchingCustomer();






/* --------------Variables for queryselectors---------------*/
    

/* --------------- Gets the data from checkout and puts in the invoice ---------- */
function getDataCheckout (){

    /* -----------------------Puts the price of the cakes in the right place on invoice.html ------------------------ */
    const productPriceInvoice1 = document.querySelector(".productInvoicePrice1");
    const productPriceInvoice2 = document.querySelector(".productInvoicePrice2");
    const productPriceInvoice3 = document.querySelector(".productInvoicePrice3");
    const productPriceInvoice4 = document.querySelector(".productInvoicePrice4");
    const productPriceInvoice5 = document.querySelector(".productInvoicePrice5");
    const productPriceInvoice6 = document.querySelector(".productInvoicePrice6");
    
    /* -----------------------Puts the name of the cakes in the right place on invoice.html ------------------------ */
    const productNameInvoice1 = document.querySelector(".productInvoiceName1");
    const productNameInvoice2 = document.querySelector(".productInvoiceName2");
    const productNameInvoice3 = document.querySelector(".productInvoiceName3");
    const productNameInvoice4 = document.querySelector(".productInvoiceName4");
    const productNameInvoice5 = document.querySelector(".productInvoiceName5");
    const productNameInvoice6 = document.querySelector(".productInvoiceName6");

    /* ---------------------- Puts the price in the right column on the invoice -----------------------------------  */
    const productDelPris1 = document.querySelector(".delpris1");
    const productDelPris2 = document.querySelector(".delpris2");
    const productDelPris3 = document.querySelector(".delpris3");
    const productDelPris4 = document.querySelector(".delpris4");
    const productDelPris5 = document.querySelector(".delpris5");
    const productDelPris6 = document.querySelector(".delpris6");

    /* Get product price */
    const getProductPriceInvoice1 = sessionStorage.getItem("productPrice1");
    const getProductPriceInvoice2 = sessionStorage.getItem("productPrice2");
    const getProductPriceInvoice3 = sessionStorage.getItem("productPrice3");
    const getProductPriceInvoice4 = sessionStorage.getItem("productPrice4");
    const getProductPriceInvoice5 = sessionStorage.getItem("productPrice5");
    const getProductPriceInvoice6 = sessionStorage.getItem("productPrice6");
    
    /* ---------------------- Gets the product price ----------------------------- */
    productPriceInvoice1.innerHTML = (Number(getProductPriceInvoice1)) + (Number(getProductPriceInvoice1)) * .25;
    productPriceInvoice2.innerHTML = (Number(getProductPriceInvoice2)) + (Number(getProductPriceInvoice2)) * .25;
    productPriceInvoice3.innerHTML = (Number(getProductPriceInvoice3)) + (Number(getProductPriceInvoice3)) * .25;
    productPriceInvoice4.innerHTML = (Number(getProductPriceInvoice4)) + (Number(getProductPriceInvoice4)) * .25;
    productPriceInvoice5.innerHTML = (Number(getProductPriceInvoice5)) + (Number(getProductPriceInvoice5)) * .25;
    productPriceInvoice6.innerHTML = (Number(getProductPriceInvoice6)) + (Number(getProductPriceInvoice6)) * .25;

    /*  --------------------- Gets the product names ----------------------------- */
    productNameInvoice1.innerHTML = sessionStorage.getItem("productName1");
    productNameInvoice2.innerHTML = sessionStorage.getItem("productName2");  
    productNameInvoice3.innerHTML = sessionStorage.getItem("productName3");  
    productNameInvoice4.innerHTML = sessionStorage.getItem("productName4");  
    productNameInvoice5.innerHTML = sessionStorage.getItem("productName5");  
    productNameInvoice6.innerHTML = sessionStorage.getItem("productName6");  
    
    /* -----------------------Gets the product price again to put in the correct column on invoice ------------------ */
    productDelPris1.innerHTML = sessionStorage.getItem("productPrice1");
    productDelPris2.innerHTML = sessionStorage.getItem("productPrice2");
    productDelPris3.innerHTML = sessionStorage.getItem("productPrice3");
    productDelPris4.innerHTML = sessionStorage.getItem("productPrice4");
    productDelPris5.innerHTML = sessionStorage.getItem("productPrice5");
    productDelPris6.innerHTML = sessionStorage.getItem("productPrice6");

}

 function total() {

    /* -----------------------Puts the price of the cakes in the right place on invoice.html ------------------------ */
    const productPriceInvoice1 = document.querySelector(".productInvoicePrice1");
    const productPriceInvoice2 = document.querySelector(".productInvoicePrice2");
    const productPriceInvoice3 = document.querySelector(".productInvoicePrice3");
    const productPriceInvoice4 = document.querySelector(".productInvoicePrice4");
    const productPriceInvoice5 = document.querySelector(".productInvoicePrice5");
    const productPriceInvoice6 = document.querySelector(".productInvoicePrice6");

    /* ---------------------- Gets the product price ----------------------------- */
    productPriceInvoice1.innerHTML = sessionStorage.getItem("productPrice1");
    productPriceInvoice2.innerHTML = sessionStorage.getItem("productPrice2");
    productPriceInvoice3.innerHTML = sessionStorage.getItem("productPrice3");
    productPriceInvoice4.innerHTML = sessionStorage.getItem("productPrice4");
    productPriceInvoice5.innerHTML = sessionStorage.getItem("productPrice5");
    productPriceInvoice6.innerHTML = sessionStorage.getItem("productPrice6");

    /* ----------------------- Saves the innerHTML info of the price into a variabel --------------------------------- */
    let totalProductPrice1 = productPriceInvoice1.innerHTML;
    let totalProductPrice2 = productPriceInvoice2.innerHTML;
    let totalProductPrice3 = productPriceInvoice3.innerHTML;
    let totalProductPrice4 = productPriceInvoice4.innerHTML;
    let totalProductPrice5 = productPriceInvoice5.innerHTML;
    let totalProductPrice6 = productPriceInvoice6.innerHTML;

    /*  ----------------------- Saves the innerHTML price of the product into a variabel ----------------------------- */
    let taxesProductPrice1 = productPriceInvoice1.innerHTML;
    let taxesProductPrice2 = productPriceInvoice2.innerHTML;
    let taxesProductPrice3 = productPriceInvoice3.innerHTML;
    let taxesProductPrice4 = productPriceInvoice4.innerHTML;
    let taxesProductPrice5 = productPriceInvoice5.innerHTML;
    let taxesProductPrice6 = productPriceInvoice6.innerHTML;


    /* ------------------------ Variabels for displaying the total prices at the end of invoice ---------------------- */
    let displayTotal = document.querySelector(".totalinvoicesum");
    let displayTaxes = document.querySelector(".totaltaxes");
    let dispalyTotalTaxes = document.querySelector(".totalinvoicesumtaxes");
    
    /* ------------------------ Variabels for displaying the taxprice of the product in the column taxes ------------- */
    let taxesCoulmn1 = document.querySelector(".taxesprice1");
    let taxesCoulmn2 = document.querySelector(".taxesprice2");
    let taxesCoulmn3 = document.querySelector(".taxesprice3");
    let taxesCoulmn4 = document.querySelector(".taxesprice4");
    let taxesCoulmn5 = document.querySelector(".taxesprice5");
    let taxesCoulmn6 = document.querySelector(".taxesprice6");

    taxesCoulmn1.innerHTML = (Number(totalProductPrice1) * .25);
    taxesCoulmn2.innerHTML = (Number(totalProductPrice2) * .25);
    taxesCoulmn3.innerHTML = (Number(totalProductPrice3) * .25);
    taxesCoulmn4.innerHTML = (Number(totalProductPrice4) * .25);
    taxesCoulmn5.innerHTML = (Number(totalProductPrice5) * .25);
    taxesCoulmn6.innerHTML = (Number(totalProductPrice6) * .25);
    
    /* ----------------------- Calculates the total price of all products ---------------------- */
    let totalsum =  (Number(totalProductPrice1)) + (Number(totalProductPrice2)) + 
                    (Number(totalProductPrice3)) + (Number(totalProductPrice4)) + 
                    (Number(totalProductPrice5)) + (Number(totalProductPrice6));

    /* ------------------------ Displays the total price of everything at end of invoice ----------------------------- */
    displayTotal.innerHTML = "Belopp före moms: " + (Number(totalsum));
    displayTaxes.innerHTML = "Total moms: " + (Number(totalsum) * .25);
    dispalyTotalTaxes.innerHTML = "Summa att betala: " + ((Number(totalsum)) + (Number(totalsum)) * .25);

    

    return;

 }

 total();

 /* --------------- Print button function ------------------- */
 const printBtn = document.querySelector(".print");  
 function skrivUt() {   
     window.print(); 
    }  
 printBtn.addEventListener("click", skrivUt);


/* ---------------------- DOM event ------------------------- */
 document.addEventListener("DOMContentLoaded", function (){
    getDataCheckout();
 })


 
