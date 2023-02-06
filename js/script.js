const contactForm = document.getElementById("contact-form");
const btnKirim = document.querySelector(".btn-kirim")

contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method:"POST",
        body: formData,
        mode: "no-cors",
    })
    .then(()=>{

        // url thank you 
        window.location.href = "thankyou.html";
        contactForm.reset;
    }).catch((e) => alert('Error occured'))
})