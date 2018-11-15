var selection = 'All';
document.getElementById(selection).style.borderBottom = "2px solid black";
var tourPackage = [
  {
    name: 'Trump-Kim',
    category: 'Theme',
    imgUrl: './images/trump-kim.jpg'
  },
  {
    name: 'Instagrammable',
    category: 'Theme',
    imgUrl: './images/instagrammable-2.jpg'
  },
  {
    name: 'Food in CRA',
    category: 'Theme',
    imgUrl: './images/crazy-rich-asians.png'
  },
  {
    name: 'Chinese',
    category: 'Cuisine',
    imgUrl: './images/chinese-food.jpg'
  },
  {
    name: 'Indian',
    category: 'Cuisine',
    imgUrl: './images/indian-food.jpeg'
  },
  {
    name: 'Malay',
    category: 'Cuisine',
    imgUrl: './images/peranakan-2.jpg'
  },
  {
    name: 'Malay',
    category: 'Cuisine',
    imgUrl: './images/middle-eastern.jpg'
  },
  {
    name: 'Malay',
    category: 'Cuisine',
    imgUrl: './images/western-cuisine.jpg'
  },
  {
    name: 'Malay',
    category: 'Cuisine',
    imgUrl: './images/thai.jpg'
  },

]
tourPackage.forEach((item) => {
  templateCard(item);
});
function filterTour(){
  document.getElementById(selection).style.borderBottom = "none";
  selection = this.event.target.value;
  document.getElementById(selection).style.borderBottom = "2px solid black";
  $('#browse-list').empty();
  if (selection == 'All'){
    tourPackage.forEach((item) => {
      templateCard(item);
    });
  } else {
    var toShow = tourPackage.filter((item) => {
      return item.category === selection;
    });
    toShow.forEach((item) => {
      templateCard(item);
    });
  }
  console.log(this.event.target.value);
}

function templateCard(item){
  var template = `
    <div class="col-md-4 col-6 browse-card">
      <img src="` + item['imgUrl'] + `" class="browse-card-image"/>
    </div>
  `
  $('#browse-list').append(template);
}

function seeNext(){
  var left = document.getElementById("review-container").style.marginLeft;

  console.log(left);
  left  = parseInt(left.split('px')[0]);
  console.log(left);

  if (left > -900){
    document.getElementById("review-container").style.marginLeft = (left - 300) + "px";
  }

}
function seePrevious(){
  var left = document.getElementById("review-container").style.marginLeft;

  console.log(left);
  left  = parseInt(left.split('px')[0]);
  console.log(left);

  if (left < 0){
    document.getElementById("review-container").style.marginLeft = (left + 300) + "px";
  }

}


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
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
// $('.carousel').carousel({
//   interval: 2000
// })
