
// let count = 0;
// function cakeMilega(){
//   console.log("Cake " + ++count);
// }

// function myDebounceFunction(cakeFunc, delay){
//   let timer;
//   return function(){
//     // if(timer) clearTimeout(timer)
//     timer = setTimeout(()=>{
//       cakeFunc();
//     }, delay)
//   }
// }


// let betterFuntion = myDebounceFunction(cakeMilega, 500);













// {
//   "imports": {
//     "@google/generative-ai": "https://esm.run/@google/generative-ai"
//   }
// }


// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Tax Calculation
// document.getElementById("tax-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const income = parseFloat(document.getElementById("income").value);
//   const regime = document.getElementById("regime").value;

//   let tax;

//   if (regime === "old") {
//     tax = calculateOldRegimeTax(income);
//   } else if (regime === "new") {
//     tax = calculateNewRegimeTax(income);
//   }

//   if (isNaN(tax)) {
//     document.getElementById("result").innerText = "Please enter a valid income.";
//   } else {
//     document.getElementById("result").innerText =
//       `Under the ${regime === "old" ? "Old" : "New"} Tax Regime, your tax is ₹${tax.toFixed(2)}. ` +
//       `Want to save on taxes? Consult our AI Financial Advisor below!`;
//   }
// });

// // Old Tax Regime Calculation
// function calculateOldRegimeTax(income) {
//   const slabs = [
//     { limit: 250000, rate: 0 },
//     { limit: 500000, rate: 0.05 },
//     { limit: 1000000, rate: 0.2 },
//     { limit: Infinity, rate: 0.3 }
//   ];

//   return calculateTaxBySlabs(income, slabs);
// }

// // New Tax Regime Calculation
// function calculateNewRegimeTax(income) {
//   const slabs = [
//     { limit: 250000, rate: 0 },
//     { limit: 500000, rate: 0.05 },
//     { limit: 750000, rate: 0.1 },
//     { limit: 1000000, rate: 0.15 },
//     { limit: 1250000, rate: 0.2 },
//     { limit: 1500000, rate: 0.25 },
//     { limit: Infinity, rate: 0.3 }
//   ];

//   return calculateTaxBySlabs(income, slabs);
// }

// // Helper Function for Tax Calculation
// function calculateTaxBySlabs(income, slabs) {
//   let tax = 0;
//   let previousLimit = 0;

//   for (const slab of slabs) {
//     if (income > slab.limit) {
//       tax += (slab.limit - previousLimit) * slab.rate;
//       previousLimit = slab.limit;
//     } else {
//       tax += (income - previousLimit) * slab.rate;
//       break;
//     }
//   }

//   return tax;
// }

// // const API_KEY = "AIzaSyCYwzySCguntMKy1nYcEqCHRBEc8dnrUL4";

// document.getElementById("get-advice").addEventListener("click", async function () {
//   const prompt = `Provide detailed tax-saving investment strategies for an individual in India based on their ${income}. Include options under both the old and new tax regimes, considering popular investment avenues like Section 80C deductions, NPS contributions, health insurance premiums, and tax-saving fixed deposits. Suggest strategies tailored to different income levels, emphasizing maximizing savings while aligning with financial goals.`;
  
//   const genAI = new GoogleGenerativeAI(API_KEY);
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//         // const prompt = "Why is ChatGpt better than you ?";

//         const result = await model.generateContent(prompt);
//         // let ans = result.response.text();
//         document.getElementById("advice").innerText = result.response.text();

//         console.log(result.response.text());
// });
