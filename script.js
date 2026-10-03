// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =========================
// FEATURE BUTTON
// =========================

function showMessage(feature) {

    alert(feature + " selected!");

}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;


    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

        return;
    }


    alert("Thank you, " + name + "! Your message has been submitted.");


    contactForm.reset();

});