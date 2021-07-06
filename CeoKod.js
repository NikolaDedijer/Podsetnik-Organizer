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




//reset funkcija
function funkcijaF() {
    document.getElementById("rt").reset();
}



//funkcija za dodavanje reda sa unetim vrednostima i dodavanje trenutnog datuma i vremena
function myFunction() {

    var polje = document.getElementById("fname").value;
    var poljeDva = document.getElementById("tname").value;
    var poljeTri = document.getElementById("dname").value;
    if (polje === '' || poljeDva === '' || poljeTri === '' || polje === '' && poljeDva === '' || polje === '' && poljeTri === '' || poljeDva === '' && poljeTri === '') {
        alert("Niste popunili sva polja!");
    } else {
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        var danuNedelji = new Array(7);
        danuNedelji[0] = "Sun";
        danuNedelji[1] = "Mon";
        danuNedelji[2] = "Thu";
        danuNedelji[3] = "Wen";
        danuNedelji[4] = "Thu";
        danuNedelji[5] = "Fri";
        danuNedelji[6] = "Sat";

        var today = new Date();
        var date = danuNedelji[today.getDay()] + ' ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear() + "<br>";
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date + '  ' + time;

        cell1.innerHTML = document.Z.ime.value;
        cell2.innerHTML = document.Z.kontakt.value;
        cell3.innerHTML = document.Z.komentar.value;
        cell4.innerHTML = dateTime;
        //cell5.innerHTML = '<span style="cursor: pointer;" class="close">&times;</span>'
        cell5.innerHTML = '<span style="cursor: pointer;" class="fas fa-trash-alt fa-border fa-1x"></span>'



        //rad sa redovima
        row.className = "fff";
        var otvori = document.getElementsByClassName("fff");
        for (let i = 0; i < otvori.length; i++) {
            otvori[i].addEventListener("click", function(_element) {
                this.style.textDecoration = "line-through";
                this.style.backgroundColor = "yellow";


                var counter2 = localStorage.getItem('counter2');
                counter2++;
                localStorage.setItem("boja" + counter2, "yellow");
                localStorage.setItem('counter2', counter2);

            });
        }



        //Ubacivanje podataka u localstorage
        var objekat = {
            a: cell1.innerHTML,
            b: cell2.innerHTML,
            c: cell3.innerHTML,
            d: cell4.innerHTML,
            //e: stil //row.style.backgroundColor
        }
        var counter = localStorage.getItem('counter');
        counter++;
        localStorage.setItem('objekat:' + counter, JSON.stringify(objekat));
        localStorage.setItem('counter', counter);




        //funkcija za umanjenje broja na counteru
        //function umanjiCounter() {
        //    var counterManje = counter - 1;
        //    localStorage.setItem('counter', counterManje);
        //}




        //BRISANJE kolone
        cell5.className = "ja";
        var zatvori = document.getElementsByClassName("ja");
        for (let i = 0; i < zatvori.length; i++) {
            zatvori[i].addEventListener("click", function brisanje() {
                this.parentElement.style.display = 'none';

                // umanjiCounter();
            });

        }


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

    for (let i = 1; i <= counter; i++) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell5.className = "ja";
        row.className = "fff";

        var rowFromStorage = localStorage.getItem("objekat:" + i);
        rowFromStorage = JSON.parse(rowFromStorage);

        console.log(rowFromStorage);


        cell1.innerHTML = rowFromStorage.a;
        cell2.innerHTML = rowFromStorage.b;
        cell3.innerHTML = rowFromStorage.c;
        cell4.innerHTML = rowFromStorage.d;
        //cell5.innerHTML = '<span style="cursor: pointer;" class="close">&times;</span>'
        cell5.innerHTML = '<span style="cursor: pointer;" class="fas fa-trash-alt fa-border fa-1x"></span>'

        row.style.backgroundColor = localStorage.getItem("boja" + i);


        //rad sa redovima
        var otvori = document.getElementsByClassName("fff");
        for (let i = 0; i < otvori.length; i++) {
            otvori[i].addEventListener("click", function(_element) {
                this.style.textDecoration = "line-through";
                this.style.backgroundColor = "yellow";
            });
        }



        //BRISANJE kolone
        cell5.className = "ja";
        var zatvori = document.getElementsByClassName("ja");
        for (let i = 0; i < zatvori.length; i++) {
            zatvori[i].addEventListener("click", function brisanje() {
                this.parentElement.style.display = 'none';

                // umanjiCounter();
            });

        }

    }

});
