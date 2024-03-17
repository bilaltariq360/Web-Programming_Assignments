$(document).ready(function () {
  $("#signupForm").submit(function (e) {
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();
    var age = $("#age").val();
    var phone = $("#phone").val();
    var zip = $("#zip").val();

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters, a number, and a special character."
      );
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    if (age < 18 || age > 100) {
      alert("Age must be between 18 and 100.");
      return false;
    }

    var phoneRegex = /^\d{4}-\d{4}-\d{3}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    var zipRegex = /^\d{5}$/;
    if (!zipRegex.test(zip)) {
      alert("Please enter a valid 5-digit zip code.");
      return false;
    }

    this.submit();
  });
});
