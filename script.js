//your code here
let input = document.getElementById("input");
let numbers = document.querySelectorAll("#numbers button");
let operations = document.querySelectorAll("#operations button");
let ans = document.getElementById("ans");
let clr = document.getElementById("clr");
let dot = document.getElementById("dot");

// Add event listeners to all number buttons
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        input.value += this.innerHTML;
    });
}

// Add event listeners to all operation buttons
for(let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", function() {
        input.value += this.innerHTML;
    });
}

// Add event listener to "=" button
ans.addEventListener("click", function() {
    input.value = eval(input.value);
});

// Add event listener to "C" button
clr.addEventListener("click", function() {
    input.value = "";
});

// Add event listener to "." button
dot.addEventListener("click", function() {
    input.value += ".";
});
