/* --------------------- SHOPPINGVAGNSKNAPP SOM LEDER EN TILL CHECKOUT ------------- */
function shoppingKnapp (){
    window.document.location="checkout.html";
}
const shoppingvagn = document.querySelector(".kundvagn");
shoppingvagn.addEventListener("click", shoppingKnapp);



/* ---------------------FUNKTION FÖR KNAPP 1 I PRODUKTLISTA------------------------ */
function setItemValueBtn1 () {

    const FirstProductPrice = document.querySelector(".cake__gridwrapper__item-price-1").innerHTML;
    const FirstProductHeader = document.querySelector(".cake__gridwrapper__item-h3-1").innerHTML;
    const FirstProductImg = document.querySelector(".cake__gridwrapper__item-img-1").src;
    localStorage.setItem("FirstProductPrice", FirstProductPrice);
    localStorage.setItem("FirstProductHeader", FirstProductHeader);
    localStorage.setItem("FirstProductImg", FirstProductImg);
    /* window.document.location="faktura.html"; */

}
const FirstProductBtn = document.querySelector(".cake__gridwrapper__item-btn-1");
FirstProductBtn.addEventListener("click", setItemValueBtn1);


/* ---------------------FUNKTION FÖR KNAPP 2 I PRODUKTLISTA------------------------ */
function setItemValueBtn2 () {

    const SecondProductPrice = document.querySelector(".cake__gridwrapper__item-price-2").innerHTML;
    const SecondProductHeader = document.querySelector(".cake__gridwrapper__item-h3-2").innerHTML;
    const SecondProductImg = document.querySelector(".cake__gridwrapper__item-img-2").src;
    localStorage.setItem("SecondProductPrice", SecondProductPrice);
    localStorage.setItem("SecondProductHeader", SecondProductHeader);
    localStorage.setItem("SecondProductImg", SecondProductImg);
    

}
const SecondProductBtn = document.querySelector(".cake__gridwrapper__item-btn-2");
SecondProductBtn.addEventListener("click", setItemValueBtn2);

/* ---------------------FUNKTION FÖR KNAPP 3 I PRODUKTLISTA------------------------ */
function setItemValueBtn3 () {

    const ThirdProductPrice = document.querySelector(".cake__gridwrapper__item-price-3").innerHTML;
    const ThirdProductHeader = document.querySelector(".cake__gridwrapper__item-h3-3").innerHTML;
    const ThirdProductImg = document.querySelector(".cake__gridwrapper__item-img-3").src;
    localStorage.setItem("ThirdProductPrice", ThirdProductPrice);
    localStorage.setItem("ThirdProductHeader", ThirdProductHeader);
    localStorage.setItem("ThirdProductImg", ThirdProductImg);
    

}
const ThirdProductBtn = document.querySelector(".cake__gridwrapper__item-btn-3");
ThirdProductBtn.addEventListener("click", setItemValueBtn3);

/* ---------------------FUNKTION FÖR KNAPP 4 I PRODUKTLISTA------------------------ */
function setItemValueBtn4 () {

    const FourthProductPrice = document.querySelector(".cake__gridwrapper__item-price-4").innerHTML;
    const FourthProductHeader = document.querySelector(".cake__gridwrapper__item-h3-4").innerHTML;
    const FourthProductImg = document.querySelector(".cake__gridwrapper__item-img-4").src;
    localStorage.setItem("FourthProductPrice", FourthProductPrice);
    localStorage.setItem("FourthProductHeader", FourthProductHeader);
    localStorage.setItem("FourthProductImg", FourthProductImg);
    

}
const FourthProductBtn = document.querySelector(".cake__gridwrapper__item-btn-4");
FourthProductBtn.addEventListener("click", setItemValueBtn4);

/* ---------------------FUNKTION FÖR KNAPP 5 I PRODUKTLISTA------------------------ */
function setItemValueBtn5 () {

    const FifthProductPrice = document.querySelector(".cake__gridwrapper__item-price-5").innerHTML;
    const FifthProductHeader = document.querySelector(".cake__gridwrapper__item-h3-5").innerHTML;
    const FifthProductImg = document.querySelector(".cake__gridwrapper__item-img-5").src;
    localStorage.setItem("FifthProductPrice", FifthProductPrice);
    localStorage.setItem("FifthProductHeader", FifthProductHeader);
    localStorage.setItem("FifthProductImg", FifthProductImg);
    

}
const FifthProductBtn = document.querySelector(".cake__gridwrapper__item-btn-5");
FifthProductBtn.addEventListener("click", setItemValueBtn5);

/* ---------------------FUNKTION FÖR KNAPP 6 I PRODUKTLISTA------------------------ */
function setItemValueBtn6 () {

    const SixthProductPrice = document.querySelector(".cake__gridwrapper__item-price-6").innerHTML;
    const SixthProductHeader = document.querySelector(".cake__gridwrapper__item-h3-6").innerHTML;
    const SixthProductImg = document.querySelector(".cake__gridwrapper__item-img-6").src;
    localStorage.setItem("SixthProductPrice", SixthProductPrice);
    localStorage.setItem("SixthProductHeader", SixthProductHeader);
    localStorage.setItem("SixthProductImg", SixthProductImg);
    

}
const SixthProductBtn = document.querySelector(".cake__gridwrapper__item-btn-6");
SixthProductBtn.addEventListener("click", setItemValueBtn6);

