const BASE_URL= "https://fxapi.app/api";


const button= document.querySelector("form button"); 

const fromCurrency=document.querySelector(".from select"); 
const toCurrency=document.querySelector(".to select"); 
const msg= document.querySelector(".msg"); 
const dropdowns = document.querySelectorAll(".dropdown select");
const btn= document.querySelector("button");
const updateExchangeRate = async () => { 
let amount= document.querySelector(".amount input");
    let amtVal= amount.value;
    if (amtVal == " " || amtVal <0){
        amtVal=1;
        amount.value= "1";
    }
  
   const URL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;

   let response= await fetch(URL);
   let data = await response.json();
let rate = data.rate;
console.log(rate);
 let finalAmt= rate * amtVal;
msg.innerText= `${amtVal} ${fromCurrency.value} = ${finalAmt} ${toCurrency.value}`;
}

for(let select of dropdowns){ 
    for(let currency_code in countryList){ 
        let option = document.createElement("option");
        option.value = currency_code; 
        option.innerText = currency_code; 
        if(select.name == "from" && currency_code == "USD"){
            option.selected = true; 
        }   
        if(select.name == "to" && currency_code == "INR"){
            option.selected = true; 
        }
        select.append(option);
        
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target); 
    })
}

const updateFlag= (element) =>{
    let currCode = element.value;
    let countryCode= countryList[currCode];
    let newsrc= `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img= element.parentElement.querySelector("img"); 
    img.src=newsrc;
}

btn.addEventListener("click", (evt)=>{
    evt.preventDefault(); 
    updateExchangeRate(); 
})
window.addEventListener("load", ()=>{
    updateExchangeRate(); 
});
