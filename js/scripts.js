//Business logic
// Input the PingPong function
function PingPong() {
for (var i = 1; i <= 100; i++) {
  if ( i % 15 === 0 ) {
    return(‘PingPong’);//if the number is divisible by 15, print out a range and include PingPong
  }
  else if ( i % 5 === 0 ) {
    return(‘Pong’);//if function is divisible by 5, print out a range and include Pong
  }
  else if ( i % 3 ===  0 ) {
    return(‘Ping’);//if function is divisible by 3, print out a range and include Ping
  }
  else {
    return(i);
  }
}
}


event.preventDefault();




//UI Logic
$(document).ready(function){
  $("#replies-form").submit(function(event){
    event.preventDefault()
    $("#replies").append(<li>)
  })
}
