jQuery(window).on("load",function(){$(".container").masonry({columnWidth:".grid-sizer",gutter:15,itemSelector:".item",percentPosition:"true",fitWidth:!0})});var msnry=new Masonry(".grid",{});ocument.addEventListener("mousedown",onMouseDown),document.addEventListener("mouseup",onMouseUp);var temp=document.querySelector("#shareBoxTemplate");function onMouseDown(){document.getSelection().removeAllRanges();var e=document.querySelector("#shareBox");null!==e&&e.remove()}function onMouseUp(){var e=document.getSelection(),t=e.toString();if(""!==t){var n=e.getRangeAt(0);if("article"===n.startContainer.parentElement.parentElement.localName||"article"===n.startContainer.parentElement.localName){document.body.insertBefore(document.importNode(temp.content,!0),temp);n.getBoundingClientRect();var o=document.querySelector("#shareBox");o.style.top="calc(${rect.top}px - 38px)",o.style.left="calc(${rect.left}px + calc(${rect.width}px / 2) - 30px)";var r=o.querySelector("button");r.shareTxt=t,r.addEventListener("mousedown",onShareClick,!0)}}}function onShareClick(){window.open("https://twitter.com/intent/tweet?text=${this.shareTxt}"),this.remove(),document.getSelection().removeAllRanges()}

// -
function expand() {
    $(".search").toggleClass("close");
    $(".input").toggleClass("square");
    if ($('.search').hasClass('close')) {
      $('input').focus();
    } else {
      $('input').blur();
    }
  }
  $('button').on('click', expand);