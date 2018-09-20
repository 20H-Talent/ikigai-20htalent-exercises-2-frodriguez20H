var secret = prompt("What is the secret password?");
do {secret = prompt("What is the secret password?");    
} while ( secret !== "sesame" );
document.write("You know the secret password. Welcome.");