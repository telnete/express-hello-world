var togglePasswordButton = document.querySelector(".toggle-password img");
var maxWidth = 30;
var maxHeight = 20;
var img = new Image();
img.onload = function() {
  var width = img.width;
  var height = img.height;
  if (width > maxWidth) {
    height *= maxWidth / width;
    width = maxWidth;
  }
  if (height > maxHeight) {
    width *= maxHeight / height;
    height = maxHeight;
  }
  togglePasswordButton.style.width = width + "px";
  togglePasswordButton.style.height = height + "px";
};
img.src = togglePasswordButton.src;





function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  var togglePasswordButton = document.querySelector(".toggle-password img");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePasswordButton.src = "img/cooolll.png";
  } else {
    passwordField.type = "password";
    togglePasswordButton.src = "img/cooolll.png";
  }
}
