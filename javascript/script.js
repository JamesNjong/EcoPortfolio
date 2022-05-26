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
    header.style.display = "none";
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

//manage project tabs
function openPortTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="react-tabs__tab-panel" and hide them
  tabcontent = document.getElementsByClassName("project-tabs__tab-panel");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="react-tabs__tab" and remove the class "active"
  tablinks = document.getElementsByClassName(" project-tabs__tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " project-tab__tab--selected",
      ""
    );
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " project-tab__tab--selected";
}

//manage testimonial pages

function openTestimRow(event, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="testim-tabs__tab-row" and hide them
  tabcontent = document.getElementsByClassName(" testim-tab-row");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="react-tabs__tab" and remove the class "active"
  tablinks = document.getElementsByClassName(" testim-tabs__tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " testim-tab__tab--selected",
      ""
    );
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "grid";
  event.currentTarget.className += " testim-tab__tab--selected";
}

 

function highlighter(event) {
  var tabcontent = document.getElementsByClassName("active-item");

  tabcontent[0].className = tabcontent[0].className.replace("active-item", "");
  console.log(tabcontent[0]);
  event.currentTarget.className += " active-item";
}

//this event lister runs on page load to set the tabs to the desired first pages
document.addEventListener("DOMContentLoaded", function () { 

  openPortTab(event, "project-tabs-web");
  const po = document.getElementById("project-tabs-0");
  po.className += " project-tab__tab--selected";

  openTestimRow(event, "testim-tabs-row-1");
  const tes = document.getElementById("testim-tabs-0");
  tes.className += " testim-tab__tab--selected";
});
