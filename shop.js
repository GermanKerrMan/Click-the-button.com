let clicks = 0;
let cash = 0;
let shopOpen = false;
let loop = false;
let doubleCashT = false;
let Shop = false;
let cashUpgradeStatus = 0;
let trippleCashT = false;
let doubleClicksT = false;
let conditionNo1 = false;
let more = "more";

document.querySelector(".num").textContent = parseFloat(localStorage.getItem('clicks')); 
document.querySelector(".cash").textContent = parseFloat(localStorage.getItem('cash'));

if(localStorage.getItem('dT') == "false") {
document.querySelector(".dTbtn").textContent = "Double Cash  - Cost : 500 clicks"
};

if(localStorage.getItem('dT') == "true")  {
    document.querySelector(".dTbtn").textContent = "Tripple Cash - Cost : 2000 clicks"
}

document.getElementById('Hello').addEventListener("click", _ => {
    localStorage.setItem('Shop', false)
});

document.addEventListener('DOMContentLoaded', (event) => {
    
    localStorage.setItem('Shop', true);
    doubleCashT =  localStorage.getItem('dT');
    doubleClicksT = localStorage.getItem('dCT');
    localStorage.setItem('dT', doubleCashT);
    console.log('DOM fully loaded and parsed');
    doubleCashT = localStorage.getItem('dT');
    cash = parseFloat(localStorage.getItem('cash'));
    clicks = parseFloat(localStorage.getItem('clicks'));

    if(localStorage.getItem('3xCash') == "true") {
        document.querySelector(".dTbtn").textContent = "4x Cash - Cost : 5000 clicks"
    };
});



// document.getElementById("doubleCash").addEventListener("click", _ => clicks >= 500 ? doubleCashUpgrade() : alert("You do not have enough clicks"));

function buyDoubleClicks() {
    if(localStorage.getItem('cash')>=500 && doubleClicksT == "false" && localStorage.getItem('dCT') =="false") {
        localStorage.setItem('cash', cash-=500);
        localStorage.setItem('dCT', true);      
        document.querySelector(".cash").textContent = localStorage.getItem('cash')
        doubleClicksT = true   
        return;
    }
};




function buyDoubleCash() {

if(localStorage.getItem('dT') == "false") {
    console.log("Condition 1 is true")
    if(localStorage.getItem('clicks')>=500) {
        console.log("Condition 2 is true")
        localStorage.setItem('clicks', clicks-=500)
        localStorage.setItem('dT', true)
        document.querySelector(".num").textContent = localStorage.getItem('clicks')
        doubleCashT = true;
        document.querySelector(".dTbtn").textContent = "Tripple Cash - Cost : 2000 clicks"
    }
    
        else if(localStorage.getItem('clicks')<500) {
            alert("You do not have enough clicks")
            }

    
}
   

        else if(localStorage.getItem('dT') == "true" && localStorage.getItem('clicks') >=2000 && localStorage.getItem('3xCash') == "false" && localStorage.getItem('4xCash') == "false") {
         console.log("You just bought tripple cash")   
         clicks =  localStorage.getItem('clicks')
         clicks -= 2000
         localStorage.setItem('clicks', clicks) 
         document.querySelector(".num").textContent = localStorage.getItem('clicks')
         document.querySelector(".dTbtn").textContent = "4x Cash - Cost : 5000 clicks"
         localStorage.setItem('3xCash', true)
        }

        else if(localStorage.getItem('clicks')<2000) {
        alert("You do not have enough clicks, you need " + parseFloat(2000 - localStorage.getItem('clicks') + " more"))
        }
    else if(localStorage.getItem('3xCash') == "true" && localStorage.getItem('clicks')>=5000) {
        console.log("You just bought 4xCash!!!!!!!!!!")
        clicks =  localStorage.getItem('clicks')
        clicks -= 5000
        localStorage.setItem('clicks', clicks) 
        document.querySelector(".num").textContent = localStorage.getItem('clicks')
        document.querySelector(".dTbtn").textContent = "5x Cash - Cost : 10000 clicks"
        localStorage.setItem('4xCash', true)
    }

    else if(localStorage.getItem('3xCash') == "true" && localStorage.getItem('clicks')<5000) {
    console.log("You do not have enough clicks to but 4x Cash :(")
}}

if(localStorage.getItem('3xCash') == "true") {
    document.querySelector(".dTbtn").textContent = "4x Cash - Cost : 5000 clicks"
}

function doubleCashUpgrade() {
    if (clicks>500 && doubleCashT == false) {
      localStorage.setItem('clicks', localStorage.getItem('clicks')-500)
      console.log("Buying double cash")
      doubleCashT = true;
      localStorage.setItem('dT', doubleCashT);
      cashUpgradeStatus
      return;
    }
  };


  