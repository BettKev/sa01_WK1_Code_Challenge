// Challenge 3: Net Salary Calculator (Toy Problem)
// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
// NB: Use KRA, NHIF, and NSSF values provided in the link below.

// https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

// https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

// SOLUTION

//NOTE: TO BE ABLE TO TEST THIS CODE PLEASE COPY AND PASTE IT TO YOUR CHROME BROWSER DEVELOPER TOOLS CONSOLE FOR IT TO RUN PROPERLY AND DISPLAY OUTPUT

//netPay=grossPay-totalDeductions
//grossPay=basicPay+benefits
//totalDeductions=NHIF+NSSF+PAYE

//This prompts the user to enter a value for basic salary and benefits using prompt() method on the browser window taking a string and a default value of 0
let basicPay = Number(prompt(`Enter your basic pay`, 0));
let benefits = Number(prompt(`Enter your benefits`, 0));

//Variable to hold grossPay
const grossPay = basicPay + benefits;

//This section is calculating deductions one by one starting with NHIF, NSSF, PAYE

// Calculating NHIF payments
let nhifPayments = 0;
if (grossPay <= 5999){
    nhifPayments = 150;
}
else if(grossPay <= 7999){
    nhifPayments = 300;
}
else if(grossPay <= 11999){
    nhifPayments = 400;
}
else if(grossPay <= 14999){
    nhifPayments = 500;
}
else if(grossPay <= 19999){
    nhifPayments = 600;
}
else if(grossPay <= 24999){
    nhifPayments = 750;
}
else if(grossPay <= 29999){
    nhifPayments = 850;
}
else if(grossPay <= 34999){
    nhifPayments = 900;
}
else if(grossPay <= 39999){
    nhifPayments = 950;
}
else if(grossPay <= 44999){
    nhifPayments = 1000;
}
else if(grossPay <= 49999){
    nhifPayments = 1100;
}
else if(grossPay <= 59999){
    nhifPayments = 1200;
}
else if(grossPay <= 69999){
    nhifPayments = 1300;
}
else if(grossPay <= 79999){
    nhifPayments = 1400;
}
else if(grossPay <= 89999){
    nhifPayments = 1500;
}
else if(grossPay <= 99999){
    nhifPayments = 1600;
}
else {
    nhifPayments = 1700;
}

// Calculating NSSF payments
let nssfPayments = 0;
const tierOne = 7000;
const tierTwo = 36000;
if (grossPay <= tierOne){
    nssfPayments = grossPay*(6/100);
}
else if (grossPay <= tierTwo || grossPay >= tierTwo){
    nssfPayments = tierTwo*(6/100);
}

// Calculating PAYE payments
let payePayments = 0;
let taxableIncome = grossPay-(nhifPayments+nssfPayments)
if (taxableIncome <= 288000 ){
    payePayments = taxableIncome*(10/100);
}
else if(taxableIncome <= 388000){
    payePayments = taxableIncome*(25/100);
}
else if(taxableIncome <= 6000000){
    payePayments = taxableIncome*(30/100);
}
else if(taxableIncome <= 9600000){
    payePayments = taxableIncome*(32.5/100);
}
else if(taxableIncome > 9600000){
    payePayments = taxableIncome*(35/100);
}

// Calculating Total Deductions
let totalDeductions = nhifPayments+nssfPayments+payePayments;

// Calculating netPay
const netPay = taxableIncome;


console.log(`Your gross salary is: ` + grossPay);
console.log(`Your NHIF payment is: ` + nhifPayments);
console.log(`Your NSSF payment is: ` + nssfPayments);
console.log(`Your PAYE payment is: ` + payePayments);
console.log(`Your Total Deductions are: ` + totalDeductions);
console.log(`Your Net Pay is: ` + netPay);