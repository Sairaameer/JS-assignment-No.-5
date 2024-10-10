/* Q1. Show an alert box on click on a link.*/ 
// { <a href="#" id="myLink">Click me</a> */}
document.getElementById("myLink").onclick = function() {
    alert("You clicked the link!");
};

/* Q2. Display some Mobile images in browser. On click on an
image Show the message in alert to user.*/ 
// Function to show alert when an image is clicked

function showAlert(phoneName) {
      alert(phoneName);
 }
showAlert()


/* Q3. Display 10 student records in table and each row should contain a delete
button. If you click on a button to delete a record, entire row should be
deleted.*/

function deleteRow(button) {
    // Get the row of the button clicked
    var row = button.parentNode.parentNode;
    // Remove the row from the table
    row.parentNode.removeChild(row);
}

// /* Q4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.*/ 


// THE CODE OF Q4 IS IN HTML....


// Q5.Show a counter in browser. Counter should increase on click on increase
//button and decrease on click on decrease button. And show updated counter
//value in browser.

 var count = 0;

var counterElement = document.getElementById('counter');
var increaseButton = document.getElementById('increaseBtn');
var decreaseButton = document.getElementById('decreaseBtn');

 // Function to update the counter display
    function updateCounter() {
        counterElement.textContent = count;
    }

// Increase count
    increaseButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

// Decrease count
    decreaseButton.addEventListener('click', () => {
        count--;
        updateCounter();
    });