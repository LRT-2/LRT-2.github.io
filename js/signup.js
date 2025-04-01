document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("signin-form")
      .addEventListener("submit", function (event) {
        event.preventDefault(); 

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var errorMessage = document.getElementById("error-message");
        var users = JSON.parse(localStorage.getItem("users")) || [];

        var userExists = users.find(
          (user) =>
            user.email === email && user.password === password
        );

        if (userExists) {
          localStorage.setItem(
            "currentUser",
            JSON.stringify(userExists)
          );

          window.location.href = "storein.html";
        } else {
          errorMessage.textContent = "Invalid Username or Password";
        }
      });
    document
      .getElementById("register-form")
      .addEventListener("submit", function (event) {
        event.preventDefault(); 

        var name = document.getElementById("name").value;
        var email = document.getElementById("register-email").value;
        var password =
          document.getElementById("register-password").value;
        var confirmPassword =
          document.getElementById("confirm-password").value;
        var passwordError =
          document.getElementById("password-error");

        var uppercaseRegex = /[A-Z]/;
        var lowercaseRegex = /[a-z]/;
        var numberRegex = /[0-9]/;
        var symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        if (!uppercaseRegex.test(password)) {
          passwordError.textContent =
            "Password must contain at least one uppercase letter!";
          return;
        } else if (!lowercaseRegex.test(password)) {
          passwordError.textContent =
            "Password must contain at least one lowercase letter!";
          return;
        } else if (!numberRegex.test(password)) {
          passwordError.textContent =
            "Password must contain at least one number!";
          return;
        } else if (!symbolRegex.test(password)) {
          passwordError.textContent =
            "Password must contain at least one symbol!";
          return;
        }
        
        if (password !== confirmPassword) {
          passwordError.textContent = "Passwords do not match!";
          return;
        } else {
          passwordError.textContent = ""; 
        }
        var userId = generateRandomId();

        var users = JSON.parse(localStorage.getItem("users")) || [];

        var emailExists = users.some(
          (user) => user.email === email
        );
        if (emailExists) {
          alert(
            "Email already registered! Please use a different email."
          );
          return;
        }

        users.push({
          name: name,
          email: email,
          password: password,
          userId: userId,
        });
        localStorage.setItem("users", JSON.stringify(users));

        alert(
          "Registration successful! Your User ID is: " + userId
        );

        document.getElementById("signin-form").style.display =
          "block";
        document.getElementById("register-form").style.display =
          "none";
      });
    function generateRandomId() {
      var part1 = Math.floor(1000 + Math.random() * 9000); 
      var part2 = Math.floor(1000 + Math.random() * 9000); 
      var part3 = Math.floor(1000 + Math.random() * 9000); 

      return part1 + " " + part2 + " " + part3;
    }

    document
      .getElementById("toggle-register")
      .addEventListener("click", function () {
        document.getElementById("signin-form").style.display =
          "none";
        document.getElementById("register-form").style.display =
          "block";
      });

    document
      .getElementById("toggle-signin")
      .addEventListener("click", function () {
        document.getElementById("signin-form").style.display =
          "block";
        document.getElementById("register-form").style.display =
          "none";
      });
  });
  