// lab1.js

function reverseString(str) {
    // the return statement is correct.
    return str.split("").reverse().join("");
}

function listSkills() {
    // 1 Error: missing the closeing ] to create an array let skills = ['Web Development', 'Gardening', 'Drumming', 'Volunteering'; I added a ]
    let skills = ['Web Development', 'Gardening', 'Drumming', 'Volunteering'];
    let output = "<h2>Bruce's Skills<h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted() {
    //3 Errors: missing = assignment opperator and semi-colon in (let firstName  'Bruce') I added = and the ; Missing semi-colon in let collegeName = 'Clark College' I added a ;
    let firstName = 'Bruce';
    let lastName = 'Elgort';
    let collegeName = 'Clark College';
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    // 3 Errors: missing $. ${lastName} ${city} ${gpa}. I added $ to each
    // I added a period to the end of the sentance, not sure that's an error you were looking for. 
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}.`;
    // 1 Error: unmatching quotation marks '</p>" I replaced the ' with "
    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function () {
    getStarted();
    listSkills();
}