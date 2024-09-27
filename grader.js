// Challenge 1: Student Grade Generator (Toy Problem)
// Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

// SOLUTION

//NOTE: TO BE ABLE TO TEST THIS CODE PLEASE COPY AND PASTE IT TO YOUR CHROME BROWSER DEVELOPER TOOLS CONSOLE FOR IT TO RUN PROPERLY AND DISPLAY OUTPUT

// IT WILL RUN WITHIN YOUR LINUX OR VS CODE TERMINAL HOWEVER NO OUTPUT WILL BE SEEN DUE TO THE PROMPT() REQUIRED THAT ONLY WORKS IN A BROWSER WINDOW

// This line prompts the user for input from the browser using prompt() method which takes in two arguments i.e the string "Enter the student's marks whose value should be between 0 and 100:" explaining what to do and a default value of 0.
let marks = prompt("Enter the student's marks whose value should be between 0 and 100:", 0);

// This line convert the users input into a number however after several tests determined that it is not required for the code to work as behavior is similar with or without the line.
marks = Number(marks);

// This is the main function to generate a grade based on the marks entered by user on prompt() request
function grade(marks) {
    if (marks > 100 || marks < 0) {
        return "Invalid marks. Please enter a number between 0 and 100.";
    } 
    else if (marks > 79) {
        return "Grade: A";
    } 
    else if (marks >= 60) {
        return "Grade: B";
    } 
    else if (marks >= 49) {
        return "Grade: C";
    } 
    else if (marks >= 40) {
        return "Grade: D";
    } 
    else {
        return "Grade: E";
    }
}

// This line will display the grade on the chrome browser developer tools console
console.log(grade(marks));
