document.getElementById('textId45').addEventListener('click', sendMail);

function sendMail(event){
    
    event.preventDefault();

    //const recaptchaResponse = grecaptcha.getResponse();
    //if (!recaptchaResponse) {
    //    alert("Molimo Vas izvršite verifikaciju ispod forme.\n\nPlease complete the verification below the form.");
    //    return;
    //}

    var language = document.getElementById("translateButton").innerHTML;
    var languageTexts;
    if (language == 'ENG'){ // obrnuto je jer je trenutna vrednost (ENG) za promenu na taj jezik
        languageTexts = new serbianText();
    }
    else if (language == 'SRB'){
        languageTexts = new englishText();
    }

    const btn = document.getElementById('textId45');
    const form = document.getElementById('form');

    if (!form.checkValidity()) {
        form.reportValidity(); // Show built-in validation messages
        //event.preventDefault(); // Prevent form submission if not valid
        return;
    }

    btn.disabled = true;
    btn.value = languageTexts.textId45a;

    emailjs.sendForm("service_jb8kvvr", "template_e5pl0q7", form)
    .then(() => {
        alert("Vaša poruka je poslata! Javićemo vam se u najkraćem roku.\n\nYour message is sent! We'll contact you soon.");
        btn.value = languageTexts.textId45;
        btn.disabled = false;
        form.reset(); 
    }, (err) => {
        alert(JSON.stringify(err));
        btn.value = languageTexts.textId45;
        btn.disabled = false;
    });

    //grecaptcha.reset(); // Reset reCAPTCHA
}
