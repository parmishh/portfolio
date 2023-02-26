function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceId = "service_wok2nco";
    const templateId = "template_5lpwzei";

    emailjs.send(serviceId,templateId,params)
    .then(
        res => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert("Email sent successfully");
        }
    )
    .catch(err=>console.log(err));

}
