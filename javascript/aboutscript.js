//manage background tabs
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="react-tabs__tab-panel" and hide them
  tabcontent = document.getElementsByClassName("react-tabs__tab-panel");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="react-tabs__tab" and remove the class "active"
  tablinks = document.getElementsByClassName(" react-tabs__tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " react-tab__tab--selected",
      ""
    );
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " react-tab__tab--selected";
}

//this event lister runs on page load to set the tabs to the desired first pages
document.addEventListener("DOMContentLoaded", function () {
  openTab(event, "react-tabs-exp");
  const li = document.getElementById("react-tabs-0");
  li.className += " react-tab__tab--selected";
});
