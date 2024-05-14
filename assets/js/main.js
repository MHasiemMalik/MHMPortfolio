/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/

const contactForm=document.getElementById('contact-form');
      contactMessage=document.getElementById('contact-message');

     

const sendEmail=(e) =>{
    e.preventDefault();
    

    emailjs.sendForm('service_1q9le9f','template_36fnora','#contact-form','IG6fsbrHf2OWW7FRc')
     .then(()=>{
        var canvas = document.getElementById('canvas');
        canvas.style.display = "block";
   // Hide the canvas after 10 seconds
        setTimeout(function() {
            canvas.style.display = "none";
        }, 18000);     
        swal("Thank You!", "Message Received Successfully, I Will Contact You Very Soon", "success");                  
        

        setTimeout(()=>{
            contactMessage.textContent='' 
        },5000)

        contactForm.reset()

     },()=>{
        swal("Oops!", "There Was An Issue Sending The Message! Please Check Network and Try Again", "error");
     })
}

contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 5000 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('scrollup')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.scrollup')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/* Type Animation */
// Define the text variations
const texts = [
    "Software Engineer",
    "Fullstack Java Developer",
    "MERN Stack Developer",
    "AI & ML Developer",
    "Android Developer",
    "Tester",
    "UX Designer",
    "Video Editor"
];

// Index to track the current text
let index = 0;

// Index to track the current character being typed
let charIndex = 0;

// Function to animate typing
function type() {
    // Get the element
    const element = document.getElementById("typing-text");

    // Get the current text
    const currentText = texts[index];

    // Set the text in the element up to the current character index
    element.textContent = currentText.substring(0, charIndex);

    // Increment the character index
    charIndex++;

    // Check if typing is complete for the current text
    if (charIndex > currentText.length) {
        // Reset character index
        charIndex = 0;

        // Move to the next text
        index = (index + 1) % texts.length;
    }

    // Repeat typing animation
    setTimeout(type, 150);
}

// Start typing animation
type();

//Preventing rightclick
document.addEventListener("contextmenu",function(e){
    e.preventDefault();   
}, false);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,

})

sr.reveal(`.home__data,.home__social ,.footer__container,.cert__image,#fpic7,#fpic4,#vlpic3,#vlpic5,#prpic3`)
sr.reveal(`.home__image,.certificate__container,#fpic6,#fpic3,#vlpic1,#vlpic6,#svpic1`,{origin:'bottom'})
sr.reveal(`.about__data,.skills__data,.project__container,#fpic1,#vlpic2,#svpic3,#svpic4,#prpic1,#contact-form`,{origin:'left'})
sr.reveal(`.about__image,.skills__content,#fpic2,#fpic5,#vlpic4,#svpic2,#svpic5,#prpic2,#contpic`,{origin:'right'})
sr.reveal(`.services__card,.projects__card`,{interval:'100'})