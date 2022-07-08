var portpos = 200;

//manage the scroll events so the header is hidden or revealed at you scroll

const body = document.body;
const header = document.querySelector(".header-content");

const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset; //get current position
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp); //get rid of the scroll up event
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    header.style.display = "block";
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
    header.style.display = "block";
  }
  lastScroll = currentScroll;
});

//manage tabs

function highlighter(event) {
  var tabcontent = document.getElementsByClassName("active-item");

  tabcontent[0].className = tabcontent[0].className.replace("active-item", "");
  console.log(tabcontent[0]);
  event.currentTarget.className += " active-item";
  Navigator();
}

var onAppear = [];

document.addEventListener(
  "DOMContentLoaded",
  function () {
    onAppear = [].map.call(
      document.querySelectorAll(".animately"),
      function (item) {
        return item;
      }
    );
  },
  false
);

window.addEventListener(
  "scroll",
  function () {
    onAppear.forEach(function (elem) {
      var vwTop = window.pageYOffset;
      var vwBottom = window.pageYOffset + window.innerHeight;
      var elemTop = elem.offsetTop;
      var elemHeight = elem.offsetHeight;

      if (vwBottom > elemTop && vwTop - elemHeight < elemTop) {
        elem.classList.add("animate");
      } else {
        elem.classList.remove("animate");
      }
    });
  },
  false
);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var drawer = document.getElementsByClassName("img-drawer_icon");
var drawer_image = document.getElementsByClassName("img-drawer_icon");

drawer[0].addEventListener("click", Navigator);

function Navigator() {
  var header = document.getElementsByClassName("header");

  var drawer_toggle = header[0].classList.contains("header-content");
  console.log(drawer_toggle);

  if (drawer_toggle) {
    header[0].className = header[0].className.replace(
      "header-content",
      "header-active"
    );
    drawer_image[0].src = "./resources/Icons/drawer_close_icon.svg";
  } else {
    header[0].className = header[0].className.replace(
      "header-active",
      "header-content"
    );
    drawer_image[0].src = "./resources/Icons/drawer_icon.svg";
  }
}
