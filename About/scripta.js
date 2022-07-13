

//manage education tabs

//manage project tabs
function tabExperience(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="work-panel" and hide them
  tabcontent = document.getElementsByClassName("work-panel");
  for (i = 0; i < tabcontent.length; i++) {
   tabcontent[i].style.display = "none";
   tabcontent[i].className = tabcontent[i].className.replace("d-none", ""); 
  }

  // Get all elements with class="react-tabs__tab" and remove the class "active"
  tablinks = document.getElementsByClassName("work-place-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " work-place-item__tab--selected",
      ""
    );
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " work-place-item__tab--selected";
}

