var secret = prompt("What is the secret password?");

while (secret !== "sesame") {
  secret = prompt("That's not it! Try again");
}

document.write("You know the secret password. Welcome.");