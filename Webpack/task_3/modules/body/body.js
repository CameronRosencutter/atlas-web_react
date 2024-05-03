import $ from 'jquery';
import debounce from 'lodash/debounce';


function addElements() {
    // Add button element
    $('body').append('<button id="startBtn">Click here to get started</button>');

    // Add paragraph element with id 'count'
    $('body').append('<p id="count"></p>');
}

// Function to update the counter and display the count
function updateCounter() {
    // Initialize count
    let count = 0;

    // Return a function to update counter and display count
    return function() {
        // Increment count
        count++;

        // Display count in paragraph element with id 'count'
        $('#count').text(`${count} clicks on the button`);
    };
}

// Call the function to add elements when the DOM is ready
$(document).ready(function() {
    // Add elements to the page
    addElements();

    // Initialize updateCounter function
    const updateCounterFunc = updateCounter();

    // Bind debounce function to click event on the button
    $('#startBtn').on('click', debounce(updateCounterFunc, 500));
});