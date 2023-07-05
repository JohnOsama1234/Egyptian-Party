// Main Section
function openNav() {
  if ($("#mySidenav").width() == "0") {
    $("#mySidenav").width("250px");
    $("#main").css("margin-left", "250px");
  }
  else {
    closeNav()
  }

}
function closeNav() {
  $("#mySidenav").width("0px");
  $("#main").css("margin-left", "0px");
}




//&------------------------------------------------------------------------------------------------------



// Singers Section
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



//&---------------------------------------------------------------------------------------------------------


// Date Section
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days + " D "
  document.getElementById("hours").innerHTML = hours + " h "
  document.getElementById("mins").innerHTML = minutes + " m "
  document.getElementById("secs").innerHTML = seconds + " s "
}, 1000);



//&---------------------------------------------------------------------------------------------------


// join us section
var textArea = document.getElementById("textArea")
var numChar = document.getElementById("char")
var max = 100
var char = 0
textArea.addEventListener("keyup", function () {
  var length = this.value.length
  char = max - length
  if (char <= 0) {
    numChar.innerHTML = "your available character finished"
  }
  else {
    numChar.innerHTML = char
  }
})

