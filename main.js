// Hamburger 
const hamburger = document.querySelector('#hamburgerhtml');;
const listhamburger = document.querySelector('.main-navigator-mobile-list');
let x = false;

hamburger.addEventListener("click", () => {
    listhamburger.classList.toggle("shown", x = !x);
});
    window.onresize = function() //fix
    {
        let hamburgerfixresize = window.innerWidth;
        if(x == true){
            if(hamburgerfixresize >= 573){
            // console.log("fixedall" + " " + x);
            document.querySelector('.main-navigator-mobile-list').classList.replace("shown","main-navigator-mobile-list");}
        }
    }

// Color randomizer 
const colortarget1 = document.querySelector('.buttonclickerbef') 
const colortarget2 = document.querySelector('.buttonclicker ') 

colortarget1.addEventListener("click", () => {

    let color = Math.floor(Math.random()*16777215).toString(16);

console.log("color changed to " + color);
colortarget1.style = "box-shadow: 0px 0px 10px #" + color + ";";
colortarget1.style = "background: #" + color + ";";

})

colortarget2.addEventListener("click", () => {

let color = Math.floor(Math.random()*16777215).toString(16); //color

console.log("color changed to " + color);
colortarget1.style = "box-shadow: 0px 0px 10px #" + color + ";";
colortarget1.style = "background: #" + color + ";";

})



// SHOP // // SHOP // // SHOP // // SHOP // // SHOP // // SHOP // // SHOP // 

let shopbutton = document.querySelector('#shopbutton')
let shopgui = document.querySelector('.shop-container')
let usershopinterface = document.querySelector('.shop-container-hidden')
let buttoncloseshop = document.querySelector('#closebuttonshop')
let contentshop = document.querySelector('.shop-content-hidden')

shopbutton.addEventListener('click', () => {
    console.log('hej, to shopbutton ' + shopbutton) 
    console.log('shop gui analised ' + shopgui)
    
    usershopinterface.classList.toggle("shop-container-shown"); //classlist toggle
    // contentshop.className = ".shop-content-shown"; // not working
    contentshop.style = "display: block;"
    
    document.querySelector('.shop-container-product').style = "display: block;"
    document.querySelector('.shop-img-product').style = "display: block;"
    document.querySelector('.shop-button-buy').style = "display: block;"
    document.querySelector('.shop-desc-product').style = "display: block;"
    document.querySelector('.grid-shop-elements').style = "display: flex;"
});


buttoncloseshop.addEventListener('click', () =>{
    usershopinterface.className = ".shop-container-hidden";
    // contentshop.className = ".shop-content-hidden"; // not working
    contentshop.style = "display: hidden;"

    document.querySelector('.shop-container-product').style = "display: none;"
    document.querySelector('.shop-img-product').style = "display: none;"
    document.querySelector('.shop-button-buy').style = "display: none;"
    document.querySelector('.shop-desc-product').style = "display: none;"
    document.querySelector('.grid-shop-elements').style = "display: none;"

    document.getElementById('money').innerHTML = userTapCoin;
});

function clearContainer() {
    document.querySelector('.shop-container-product').style = "display: none;"
    document.querySelector('.shop-img-product').style = "display: none;"
    document.querySelector('.shop-button-buy').style = "display: none;"
    document.querySelector('.shop-desc-product').style = "display: none;"
    document.querySelector('.grid-shop-elements').style = "display: none;"
}




//##############################################################//
//                       BY SALLCIQ                             //
//##############################################################//