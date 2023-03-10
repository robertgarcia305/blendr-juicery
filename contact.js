let hamburger = document.getElementById("hamb-icon");
let x = document.getElementById("x-icon");
let nav = document.getElementById("hamburger-list");

function displayNav() {
    let hamburger = document.getElementById("hamb-icon").style;
    let x = document.getElementById("x-icon").style;
    let nav = document.getElementById("mobile-nav").style;

    hamburger.display = "none";
    x.display = "block";
    nav.display = "flex";
}

closeNav = () => {
    let hamburger = document.getElementById("hamb-icon").style;
    let x = document.getElementById("x-icon").style;
    let nav = document.getElementById("mobile-nav").style;

    hamburger.display = "block";
    x.display = "none";
    nav.display = "none";
}

$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        firstname: "required",
        lastname: "required",
        message: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        password: {
          required: true,
          minlength: 5
        }
      },
      // Specify validation error messages
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        message: "Please provide your message",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });