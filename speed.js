// Challenge 2: Speed Detector (Toy Problem)
// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

// SOLUTION

//NOTE: TO BE ABLE TO TEST THIS CODE PLEASE COPY AND PASTE IT TO YOUR CHROME BROWSER DEVELOPER TOOLS CONSOLE FOR IT TO RUN PROPERLY AND DISPLAY OUTPUT

// This line prompts the user to enter the speed of a car and takes two values a string and a default value to display on input field using prompt()
let userInput = Number(prompt("Enter the speed of the car:", 0));

// This function is used to calculate the demerit points based on the provided speed input at prompt()
function speedChecker(userInput) {
    const speedLimit = 70; //fixed value does not change
    const demeritPointsPerKm = 5; //fixed value does not change

    if (userInput <= speedLimit) {
        console.log("Ok");
    } 
    else {
        // Calculate the demerit points if speed is above 70
        // For example (demeritPoints => (80-70)/5 = 2
        // Here Math.floor is used to round down the demeritPoints value to a whole number for easy evaluation
        const demeritPoints = Math.floor((userInput - speedLimit) / demeritPointsPerKm);
        
        // Print the demerit points or suspension message
        if (demeritPoints > 12) {
            console.log("License suspended");
        } 
        else {
            console.log(`The driver has ${demeritPoints} demerit points let them of with a warning this time!`);
        }
    }
}
// Check the speed and calculate points
speedChecker(userInput);
