//Business logic
//Input the PingPong function
function PingPong() {
for (var i = 1; i <= 100; i++) {
  if ( i % 15 === 0 ) {
    console.log(‘PingPong’);//if the number is divisible by 15, print out a range and include PingPong
  }
  else if ( i % 5 === 0 ) {
    console.log(‘Pong’);//if function is divisible by 5, print out a range and include Pong
  }
  else if ( i % 3 ===  0 ) {
    console.log(‘Ping’);
  }
  else {
    console.log(i);
  }
}

return replies;

event.preventDefault();




//UI Logic
$(document).ready(function){
  $("#replies-form").submit(function(event){
    event.preventDefault()
    $("#replies").append(<li>)
  })
}
