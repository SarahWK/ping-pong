//Business logic
// Input the PingPong function
function pIngPong(i) {
  if (i % 15 === 0){
    return "PingPong" //if the number is divisible by 15, print out a range and include PingPong
  } else if(i % 5 === 0){
    return ("<li>'Pong’</li>"); //if function is divisible by 5, print out a range and include Pong
  } else if (i % 3 === 0){
    return ("<li>‘Ping’</li>"); //if function is divisible by 3, print out a range and include Ping
  } else if {
    return i;
  }
}
}


//UI Logic
$(document).ready(function() {
      $("form#replies-form").submit(function(event) {
          event.preventDefault()
          for (var i = 1; i <= 100; i++) {
            $("ul#reply").append("<li>"+ pIngPong(i)+ "</li>");
          })
      })
