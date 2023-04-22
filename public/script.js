function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.innerHTML = "&#128064;";
    } else {
      passwordInput.type = "password";
      toggleButton.innerHTML = "&#128065;";
    }
  }




  


  