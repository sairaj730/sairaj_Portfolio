// toggle navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('input[type="text"][placeholder="Full Name"]').value;
        const from = document.querySelector('input[type="email"][placeholder="Email Address"]').value;
        const phone = document.querySelector('input[type="number"][placeholder="Mobile Number"]').value;
        const subject = document.querySelector('input[type="text"][placeholder="Email Subject"]').value;
        const message = document.querySelector('textarea[placeholder="Your Message"]').value;
        
        const to = 'vadasairaju123@gmail.com';
        const body = `Hi Sai raj,\n\n${message}\n\nBest Regards,\n${name}\nPhone: ${phone}`;
        
        const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Attempt to open mailto link
        window.location.href = mailtoLink;
        
        // Show success message
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.style.animation = 'fadeIn 0.5s forwards';
        }
    });
});



// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >=offset && top< offset + height) {
            navLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active'); 
            });
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',windows.scrollY>100);

    // remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading',{ origin: 'top'});
ScrollReveal().reveal('.home-img, .Skills-container, .Projects-box, .contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{ origin: 'left'});
ScrollReveal().reveal('home-content p, .about-content',{origin: 'right'});

// typed js
const typed =new Typed('.multiple-text', {
    strings: ['Full Stack Developer' , 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
