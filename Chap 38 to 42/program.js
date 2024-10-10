/* Q1. Write a custom function power ( a, b ), to calculate the value of
a raised to b. */

function power(a, b) {
    return a ** b;
}

// Example usage:
var result = power(2, 3); // 2 raised to the power of 3 (2^3) = 8
console.log(result);

/* Q2. Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not.
Leap years ..., 2012, 2016, 2020, … */

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // Not a leap year
        
    }
}

// Example usage:

var year = prompt("Enter year");
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

/* Q3. If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions  */

// Function to calculate the semi-perimeter (S)
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
    
}

// Function to calculate the area of the triangle using Heron's formula
function calculateArea(a, b, c) {
    var S = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

// Example usage:
var a = 5, b = 6, c = 7;
var area = calculateArea(a, b, c);
console.log("Area of the triangle: " + area);

/* Q4.Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction.  */

// Function to calculate the average of 3 subjects
function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

// Function to calculate the percentage
function calculatePercentage(totalMarks, maxMarksPerSubject) {
    return (totalMarks / (maxMarksPerSubject * 3)) * 100;
}

// Main function to call average and percentage functions
function mainFunction(mark1, mark2, mark3, maxMarksPerSubject) {
    var average = calculateAverage(mark1, mark2, mark3);
    var totalMarks = mark1 + mark2 + mark3;
    var percentage = calculatePercentage(totalMarks, maxMarksPerSubject);
    
    console.log("Average Marks: " + average.toFixed(2)); // Display average
    console.log("Percentage: " + percentage.toFixed(2) + "%"); // Display percentage
}

// Example usage:
var mark1 = 85, mark2 = 90, mark3 = 78; // Student marks in 3 subjects
var maxMarksPerSubject = 100; // Maximum marks per subject
mainFunction(mark1, mark2, mark3, maxMarksPerSubject);

/* Q5. You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now.*/

function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i; // Return the index if character is found
      }
    }
    return -1; // Return -1 if character is not found
  }
  
  // Example usage:
  var result = customIndexOf("hello", "e");
  console.log(result); // Output: 1
  

/* Q6. Write a function to 
delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long.*/

function removeVowels(sentence) {
    var result = ""; // Variable to store the result without vowels
    var vowels = "aeiouAEIOU"; // String containing all vowels (both lowercase and uppercase)
  
    for (var i = 0; i < sentence.length; i++) {
      if (vowels.indexOf(sentence[i]) === -1) { // If character is not a vowel
        result += sentence[i]; // Add non-vowel characters to result
      }
    }
  
    return result;
  }
  
  // Example usage:
  var sentence = "Hello, World!";
  var result = removeVowels(sentence);
  console.log(result); // Output: "Hll, Wrld!"
  
/* Q7. Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence
FUNCTIONS, switch statements, while… do-while loops | JAVASCRIPT
Page 2 of 2
“Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui.
// */

function countSuccessiveVowels(text) {
    var count = 0;
    var vowels = "aeiouAEIOU"; // String of vowels (lowercase and uppercase)
  
    for (let i = 0; i < text.length - 1; i++) {
      var firstChar = text[i];
      var secondChar = text[i + 1];
  
      // Check if both consecutive characters are vowels
      switch (true) {
        case vowels.indexOf(firstChar) !== -1 && vowels.indexOf(secondChar) !== -1:
          count++; // Increment the count if two successive vowels are found
          break;
      }
    }
  
    return count;
  }
  
  // Example usage:
  var sentence = "Pleases read this application and give me gratuity";
  var result = countSuccessiveVowels(sentence);
  console.log(result); // Output: 3 (ea, ea, ui)
  
/* Q8. The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters.*/

var distanceInKm = prompt("Enter the distance between two cities in kilometers:");

// Convert distance to meters
function convertToMeters(km) {
    var meters = km * 1000;
    console.log(`${km} km is equal to ${meters} meters`);
}

// Convert distance to feet
function convertToFeet(km) {
    var feet = km * 3280.84;
    console.log(`${km} km is equal to ${feet} feet`);
}

// Convert distance to inches
function convertToInches(km) {
    var inches = km * 39370.1;
    console.log(`${km} km is equal to ${inches} inches`);
}

// Convert distance to centimeters
function convertToCentimeters(km) {
    var centimeters = km * 100000;
    console.log(`${km} km is equal to ${centimeters} centimeters`);
}

// Calling the functions
convertToMeters(distanceInKm);
convertToFeet(distanceInKm);
convertToInches(distanceInKm);
convertToCentimeters(distanceInKm);

/* Q9. Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour.*/

var hoursWorked = prompt("Enter the total number of hours worked:");

// Function to calculate overtime pay
function calculateOvertimePay(hours) {
    var overtimeRate = 12.00;
    var regularHours = 40;
    var overtimeHours = hours - regularHours;
    var overtimePay = 0;

    if (overtimeHours > 0) {
        overtimePay = overtimeHours * overtimeRate;
        console.log(`You worked ${overtimeHours} overtime hours.`);
        console.log(`Your overtime pay is Rs. ${overtimePay}`);
    } else {
        console.log("You have no overtime hours.");
    }
}

// Calling the function
calculateOvertimePay(parseInt(hoursWorked));

/* Q10. A cashier has currency notes of denominations 10, 50 and
100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes
of each denomination the cashier will have to give to the
withdrawer.*/

var amount = prompt("Enter the amount to withdraw (in multiples of 100):");

function calculateNotes(amount) {
    // Ensure the amount is a valid multiple of 100
    if (amount % 100 !== 0) {
        console.log("Please enter an amount in multiples of 100.");
        return;
    }

    var hundreds = Math.floor(amount / 100); // Number of 100 Rs notes
    amount = amount % 100;

    var fifties = Math.floor(amount / 50);  // Number of 50 Rs notes
    amount = amount % 50;

    var tens = Math.floor(amount / 10);     // Number of 10 Rs notes

    console.log(`The cashier will give:`);
    console.log(`${hundreds} notes of Rs 100`);
    console.log(`${fifties} notes of Rs 50`);
    console.log(`${tens} notes of Rs 10`);
}

// Calling the function
calculateNotes(parseInt(amount));