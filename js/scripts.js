//Business logic
// Input the PingPong function
function pIngPong() {
  var output;
  for (var i = 1; i <= 100; i++) {
          output = '';
          if ( i % 15 === 0 ) {
            $('').append("<li>‘PingPong’</li>")//if the number is divisible by 15, print out a range and include PingPong
          }
          else  ( i % 5 === 0 ) {
          $('').append("<li>'Pong’</li>");//if function is divisible by 5, print out a range and include Pong
          }
          else if ( i % 3 ===  0 ) {
          $('').append("<li>‘Ping’</li>");//if function is divisible by 3, print out a range and include Ping
          }
          else {
          return(i);
      }
    }
  })


event.preventDefault();




//UI Logic
$(document).ready(function){
  $("#replies-form").submit(function(event){
    event.preventDefault()
    $("#replies").append(<li>)
  })
}
