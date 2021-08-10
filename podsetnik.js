var table;
var row;
var cell1;
var cell2;
var cell3;
var cell4;
var cell5;
var objekat = {};
var obj = [{}];

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
document.querySelectorAll('input[type="text"]').forEach(e => {
    e.addEventListener('focusout', setInputBackground)
});

function setInputBackground() {
    this.style.backgroundColor = !!this.value ? "#3CBC8D" : "red";
}



//funkcija za dodavanje reda sa unetim vrednostima i dodavanje trenutnog datuma i vremena
function myFunction() {

    var polje = document.getElementById("fname").value;
    var poljeDva = document.getElementById("tname").value;
    var poljeTri = document.getElementById("dname").value;
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

        var today = new Date();
        var date = '<i class="far fa-calendar-alt"></i>' + ' ' + danuNedelji[today.getDay()] + ' ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear().toString().substr(-2) + "<br>";
        var time = '<i class="far fa-clock"></i>' + ' ' + today.getHours() + ":" + today.getMinutes();
        var dateTime = date + '  ' + time;

        cell1.innerHTML = document.Z.ime.value;
        cell2.innerHTML = document.Z.kontakt.value;
        cell3.innerHTML = document.Z.komentar.value;
        cell4.innerHTML = dateTime;
        cell5.innerHTML = '<span style="cursor: pointer;" class="fas fa-trash-alt fa-border fa-1x"></span>'



        //Ubacivanje podataka u localstorage
        objekat = {
            a: cell1.innerHTML,
            b: cell2.innerHTML,
            c: cell3.innerHTML,
            d: cell4.innerHTML,
        }
        var counter = localStorage.getItem('counter');
        counter++;
        localStorage.setItem('objekat:' + counter, JSON.stringify(objekat));
        localStorage.setItem('counter', counter);

        console.log(objekat, counter);

        //rad sa redovima
        row.className = "fff";
        var oboji = document.getElementsByClassName("fff");
        for (let i = 0; i < oboji.length; i++) {
            oboji[i].addEventListener("click", function(_element) {
                this.style.textDecoration = "line-through";
                this.style.backgroundColor = "#6d556d";
                this.style.color = "red";

                var t = localStorage.getItem('objekat:' + (i + 1));
                var e = JSON.parse(t);

                var novaOsobina = { col: "#6d556d", text: "line-through", textcolor: "red" };
                e = {...e, ...novaOsobina };
                // Object.assign(e, { col: "#6d556d", text: "line-through", textcolor: "red" });
                localStorage.setItem('objekat:' + (i + 1), JSON.stringify(e));
            });

        }


        //BRISANJE kolone
        cell5.className = "ja";
        var zatvori = document.getElementsByClassName("ja");
        for (let i = 0; i < zatvori.length; i++) {
            zatvori[i].addEventListener("click", function brisanje() {
                this.parentElement.style.display = 'none';

                localStorage.removeItem('objekat:' + (i + 1))
                let data = localStorage.getItem('objekat:' + counter);
                console.log(data);
                for (var member in objekat) delete objekat[member];
                localStorage.setItem('counter', counter - 1);
                obj = JSON.parse(data);
                console.log(obj);
                // localStorage.setItem('objekat:' + i, data);
            });

        }

        //
        //
        //             var ddd = 'objekat:' + counter;
        //             console.log(ddd);
        //             //localStorage.removeItem('objekat:' + (i + 1));
        //             var bbb = localStorage.getItem('objekat:' + counter);
        //             obj = JSON.parse(bbb);
        //             localStorage.removeItem('objekat:' + counter);
        //             localStorage.removeItem('counter');
        //
        //             localStorage.setItem('counter', counter);
        //             localStorage.setItem('objekat:' + counter, JSON.stringify(obj));
        //             console.log(obj);
        //             //n();
        //
        //         });
        //     }

    }

}


//vremenska prognoza
window.weatherWidgetConfig = window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector: ".weatherWidget",
    apiKey: "XTYZ3ABAS2ZHGQ7X3DFY99Y6F",
    location: "Belgrade, SR",
    unitGroup: "metric",
    forecastDays: 5,
    title: "Belgrade,SR",
    showTitle: true,
    showConditions: true
});

(function() {
    var d = document,
        s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();




//ucitavanje podataka pri reloadu taba
document.addEventListener("DOMContentLoaded", function(event) {

    var counter = localStorage.getItem("counter");

    for (var i = 1; i <= counter; i++) {
        table = document.getElementById("myTable");
        row = table.insertRow(-1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);

        cell5.className = "ja";
        row.className = "fff";

        var rowFromStorage = localStorage.getItem("objekat:" + i);
        rowFromStorage = JSON.parse(rowFromStorage);

        console.log(rowFromStorage);

        cell1.innerHTML = rowFromStorage.a;
        cell2.innerHTML = rowFromStorage.b;
        cell3.innerHTML = rowFromStorage.c;
        cell4.innerHTML = rowFromStorage.d;
        cell5.innerHTML = '<span style="cursor: pointer;" class="fas fa-trash-alt fa-border fa-1x"></span>'
        row.style.backgroundColor = rowFromStorage.col;
        row.style.textDecoration = rowFromStorage.text;
        row.style.color = rowFromStorage.textcolor;



        //rad sa redovima
        var oboji = document.getElementsByClassName("fff");
        for (let i = 0; i < oboji.length; i++) {
            oboji[i].addEventListener("click", function(_element) {
                this.style.textDecoration = "line-through";
                this.style.backgroundColor = "#6d556d";
                this.style.color = "red";

                var t = localStorage.getItem('objekat:' + i);
                var e = JSON.parse(t);

                var novaOsobina = { col: "#6d556d", text: "line-through", textcolor: "red" };
                e = {...e, ...novaOsobina };
                //Object.assign(e, { col: "#6d556d", text: "line-through", textcolor: "red" });
                localStorage.setItem('objekat:' + (i + 1), JSON.stringify(e));
            });
        }



        //BRISANJE kolone
        cell5.className = "ja";
        var zatvori = document.getElementsByClassName("ja");
        for (let i = 0; i < zatvori.length; i++) {
            zatvori[i].addEventListener("click", function brisanje() {
                this.parentElement.style.display = 'none';

                localStorage.removeItem('objekat:' + (i + 1));
                var f = localStorage.getItem('objekat:' + (i + 1));
                var hh = JSON.parse(f);
                localStorage.removeItem(hh);
                var counter = localStorage.getItem('counter', counter - 1);
                localStorage.setItem('objekat:' + counter, JSON.stringify(objekat));
            });

        }

    }

});

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


function nikola() {
    var tab = document.getElementById("myTable");
    var n = tab.rows.length;
    console.log(n);
    var v = n.cells.length;
    console.log(v);

}
