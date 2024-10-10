/* Q1. Create a signup form and display form data in your web
page on submission.*/ 

var form = document.getElementById('signupForm');
var formDataDiv = document.getElementById('formData');

form.onsubmit = function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Display form data on the webpage
    formDataDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
}

/* Q2. Suppose in your webpage there is content area in which
you have entered your item details, but user can only see
some details on first look. When user clicks on “Read
more” button, full detail of that particular item will be
displayed. */ 

var readMoreBtn = document.getElementById('readMoreBtn');
var dots = document.getElementById('dots');
var moreContent = document.getElementById('moreContent');

readMoreBtn.onclick = function() {
    if (moreContent.style.display === "none") {
        moreContent.style.display = "inline";  // Show the full content
        dots.style.display = "none";           // Hide the dots
        readMoreBtn.textContent = "Read less"; // Change button text
    } else {
        moreContent.style.display = "none";    // Hide the extra content
        dots.style.display = "inline";         // Show the dots
        readMoreBtn.textContent = "Read more"; // Change button text back
    }
}

/* Q3. In previous assignment you have created a tabular data
using javascript. Let’s modify that. Create a form which
takes student’s details and show each student detail in
table. Each row of table must contain a delete button and
an edit button. On click on delete button entire row should
be deleted. On click on edit button, a hidden form will
appear with the values of that row.*/ 

var studentForm = document.getElementById('studentForm');
var studentTable = document.getElementById('studentTable');
var editForm = document.getElementById('editForm');
var currentRow = null;

studentForm.onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var grade = document.getElementById('grade').value;

    // Create a new row and add it to the table
    var newRow = studentTable.insertRow();
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = age;
    newRow.insertCell(2).textContent = grade;

    // Add Edit and Delete buttons
    var actionsCell = newRow.insertCell(3);
    actionsCell.innerHTML = '<button class="editBtn">Edit</button> <button class="deleteBtn">Delete</button>';

    // Clear the form after submission
    // studentForm.reset()"??":"??"

    // Attach event listeners for edit and delete buttons
    actionsCell.querySelector('.deleteBtn').onclick = function() {
        studentTable.deleteRow(newRow.rowIndex); // Delete the row
    };

    actionsCell.querySelector('.editBtn').onclick = function() {
        // Fill the edit form with the row's current values
        currentRow = newRow;
        document.getElementById('editName').value = currentRow.cells[0].textContent;
        document.getElementById('editAge').value = currentRow.cells[1].textContent;
        document.getElementById('editGrade').value = currentRow.cells[2].textContent;
        
        editForm.style.display = 'block'; // Show the edit form
    };
};

document.getElementById('saveChanges').onclick = function() {
    if (currentRow) {
        // Update the current row with the new values
        currentRow.cells[0].textContent = document.getElementById('editName').value;
        currentRow.cells[1].textContent = document.getElementById('editAge').value;
        currentRow.cells[2].textContent = document.getElementById('editGrade').value;

        editForm.style.display = 'none'; // Hide the edit form
        editForm.reset(); // Clear the edit form
    }
};


