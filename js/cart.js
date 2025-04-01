document.addEventListener("DOMContentLoaded", function() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (!currentUser) {
        window.location.href = "storeout.html";
        return;
    }

    const usernameElement = document.getElementById("username-placeholder");
    if (usernameElement) {
        usernameElement.textContent = currentUser.name;
    }
});

 document.getElementById("user-btn").addEventListener("click", function() {
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.classList.toggle("show-dropdown");
});

document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("dropdown-menu");
    var userBtn = document.getElementById("user-btn");

    if (!userBtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show-dropdown");
    }
});

document.getElementById("sign-out").addEventListener("click", function() {
    alert("You have signed out!");
    window.location.href = "storeout.html"; 
});
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-menu");
    var arrowIcon = document.getElementById("arrow-icon");

    dropdown.classList.toggle("show-dropdown"); 
    arrowIcon.classList.toggle("rotate-up"); 
}

window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
        var dropdown = document.getElementById("dropdown-menu");
        var arrowIcon = document.getElementById("arrow-icon");

        if (dropdown.classList.contains("show-dropdown")) {
            dropdown.classList.remove("show-dropdown");
            arrowIcon.classList.remove("rotate-up"); 
        }
    }
}; 