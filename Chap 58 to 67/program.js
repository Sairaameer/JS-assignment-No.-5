/* Q1. Consider you have following code snippet:
 (Copy it in your HTML file)
<div>
<h1> DOM </h1>
<div id=”form-content” class=”content”>
<label for=”first-name”>First Name</label>
<input type=”text” id=”first-name” />
<label for=”last-name”>Last Name</label>
<input type=”text” id=”last-name” />
<label for=”email”>Email</label>
<input type=”text” id=”email” />
</div>
<div id=”main-content” class=”content”>
<p class=”render”> First Name : Alex</p>
<p class=”render” id=”lastName”>Last Name: Bank</p>
<p class=”render”> Email : alexbank@example.com</p>
<p class=”render”> Country : Pakistan </p>
<p class=”render”> contact : +92 300 1234567</p>
</div>
</div>
i. Get element of id “main-content” and assign them in a variable.
ii. Display all child elements of “main-content” element.
iii. Get all elements of class “render” and show their innerHTML
in browser.
iv. Fill input value whose element id first-name using javascript.
v. Repeat part iv for id ”last-name” and “email”.*/

// i. Get element of id “main-content” and assign them in a variable.
var mainContent = document.getElementById('main-content');

// ii. Display all child elements of “main-content” element.
var childElements = mainContent.children;
for (var i = 0; i < childElements.length; i++) {
    console.log(childElements[i].outerHTML); // Log each child element
}

// iii. Get all elements of class “render” and show their innerHTML in browser.
var renderElements = document.getElementsByClassName('render');
for (var i = 0; i < renderElements.length; i++) {
    document.write(renderElements[i].innerHTML + '<br>'); // Display innerHTML in browser
}

// iv. Fill input value whose element id is "first-name" using JavaScript.
document.getElementById('first-name').value = 'John';

// v. Repeat part iv for id "last-name" and "email".
document.getElementById('last-name').value = 'Doe';
document.getElementById('email').value = 'john.doe@example.com';

/* Q2. use HTML code of question 1 and show the result on browser.
i. What is node type of element having id “form-content”.
ii. Show node type of element having id “lastName” and its child node.
iii. Update child node of element having id “lastName”.
iv. Get First and last child of id “main-content”.
v. Get next and previous siblings of id “lastName”.
vi. Get parent node and node type of element having id “email”
NOTE: You can remove JUNKS from this site.
https://www.willpeavy.com/minifier/.*/


// i. What is the node type of the element having id "form-content"?
const formContent = document.getElementById('form-content');
console.log("Node Type of 'form-content':", formContent.nodeType); // 1 = ELEMENT_NODE

// ii. Show the node type of the element having id "lastName" and its child node.
const lastNameElement = document.getElementById('lastName');
console.log("Node Type of 'lastName':", lastNameElement.nodeType); // 1 = ELEMENT_NODE
console.log("Child Nodes of 'lastName':", lastNameElement.childNodes); // Shows child nodes

// iii. Update child node of element having id "lastName".
lastNameElement.textContent = "Last Name: Smith"; // Updating text content

// iv. Get First and last child of id "main-content".
const mainContent = document.getElementById('main-content');
const firstChild = mainContent.firstChild; // Might return a text node (whitespace)
const lastChild = mainContent.lastChild; // Might return a text node (whitespace)
console.log("First Child of 'main-content':", firstChild);
console.log("Last Child of 'main-content':", lastChild);

// v. Get next and previous siblings of id "lastName".
const nextSibling = lastNameElement.nextElementSibling; // Next sibling element
const previousSibling = lastNameElement.previousElementSibling; // Previous sibling element
console.log("Next Sibling of 'lastName':", nextSibling);
console.log("Previous Sibling of 'lastName':", previousSibling);

// vi. Get parent node and node type of the element having id "email".
const emailElement = document.getElementById('email');
const parentNode = emailElement.parentNode;
console.log("Parent Node of 'email':", parentNode);
console.log("Node Type of Parent Node:", parentNode.nodeType); // 1 = ELEMENT_NODE

    