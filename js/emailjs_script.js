function sendMail(){
    let parms = {
        subject : document.getElementById("textId53").value,
        email : document.getElementById("textId52").value,
        name : document.getElementById("textId51").value,
        message : document.getElementById("textId54").value
    }
    
    /*
    const emailValue = document.getElementById("textId52").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        alert('Please enter a valid email address.');
        return false;
    }
    else {
        emailjs.send("service_jb8kvvr", "template_e5pl0q7", parms).then(alert("Sent!"));
    }
    */

    emailjs.send("service_jb8kvvr", "template_e5pl0q7", parms).then(alert("Sent!"));
}