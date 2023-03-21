var temp = prompt("Enter temp today:");
temp > 0 && temp <= 30 ? document.write("cold") : document.write("hot");


if (isNaN(temp)) {
    alert("Please enter a valid number.");
}else{};