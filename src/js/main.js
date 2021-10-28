function openCity(features) {
    var i;
    var x = document.getElementsByClassName("feature");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(features).style.display = "inherit";
}

(function () {
    const hamburger = document.querySelector(".navbar-toggler-icon");
    const hamburgerClose = document.querySelector(".navbar-toggler-close");
    const body = document.querySelector("body")

    hamburger.addEventListener('click', () => {
        hamburger.style.display = "none";
        hamburgerClose.style.display = "block";
        body.style.overflow = "hidden"
    });

    hamburgerClose.addEventListener('click', () => {
        hamburger.style.display = "block";
        hamburgerClose.style.display = "none";
        body.style.overflow = "inherit"
    });
})()

function dropdown(index) {
    let show = document.querySelectorAll('[data-collapsed]')
    let arrow = document.querySelectorAll('.arrow-custom')
    if (show[index].ariaExpanded == 'true') {
        arrow[index].classList.add('arrow-active')
    } else {
        arrow[index].classList.remove('arrow-active')
    }
}

let error = document.querySelector('#input-error')
function errorFunc() {
    error.classList.add('error');
}

function correctFunc() {
    error.classList.remove('error')
}

function validateEmail() {
    let mail = document.querySelector('#email')
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.value.match(mailformat)) {
        document.getElementById('mailspan').style.display = 'none';
        correctFunc(mail)
    } else {
        errorFunc(mail)
        document.getElementById('mailspan').style.display = 'block';
    }
}

function validateForm() {
    form.addEventListener('click', (e) => {
        e.preventDefault();
        validateEmail();
    })
};