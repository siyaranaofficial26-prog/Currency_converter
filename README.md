## Currency Converter

A simple and clean currency converter that gives you real-time exchange rates
right in your browser using HTML, CSS, and JavaScript.

##  Functioning

- Enter any amount and instantly see the converted value
- Choose from a wide range of world currencies
- Country flags update automatically based on your selection
- Swap between "From" and "To" currencies with one click

## Built with

- HTML, CSS, JavaScript 
- [fxAPI](https://fxapi.app/api/USD/INR.json) — for real-time exchange rates, you can 'from' country and 'to' country using the currency codes of these countries
- [FlagsAPI](https://flagsapi.com/IN/flat/64.png) — for country flag icons based on country codes



##  Live Demo

[Try it here](https://siyaranaofficial26-prog.github.io/Currency_converter/)



##  How it works

When you hit Convert, the app calls the fxAPI with your selected currencies
and displays the result. The flag updates automatically using the currency
code mapped to its country — fetched from FlagsAPI on the fly.
