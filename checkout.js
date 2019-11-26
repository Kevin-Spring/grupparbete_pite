/* ---------------------- Creates the productlist in the checkout ---------------------------- */
function ShowData(){
    const fakturaPris1 = document.querySelector(".fakturapris1");
    const fakturaPris2 = document.querySelector(".fakturapris2");
    const fakturaPris3 = document.querySelector(".fakturapris3");
    const fakturaPris4 = document.querySelector(".fakturapris4");
    const fakturaPris5 = document.querySelector(".fakturapris5");
    const fakturaPris6 = document.querySelector(".fakturapris6");

    const productheader1 = document.querySelector(".productheader1");
    const productheader2 = document.querySelector(".productheader2");
    const productheader3 = document.querySelector(".productheader3");
    const productheader4 = document.querySelector(".productheader4");
    const productheader5 = document.querySelector(".productheader5");
    const productheader6 = document.querySelector(".productheader6");

    const productImage1 = document.querySelector(".productImage1");
    const productImage2 = document.querySelector(".productImage2");
    const productImage3 = document.querySelector(".productImage3");
    const productImage4 = document.querySelector(".productImage4");
    const productImage5 = document.querySelector(".productImage5");
    const productImage6 = document.querySelector(".productImage6");
   
    fakturaPris1.innerHTML= sessionStorage.getItem("FirstProductPrice");
    productheader1.innerHTML = sessionStorage.getItem("FirstProductHeader");
    productImage1.src = sessionStorage.getItem("FirstProductImg");

    fakturaPris2.innerHTML = sessionStorage.getItem("SecondProductPrice");
    productheader2.innerHTML = sessionStorage.getItem("SecondProductHeader");
    productImage2.src = sessionStorage.getItem("SecondProductImg");

    fakturaPris3.innerHTML = sessionStorage.getItem("ThirdProductPrice");
    productheader3.innerHTML = sessionStorage.getItem("ThirdProductHeader");
    productImage3.src = sessionStorage.getItem("ThirdProductImg");

    fakturaPris4.innerHTML = sessionStorage.getItem("FourthProductPrice");
    productheader4.innerHTML = sessionStorage.getItem("FourthProductHeader");
    productImage4.src = sessionStorage.getItem("FourthProductImg");

    fakturaPris5.innerHTML = sessionStorage.getItem("FifthProductPrice");
    productheader5.innerHTML = sessionStorage.getItem("FifthProductHeader");
    productImage5.src = sessionStorage.getItem("FifthProductImg");

    fakturaPris6.innerHTML = sessionStorage.getItem("SixthProductPrice");
    productheader6.innerHTML = sessionStorage.getItem("SixthProductHeader");
    productImage6.src = sessionStorage.getItem("SixthProductImg");


    
  }

  /* -------------------- DOM EVENT---------------------- */
  document.addEventListener("DOMContentLoaded", function (){
    ShowData();
 })


 /* ----------------- Invoice Button ------------------- */
 function invoiceBtn (){
   const dataToInvoice = document.querySelector("#checkoutform").innerHTML;
   sessionStorage.setItem("dataToInvoice", dataToInvoice);
  window.document.location="invoice.html";
}
const checkoutInvoiceBtn = document.querySelector(".checkout-to-invoice-btn");
checkoutInvoiceBtn.addEventListener("click", invoiceBtn);
