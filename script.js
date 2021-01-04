
let today = new Date();
let hour = today.getHours();
// change greetings according to your need
var g1 = 'Good Morning!';
var g2 = 'Hello!';
var g3 = 'Good Evening!';
var g4 = 'Good Night!';
// change conditions based on your preferences
if(hour>=6 && hour<12) {
    document.getElementById('greetings').innerText=g1;
}
else if (hour>=12 && hour<17) {
    document.getElementById('greetings').innerText=g3;
}
else if (hour>=17 && hour<23) {
    document.getElementById('greetings').innerText=g2;
}
else {
    document.getElementById('greetings').innerText=g4;
}