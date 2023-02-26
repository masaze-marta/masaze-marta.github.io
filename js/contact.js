function send() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let body = document.getElementById("body").value;

    let text = `Jméno: ${name}%0D%0ATelefon: ${phone}%0D%0A%0D%0A${body.replaceAll("\n", "%0D%0A")}`;

    window.open(`mailto:hanakovamarta@email.cz?subject=${subject}&body=${text}`);
}