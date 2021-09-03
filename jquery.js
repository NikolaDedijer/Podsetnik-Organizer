$(document).ready(function() {
    $("#faf").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".fff").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});