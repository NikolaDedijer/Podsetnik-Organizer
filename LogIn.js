//LOGIN
var ime = "biljana";
var pass = 12345;
var login = {
    imeLog: ime,
    passLog: pass
}
localStorage.setItem("login", JSON.stringify(login));

//funkcija za logovanje
function logIn() {
    var uporediIme = document.getElementById("username").value;
    var uporediPass = document.getElementById("password").value;

    var check = localStorage.getItem("login");
    proveraObj = JSON.parse(check);

    var checkIme = proveraObj.imeLog;
    var checkPass = proveraObj.passLog;

    if (checkIme == uporediIme && checkPass == uporediPass) {
        document.getElementById("id02").style.display = "none";
    } else {
        alert("Niste ispravno uneli username ili password");
    }
}
