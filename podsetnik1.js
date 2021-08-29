var table;
var row;
var cell1;
var cell2;
var cell3;
var cell4;
var cell5;
var cell6;

var danuNedelji = new Array(7);
danuNedelji[0] = "Sun";
danuNedelji[1] = "Mon";
danuNedelji[2] = "Thu";
danuNedelji[3] = "Wen";
danuNedelji[4] = "Thu";
danuNedelji[5] = "Fri";
danuNedelji[6] = "Sat";


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




//reset input polja funkcija
function funkcijaF() {
    document.getElementById("rt").reset();
}


//funkcija da oboji prazno input polje
//document.querySelectorAll('input[type="text"]').forEach(e => {
//    e.addEventListener('focusout', setInputBackground)
//});
//
//function setInputBackground() {
//    this.style.backgroundColor = !!this.value ? "#3CBC8D" : "red";
//}



//funkcija za dodavanje reda sa unetim vrednostima i dodavanje trenutnog datuma i vremena
function myFunction() {

    let polje = document.getElementById("fname").value;
    let poljeDva = document.getElementById("tname").value;
    let poljeTri = document.getElementById("dname").value;
    if (polje === '' || poljeDva === '' || poljeTri === '' || polje === '' && poljeDva === '' || polje === '' && poljeTri === '' || poljeDva === '' && poljeTri === '') {
        alert("Niste popunili sva polja!");

    } else {
        table = document.getElementById("myTable");
        row = table.insertRow(-1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);
        cell6 = row.insertCell(5);

        row.className = "fff";
        cell1.id = 'cell1';
        cell2.id = 'cell2';
        cell3.id = 'cell3';
        cell4.id = 'cell4';
        cell5.id = 'cell5';
        cell6.id = 'cell6';
        cell5.className = "ja";
        cell1.name = "cell1";
        cell2.name = "cell2";
        cell3.name = "cell3";
        cell4.name = "cell4";
        cell5.name = "cell5";
        cell6.name = "cell6";
        console.log(cell1.className);

        var today = new Date();
        var date = '<i class="far fa-calendar-alt"></i>' + ' ' + danuNedelji[today.getDay()] + ' ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear().toString().substr(-2) + "<br>";
        var time = '<i class="far fa-clock"></i>' + ' ' + today.getHours() + ":" + today.getMinutes();
        var dateTime = date + '  ' + time;
        let date1 = '<i class="far fa-calendar-alt"></i>' + ' ' + danuNedelji[today.getDay()] + ' ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear().toString().substr(-2) + "<br>";
        let time1 = '<i class="far fa-clock"></i>' + ' ' + today.getHours() + ":" + today.getMinutes();
        let dateTime1 = date1 + '  ' + time1;
        let dateString = dateTime1.toString();

        cell1.innerHTML = document.Z.ime.value;
        cell2.innerHTML = document.Z.kontakt.value;
        cell3.innerHTML = document.Z.komentar.value;
        cell4.innerHTML = dateTime;
        document.getElementById("gname").innerHTML = dateTime1;
        cell5.innerHTML = '<span style="cursor: pointer;" id="delete" class="fas fa-trash-alt fa-border fa-1x" onclick="doDelete();deleteRow(this)"></span>'
        cell6.innerHTML = '<span style="cursor: pointer;" id="boja" class="fas fa-check fa-border fa-1x" onclick="obojiKolonu()"></span>'
    }

}

function deleteRow(r) {
    let ii = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(ii);
}

function obojiKolonu() {
    var kol = document.getElementsByClassName("fas fa-check");
    for (let i = 0; i < kol.length; i++) {
        kol[i].onclick = function() {
            if (kol[i].style.color !== "red") {
                this.style.textDecoration = "line-through";
                this.style.color = "red";
            } else {
                this.style.color = "#04AA6D";
                this.style.textDecoration = "none";
            }
        }
    }
}

//funkcija za prikaz danasnjeg datuma
function ispuni() {
    var mesecuGodini = new Array(12);
    mesecuGodini[0] = "January";
    mesecuGodini[1] = "February";
    mesecuGodini[2] = "March";
    mesecuGodini[3] = "April";
    mesecuGodini[4] = "May";
    mesecuGodini[5] = "June";
    mesecuGodini[6] = "July";
    mesecuGodini[7] = "August";
    mesecuGodini[8] = "September";
    mesecuGodini[9] = "October";
    mesecuGodini[10] = "November";
    mesecuGodini[11] = "December";

    var today = new Date();
    var date = danuNedelji[today.getDay()] + ' ' + today.getDate() + '.' + ' ' + mesecuGodini[today.getMonth()];

    document.getElementById("tekst").innerHTML = date;
}

//funkcija za obavestenje o danasnjim obavezama
let today = new Date();
let dan = today.getDate();
let mesec = (today.getMonth() + 1);
let godina = today.getFullYear();
let vreme = dan + '.' + mesec + '.' + godina;
let dani = vreme.toString();
console.log(dani);
let dana = dani.substring(0, 4);
console.log(dana);

var niz = [];
var bojaNiz = [];

function nikola() {
    let cerka = document.getElementById("myTable").rows;
    for (let i = 1; i < cerka.length; i++) {
        let data = cerka[i].cells[0].innerHTML;
        console.log(data);
        niz.push(data);

        let boja = cerka[i].style.textDecoration;
        console.log(boja);
        bojaNiz.push(boja);
        console.log(bojaNiz);
    }
    console.log(niz);

    const even = (element) => element.substring(0, 4) === dana;
    console.log(niz.some(even));

    const ev = (element) => element === "line-through";
    console.log(bojaNiz.some(ev));

    if (niz.some(even) === true && bojaNiz.some(ev) === false) {
        openNav();
    } else {
        openNava();
    }

}

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function openNava() {
    document.getElementById("mySidenava").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenava").style.width = "0";
}

document.writeln("<script type='text/javascript' src='ajax.js'></script>");
document.writeln("<script type='text/javascript' src='sat.js'></script>");
document.writeln("<script type='text/javascript' src='vremeApi.js'></script>");