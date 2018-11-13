const persons = [
  {
    name: "Dhea ",
    photo: "./images/pear/dhea.jpg",
    title: "Age: 26",
   },

  {
    name: "Min Xuan",
    photo: "./images/pear/minxuan.jpg",
     title: "Age: 45",
  },

  {
    name: "Pearlyn",
    photo: "./images/pear/pearlyn.jpg",
    title: "Age: 24",
   
   
  },

  {
    name: "Nee Yen",
    photo: "./images/pear/neeyen.jpg",
    title: "Age: 33",
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
