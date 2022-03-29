// mining script

let userDROPCHANCE = 3;
let userTapCoin = 0;
let dropPERMINE = 1;
let consoleOUTPUT = document.getElementById('userconsole');
let logarg = "";
let CLICKS = 0;
const mainbutton = document.querySelector('#clicker');

mainbutton.addEventListener('click', () => 
{
    CLICKS = CLICKS + 1;
    let processMINING = Math.random() * 100;
    document.querySelector('#PROCESSNUMBER').innerHTML = "Rolled number: " + processMINING;
    document.querySelector('#TOTALCLICKS').innerHTML = "Clicks: " + CLICKS;

    console.log("rolled: " + processMINING);
    console.log("chance: " + userDROPCHANCE);

    if(processMINING <= userDROPCHANCE){
        userTapCoin = userTapCoin + dropPERMINE;
        document.getElementById('money').innerHTML = userTapCoin;
        document.getElementById('moneyshopcount').innerHTML = userTapCoin
        console.log("user mined " + dropPERMINE + " TapCoin!");
        

        // CONSOLE

        const newlog = document.createElement('div'); // newlog definied
        newlog.className = 'newlog-userconsole'; //class for div element

        document.getElementById('logcontainer').appendChild(newlog); //userconsole receiving newlog element
        newlog.innerHTML = //newlog element data
        "<li> > User received " + dropPERMINE + " TapCoin$</li>";
        
        document.querySelector('#DROPPERMINE').innerHTML = "Drop per mine: " + dropPERMINE;
        document.querySelector('#USERDROPCHANCE').innerHTML = "Chance: " + userDROPCHANCE;
        document.querySelector('#BALANCE').innerHTML = "Balance: " + userTapCoin;

    } 
});


// SHOP SHOP SHOP SHOP


let costUPGRADEperclick = 10;

document.querySelector('#upgradeperclick').addEventListener('click', () => {
    if(userTapCoin >= costUPGRADEperclick)
        {
            userTapCoin = userTapCoin - costUPGRADEperclick;

            document.querySelector('#BALANCE').innerHTML = "Balance: " + userTapCoin;
            document.getElementById('moneyshopcount').innerHTML = userTapCoin;
            document.getElementById('money').innerHTML = userTapCoin;
            dropPERMINE = dropPERMINE + 1;
            document.querySelector('#earningshopinfo').innerHTML = dropPERMINE;

            if (costUPGRADEperclick >= 10) {
                costUPGRADEperclick = costUPGRADEperclick + 100
             }
             else if(costUPGRADEperclick >= 2000){
                costUPGRADEperclick = costUPGRADEperclick + 1000
             };
            

            document.querySelector('#costupgradeperclick').innerHTML = costUPGRADEperclick;
        }

    else
        {
            stop
            console.log("No funds!")
        }
})

let costUPGRADEpercentage = 5;

document.querySelector('#upgradepercentage').addEventListener('click', () => {
    if(userTapCoin >= costUPGRADEpercentage)
        {
            userTapCoin = userTapCoin - costUPGRADEpercentage;

            document.querySelector('#BALANCE').innerHTML = "Balance: " + userTapCoin;
            document.getElementById('moneyshopcount').innerHTML = userTapCoin;
            document.getElementById('money').innerHTML = userTapCoin;
            userDROPCHANCE = userDROPCHANCE + 1;
            document.querySelector('#percentageshopinfo').innerHTML = userDROPCHANCE;

            if (costUPGRADEpercentage >= 5) {
                costUPGRADEpercentage = costUPGRADEpercentage + 100
             }
             else if(costUPGRADEpercentage >= 2000){
                costUPGRADEpercentage = costUPGRADEpercentage + 1000
             };
            

            document.querySelector('#costupgradepercentage').innerHTML = costUPGRADEpercentage;
        }

    else
        {
            console.log("No funds!");
        }
})

//##############################################################//
//                       BY SALLCIQ                             //
//##############################################################//