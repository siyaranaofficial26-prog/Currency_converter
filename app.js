const BASE_URL= "https://fxapi.app/api";


const button= document.querySelector("form button"); // Get the button element from the form

const fromCurrency=document.querySelector(".from select"); // Get the select element for the "from" currency
const toCurrency=document.querySelector(".to select"); // Get the select element for the "to" currency
const msg= document.querySelector(".msg"); // Get the element to display messages
const dropdowns = document.querySelectorAll(".dropdown select"); // Get all select elements
const btn= document.querySelector("button"); // Get the button element
const updateExchangeRate = async () => { 
let amount= document.querySelector(".amount input");
    let amtVal= amount.value;
    if (amtVal == " " || amtVal <0){
        amtVal=1;
        amount.value= "1";
    }
   // console.log(fromCurrency.value,toCurrency.value);
   const URL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;

   let response= await fetch(URL);
   let data = await response.json();
let rate = data.rate;
console.log(rate);
 let finalAmt= rate * amtVal;
msg.innerText= `${amtVal} ${fromCurrency.value} = ${finalAmt} ${toCurrency.value}`;
}

for(let select of dropdowns){ // dropdowns is a nodelist of select tags
    for(let currency_code in countryList){ // countryList is an object with currency codes as keys and country codes as values
        let option = document.createElement("option");
        option.value = currency_code;  // Set the value of the option to the currency code
        option.innerText = currency_code; // Set the text of the option to the currency code
        
        if(select.name == "from" && currency_code == "USD"){
            option.selected = true; // Set USD as the default selected option for the "from" select element
        }   
        if(select.name == "to" && currency_code == "INR"){
            option.selected = true; // Set INR as the default selected option for the "to" select element
        }
        select.append(option); // Append the option to the select element
        
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
    evt.preventDefault(); // Prevent the default form submission that takes place when the button is clicked
    updateExchangeRate(); // Call the function to update the exchange rate
})
window.addEventListener("load", ()=>{
    updateExchangeRate(); // Call the function to update the exchange rate when the page loads
});