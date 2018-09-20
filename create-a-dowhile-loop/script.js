var secret = prompt("What is the secret password?");
while ( secret !== "sesame" ) {
  secret = prompt("What is the secret password?");    
}
document.write("You know the secret password. Welcome.");