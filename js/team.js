const persons = [
  {
    name: "Dhea ",
    photo: "https://serving.photos.photobox.com/53464066dc132288128cb11531bb767f0082dcde75f3b845cd905d38c4223e95e0dc7bc9.jpg",
    title: "CEO",
   },

  {
    name: "Min Xuan",
    photo: "https://serving.photos.photobox.com/2226093445b640ea69b3247d4e4a31ee16d7569a38f898affce33adc8fc8d0f3ecf79591.jpg",
     title: "Project Manager",
  },

  {
    name: "Pearlyn",
    photo: "https://serving.photos.photobox.com/80553616a29779bd113f7a340b9b1eae3636dd38534c57877597a17b7131be741c67b3ae.jpg",
    title: "Event Consultant",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p><p>Saepe repudiandae rerum quam ut perferendis, ullam similique nemo quod, assumenda mollitia consectetur. Eveniet optio maxime perferendis odit possimus? Facilis architecto nesciunt doloribus consectetur culpa veritatis accusamus expedita quos voluptate!</p><p>Nisi provident minus possimus optio voluptate rem, perspiciatis, placeat, culpa aperiam quod temporibus.</p>",
   
  },

  {
    name: "Nee Yan",
    photo: "https://serving.photos.photobox.com/52898788b03c8a0e32a8cb52b4d43d7525f119daa2629569dbda0a8d827192217fb64c22.jpg",
    title: "Event Coordinator",
  }
];

const app = new Vue({
  el: "#app",
  data() {
    return {
      persons: persons,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedPersonData: {
        name: null,
        title: null,
        photo: null,
        social: {
          facebook: null,
          twitter: null,
          linkedin: null
        }
      }
    };
  },
  // methods: {
  //   selectPerson(index, el) {
  //     if (!this.isOk) {
  //       this.selectedPersonIndex = index;
  //       this.isSelected = true;
  //       el.target.parentElement.className == "person-details"
  //         ? (this.selectedPerson = el.target.parentElement.parentElement)
  //         : (this.selectedPerson = el.target.parentElement);

  //       this.selectedPerson.classList.add("person-selected");
  //       this.selectedPerson.setAttribute(
  //         "style",
  //         `width:${this.selectedPerson.offsetWidth}px;`
  //       );
  //       this.selectedPersonData = this.persons[index];
  //       window.setTimeout(() => {
  //         this.inlineStyles = `width:${this.selectedPerson
  //           .offsetWidth}px;height:${this.selectedPerson
  //           .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
  //           .selectedPerson.offsetTop}px;position:fixed`;
  //         this.selectedPerson.setAttribute("style", this.inlineStyles);
  //       }, 400);
  //       window.setTimeout(() => {
  //         this.isReady = true;
  //         this.isOk = true;
  //       }, 420);
  //     } else {
  //       this.reset();
  //     }
  //   },
  //   reset() {
  //     this.isReady = false;
  //     window.setTimeout(() => {
  //       this.selectedPerson.classList.add("person-back");
  //     }, 280);
  //     window.setTimeout(() => {
  //       this.selectedPerson.setAttribute("style", "");
  //     }, 340);
  //     window.setTimeout(() => {
  //       this.isSelected = false;
  //       this.selectedPerson.classList.remove("person-back", "person-selected");
  //       this.isOk = false;
  //     }, 400);
  //   }
  // }
});
