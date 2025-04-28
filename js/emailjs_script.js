function sendMail(){
    // Check if reCAPTCHA is completed
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        alert("Molimo Vas izvršite verifikaciju ispod forme.\n\nPlease complete the verification below the form.");
        return;
    }

    let parms = {
        subject : document.getElementById("textId53").value,
        email : document.getElementById("textId52").value,
        name : document.getElementById("textId51").value,
        message : document.getElementById("textId54").value,
        "g-recaptcha-response": recaptchaResponse // Include reCAPTCHA response
    }
    
    emailjs.send("service_jb8kvvr", "template_e5pl0q7", parms)
    alert("Vaša poruka je poslata! Javićemo Vam se u najkraćem roku.\n\nYour message is sent! We'll contact you soon.");
    
    grecaptcha.reset(); // Reset reCAPTCHA
    document.getElementById("textId53").value;
    document.getElementById("textId52").value;
    document.getElementById("textId51").value;
    document.getElementById("textId54").value;

    /*
    if (emailPattern.test(emailValue)) {
        emailjs.send("service_jb8kvvr", "template_e5pl0q7", parms).then(alert("Vaša poruka je poslata! Javićemo vam se u najkraćem roku.\n\nYour message is sent! We'll contact you soon."));
        //return;
    }
    */
}