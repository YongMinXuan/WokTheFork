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
    imgUrl: './images/malay-food.jpg'
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
