const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

function validateForm() {
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var contact = document.getElementById("contact").value.trim();
    var msg = document.getElementById("msg").value.trim();

    if (fname === "" || lname === "" || email === "" || contact === "" || msg === "") {
        alert("All fields are required");
        return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    }

    // Validate contact number format
    var contactRegex = /^\d{10}$/;
    if (!contactRegex.test(contact)) {
        alert("Invalid contact number");
        return false;
    }

    return true;
}
