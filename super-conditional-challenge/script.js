var money = 9;
var today = 'Friday'

if ( money >= 100 && today === 'Friday' ) {
  alert("Time to go to the theater");    
} else if ( money >= 50 && today === 'Friday' ) {
  alert("Time for a movie and dinner");    
} else if ( money > 10 && today === 'Friday' ) {
  alert("Time for a movie");   
} else if ( today !== 'Friday' ) {
    alert("This isn't Friday. I need to stay home.");
} else {
    alert("It's Friday, but I don't have enough money to go out");   
}