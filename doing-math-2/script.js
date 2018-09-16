var wholesalePrice = 5.45;
var retailPrice = 9.99;
var quantity = 47;

var salesTotal = retailPrice * quantity;
var profit = salesTotal - (wholesalePrice * quantity);
var profitPerUnit = profit / quantity;

console.log("Sales Total: " + salesTotal);
console.log("Profit = " + profit);
console.log("Profit per unit = " + profitPerUnit);