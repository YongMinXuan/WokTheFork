// Set the date we're counting down to
var countDownDate = new Date("Nov 20, 2018 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // console.log(distance);
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown-crazy").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-crazy").innerHTML = "EXPIRED";
  }
}, 1000);


// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 600) {
        $('.sidebar').addClass('sticky-sidebar');
    } else {
        $('.sidebar').removeClass('sticky-sidebar');
    }
});

var fomo = [
  {
    place: "USA",
    tour: "Crazy Rich Asian"
  },
  {
    place: "Thailand",
    tour: "Trump Kim"
  },
  {
    place: "Australia",
    tour: "Chinese"
  }
]

$(document).ready(function(){
  var i = 0;
  var len = fomo.length;

  function fomoFunction(){
    $('#fomo').remove();
    var template = `<div class="fomo-box animated fadeInUp" id="fomo">Someone from ` + fomo[i].place + ` just purchase the `+ fomo[i].tour + ` tour package</div>`;
    $('body').append(template);
    i++;
    if (i < len) {
      // Don't do anything special
    }  else {
      // Reset the counter
      i = 0;
    }
    setTimeout(hideBox, 3000);
    setTimeout(fomoFunction, 10000);
  }

  function hideBox(){
    $('#fomo').removeClass('fadeInUp');
    $('#fomo').addClass('fadeOutDown');

  }
  fomoFunction();
  // removeBox();


})
$("#up").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
