// Import jQuery
import $ from 'jquery';

// Function to add elements to the page body
function addElements() {
    // Add paragraph elements
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');

    // Add button element
    $('body').append('<button id="startBtn">Click here to get started</button>');

    // Add paragraph element with id 'count'
    $('body').append('<p id="count"></p>');

    // Add another paragraph element
    $('body').append('<p>Copyright - Holberton School</p>');
}

// Call the function to add elements when the DOM is ready
$(document).ready(function() {
    addElements();
});
