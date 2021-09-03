//funkcija za insert u bazu
function doInsert() {
    cell1.id = "cell1";
    cell2.id = "cell2";
    cell3.id = "cell3";
    cell4.id = "cell4";
    var a = document.getElementById("fname").value;
    var b = document.getElementById("tname").value;
    var c = document.getElementById("dname").value;
    var d = document.getElementById("gname").innerHTML;

    var e; //document.getElementById("cell5").innerHTML;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "server.php", true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            console.log(this.responseText);
    };

    ajax.send("fname=" + a + "&tname=" + b + "&dname=" + c + "&gname=" + d + "&fas fa-check=" + e + "&do_insert=1");
    return false;
}





//funkcija za brisanje u bazi
function doDelete() {

    var table = document.getElementById("myTable");
    var rows = table.rows;
    for (var i = 1; i < rows.length; i++) {
        rows[i].onclick = (function(e) {
            var rowid = (this.cells[0].innerHTML);
            console.log(rowid);
            // var j = 0;
            // var td = e.target;
            // while ((td = td.previousElementSibling) != null)
            //     j++;
            // alert(rows[0].cells[j].innerHTML);

            var ajax = new XMLHttpRequest();
            ajax.open("POST", "server.php", true);
            ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            ajax.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200)
                    console.log(this.responseText);
            };

            ajax.send("myTable=" + rowid + "&do_delete=1");
            return false;
        });
    }
}





//funkcija za check znak
function doCheck() {

    var table = document.getElementById("myTable");
    var rows = table.rows;
    for (var i = 1; i < rows.length; i++) {
        rows[i].onclick = (function(e) {
            var rowid = (this.cells[0].innerHTML);
            console.log(rowid);
            // var j = 0;
            // var td = e.target;
            // while ((td = td.previousElementSibling) != null)
            //     j++;
            // alert(rows[0].cells[j].innerHTML);

            var ajax = new XMLHttpRequest();
            ajax.open("POST", "server.php", true);
            ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            ajax.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200)
                    console.log(this.responseText);
            };

            ajax.send("myTable=" + rowid + "&do_check=1");
            return false;
        });
    }
}





function doUpdate(form) {
    cell1.id = "cell1";
    cell2.id = "cell2";
    cell3.id = "cell3";
    cell4.id = "cell4";
    cell5.id = "cell5";
    var a = document.getElementById("cell1").innerHTML;
    var b = document.getElementById("cell2").innerHTML;
    var c = document.getElementById("cell3").innerHTML;
    var d = document.getElementById("cell4").innerHTML;
    var e = document.getElementById("cell5").innerHTML;
    //var lastName = form.last_name.value;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "server.php", true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            alert(this.responseText);
    };

    ajax.send("cell1=" + a + "&cell2=" + b + "&cell3" + c + "&cell4" + d + "&cell5" + e + "&do_update=1");

    return false;
}






//funkcija za povlacenje podataka iz baze
var ajax = new XMLHttpRequest();
ajax.open("GET", "deletephp.php", true);
ajax.send();

ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);

        for (var a = 0; a < data.length; a++) {
            var prva = data[a].cell1;
            var druga = data[a].cell2;
            var treca = data[a].cell3;
            var cetvrta = data[a].cell4;
            var peta = data[a].cell5;

            table = document.getElementById("myTable");
            row = table.insertRow(-1);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell3 = row.insertCell(2);
            cell4 = row.insertCell(3);
            cell5 = row.insertCell(4);
            cell6 = row.insertCell(5);
            cell1.innerHTML = prva;
            cell2.innerHTML = druga;
            cell3.innerHTML = treca;
            cell4.innerHTML = cetvrta;
            cell5.innerHTML = '<span style="cursor: pointer;" id="delete" class="fas fa-trash-alt fa-border fa-1x" onclick="doDelete();deleteRow(this)"></span>'
            if (peta === "0") {
                cell6.innerHTML = '<span style="cursor: pointer; color: #04AA6D; text-decoration:none;" id="boja" class="fas fa-check fa-border fa-1x" onclick="doInsert()"></span>'
            } else {
                cell6.innerHTML = '<span style="cursor: pointer; color: red; text-decoration:line-through;" id="boja" class="fas fa-check fa-border fa-1x" onclick="doInsert()"></span>'
            }

            row.className = "fff";
            cell5.className = "ja";
            cell6.id = "cell6";
            cell1.id = "cell1";
        }
        obojiKolonu();
    }
};