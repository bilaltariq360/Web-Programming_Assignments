$(document).ready(function () {
  $("#signinForm").submit(function (e) {
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    if (username === "" || password === "") {
      alert("Username and password are required.");
      return false;
    }

    let nullCheck = true;

    for (let i = 0; i < username.length; i++) {
      if (username[i] !== " ") {
        nullCheck = false;
        return;
      }
    }
    if (nullCheck) alert("Invalid username entered.");

    nullCheck = true;

    for (let i = 0; i < password.length; i++) {
      if (password[i] !== " ") {
        nullCheck = false;
        return;
      }
    }
    if (nullCheck) alert("Invalid password entered.");
  });
});
