
/*


$(document).ready(function() {
   



    $(".logo_img").click(function() {
        

        $("nav").show(); // Slide in from right
       
    });

    $(".fa-xmark").click(function() {
            $("nav").hide(); // Slide in from right

    });

});

*/

const toggle = document.getElementsByClassName("fa-bars")[0];
const hide = document.getElementsByClassName("fa-xmark")[0];
const nav = document.getElementsByTagName("nav")[0];

toggle.addEventListener("click", () => {
    nav.style.left = "0";
    toggle.style.display = "none";
    hide.style.display = "block";
});

hide.addEventListener("click", () => {
    nav.style.left = "-100%";
    toggle.style.display = "block";
    hide.style.display = "none";
});


/* whatsapp integration with contact form */

let form = document.getElementById("contact_form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form field values
    let firstName = document.getElementsByClassName("first_name")[0].value;
    let lastName = document.getElementsByClassName("last_name")[0].value;
    let address = document.getElementsByClassName("address")[0].value;
    let number = document.getElementsByClassName("number")[0].value;
    let message = document.getElementsByClassName("message")[0].value;
    let whatsappNumber = '9182479132';

    // Construct WhatsApp message with headers
    let whatsappMessage = `Help me with the following information:||`;
    whatsappMessage += `Name: ${firstName} ${lastName},,,,`;
    whatsappMessage += `Address: ${address},,,,`;
    whatsappMessage += `Phone Number: ${number},,,,`;
    whatsappMessage += `Message: ${message},,,,`;

   
    // Create WhatsApp link
    let whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');
});


const contact = document.getElementsByClassName('hero_section_child_left')[0].querySelector('button');

contact.addEventListener("click", () => {


 // Calculate the offset of the target element from the top of the page
 const offsetTop = document.getElementsByClassName("contact_form")[0].offsetTop;

 // Smooth scroll to the target element
 window.scrollTo({
     top: offsetTop,
     behavior: "smooth"
 });


})
