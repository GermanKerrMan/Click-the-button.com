// $('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
//     var $this = $(this),
//         label = $this.prev('label');
   
//      if (e.type === 'keyup') {
//    if ($this.val() === '') {
//             label.removeClass('active highlight');
//           } else {
//             label.addClass('active highlight');
//           }
//       } else if (e.type === 'blur') {
//        if( $this.val() === '' ) {
//        label.removeClass('active highlight'); 
//    } else {
//        label.removeClass('highlight');   
//    }   
//       } else if (e.type === 'focus') {
        
//         if( $this.val() === '' ) {
//        label.removeClass('highlight'); 
//    } 
//         else if( $this.val() !== '' ) {
//        label.addClass('highlight');
//    }
//       }
   
//   });

//   $('.tab a').on('click', function (e) {
    
//     e.preventDefault();
    
//     $(this).parent().addClass('active');
//     $(this).parent().siblings().removeClass('active');
    
//     target = $(this).attr('href');
   
//     $('.tab-content > div').not(target).hide();
    
//     $(target).fadeIn(600);
    
//   });

let clicks = 0;
let cash = 0;
let shopOpen = false;
let loop = false;
let doubleCashT = false;
let Shop = false;



const button = document.querySelector(".button");
const audio = document.querySelector("#audio");

document.addEventListener('DOMContentLoaded', (event) => {
  localStorage.setItem('dT', localStorage.getItem('dT'));
  console.log('DOM fully loaded and parsed');
  doubleCashT = localStorage.getItem('dT')
  cash = parseFloat(localStorage.getItem('cash'));
  clicks = parseFloat(localStorage.getItem('clicks'));
  document.querySelector(".cash").textContent = localStorage.getItem('cash');
  document.querySelector(".num").textContent = localStorage.getItem('clicks');
});



document.getElementById('shop').addEventListener("click", _ => {
  Shop = true;
  localStorage.setItem('Shop', Shop)
});


 
if(localStorage.getItem('dT') == "false" || doubleCashT == "false") {

button.addEventListener("click", _ => {
  document.querySelector(".num").textContent = parseFloat(clicks); 
  document.querySelector(".cash").textContent = parseFloat(cash);
  (".cash").textContent = cash;
  (".num").textContent = clicks;
  cashAdd();
  audio.play();
  localStorage.setItem('cash', cash - 5)
  localStorage.setItem('clicks', clicks - 1)
  parseFloat(cash) 
  localStorage.setItem('Shop', false);

})};
if(localStorage.getItem('dCT') == "false") {
  console.log("dCT is false")
button.addEventListener("click", _ => {
  document.querySelector(".num").textContent = parseFloat(clicks); 
  clicks++
  (".num").textContent = clicks;
  localStorage.setItem('clicks', clicks)
  


})};
 


if(localStorage.getItem('dT') == "true" || doubleCashT == "true") {
doubleCashAdd()

};

// if(localStorage.getItem('dCT') ==)

if(localStorage.getItem('3xCash') == "true") {
// trippleCashAdd()
};

function testClickAdd() {
if(localStorage.getItem('dCT') == "true" || localStorage.getItem('dCT') == "false") {
  clicksAdd();
}}



function doubleCashAdd() {
  if ( localStorage.getItem('3xCash') == "false") { 
button.addEventListener("click", _ => {
  console.log("Double cash is being added");
  document.querySelector(".num").textContent = parseFloat(clicks); 
  document.querySelector(".cash").textContent = cash;

  cash+=10;
  audio.play();
  localStorage.setItem('cash', cash - 10)
  localStorage.setItem('clicks', clicks - 1)
  parseFloat(cash) 
  localStorage.setItem('Shop', false);
  console.log(cash)
  return;
})}


else if (localStorage.getItem('3xCash') == "true") {
  button.addEventListener("click", _ => {
    document.querySelector(".num").textContent = parseFloat(clicks); 
  document.querySelector(".cash").textContent = cash;

  txQ4xCashAdd();
  audio.play();
  localStorage.setItem('cash', cash - 15)
  localStorage.setItem('clicks', clicks - 1)
  parseFloat(cash) 
  localStorage.setItem('Shop', false);
  // console.log(cash)
  return;
  }
  )}};

function txQ4xCashAdd() {
  if(localStorage.getItem('3xCash') == "true" && localStorage.getItem('4xCash') == "false") {
    cash+=15
  }

  else if(localStorage.getItem('4xCash') == "true") {
    cash+=20
  }
}

if (localStorage.getItem('dCT') == "true") {
  button.addEventListener("click", _ => {
  clicksAdd()
})}

  


function clicksAdd() {
  if(localStorage.getItem('dCT') == "false") {
    console.log("You have no click upgrades")
    clicks++;
    localStorage.setItem('clicks', clicks)
    document.querySelector(".num").textContent = parseFloat(localStorage.getItem('clicks'));
    return;

  }

  else {
    clicks+=2;
    localStorage.setItem('clicks', clicks)
    document.querySelector(".num").textContent = parseFloat(localStorage.getItem('clicks'));
    return;
  }
}




let hideShop = true;

if(hideShop == true) {
  document.querySelector('#shop-finished').style.display="none";
};








function cashAdd() {
  if(localStorage.getItem('dT') == "false") {
    parseFloat(cash);
  cash+=5;
  parseFloat(cash)
  return;
}}

// function returnToGame


// let btn = document.querySelector("#shop");
// let div = document.querySelector("#shop-finished")

// btn.addEventListener('click', () =>{
//  if(div.style.display === 'none') {
//    div.style.display = 'block';
//  } 
//  else {
//    div.style.display = 'none'
//  }
// });



// function openShop() {
//   if(shopOpen == false) {
//   shopeOpen = true; 
//   return "The shop has opened"
//   }
//   else {
//     shopOpen = false;
//     return "The shop has closed"
//   }
// }

// if (shopOpen == true) {
//   console.log("The shop is open")
//   document.getElementById(shop-finished).style.display="inline";
// }

// if (shopOpen == false) {
//   console.log("The shop is closed")
//   document.getElementById(shop-finished).style.display="none";
// }

function shop() {

}



