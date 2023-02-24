function send() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let body = document.getElementById("body").value;
    window.open(`mailto:hanakovamarta@email.cz?subject=${subject}&body=${body}`);
}