document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      document.getElementById("username").textContent =
        currentUser.name || "Trainer Name";
      document.getElementById("user-email").textContent =
        currentUser.email || "trainer@example.com";
      document.getElementById("pokemon-id").textContent =
        currentUser.userId || "Not available";

      if (currentUser.joined) {
        document.getElementById("user-joined").textContent =
          currentUser.joined;
      }

      if (currentUser.status) {
        document.getElementById("user-status").textContent =
          currentUser.status;
      }

      if (currentUser.role) {
        document.getElementById("user-role").textContent = currentUser.role;
      }
    } else {
      window.location.href = "try.html";
    }

    document
      .querySelector(".view-transactions-btn")
      .addEventListener("click", function () {
        localStorage.removeItem("currentUser");

        window.location.href = "index.html";
      });
  });

  /*USERNAME*/
  document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      window.location.href = "try.html";
      return;
    }

    const usernameElement = document.getElementById("username-placeholder");
    if (usernameElement) {
      usernameElement.textContent = currentUser.name;
    }
  });
  /*USERNAME*/

  /*DROPDOWN*/
  document
    .getElementById("user-btn")
    .addEventListener("click", function () {
      var dropdown = document.getElementById("dropdown-menu");
      dropdown.classList.toggle("show-dropdown");
    });

  document.addEventListener("click", function (event) {
    var dropdown = document.getElementById("dropdown-menu");
    var userBtn = document.getElementById("user-btn");

    if (
      !userBtn.contains(event.target) &&
      !dropdown.contains(event.target)
    ) {
      dropdown.classList.remove("show-dropdown");
    }
  });

  document
    .getElementById("sign-out")
    .addEventListener("click", function () {
      alert("You have signed out!");
      window.location.href = "try.html";
    });
  function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-menu");
    var arrowIcon = document.getElementById("arrow-icon");

    dropdown.classList.toggle("show-dropdown");
    arrowIcon.classList.toggle("rotate-up");
  }

  window.onclick = function (event) {
    if (!event.target.closest(".dropdown")) {
      var dropdown = document.getElementById("dropdown-menu");
      var arrowIcon = document.getElementById("arrow-icon");

      if (dropdown.classList.contains("show-dropdown")) {
        dropdown.classList.remove("show-dropdown");
        arrowIcon.classList.remove("rotate-up");
      }
    }
  };