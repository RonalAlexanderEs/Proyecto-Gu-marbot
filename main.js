function openCategory(categoryName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablink");


    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.opacity = "0";  
        tabcontent[i].style.visibility = "hidden"; 
       }

    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    var selectedTab = document.getElementById(categoryName);
    selectedTab.style.visibility = "visible";  
    selectedTab.style.opacity = "1";  

  
    event.currentTarget.className += " active";
}


function toggleInfo(card) {
    card.classList.toggle('active');
  }
  