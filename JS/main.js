$(document).ready(function () {
    fadeDiv();
    setDate();
});

function fadeDiv() {
    $("#show").click(function () {
        $(".searchbar").slideToggle("slow");
        $('.searchbar').removeClass('hidden');
    });
}

function setDate() {

var today = new Date();
var year = today.getFullYear();

var rok = document.getElementById('mainfooter');
rok.innerHTML = '<p>Copyright &copy;' + year + ' Adam Stasiun </p>';
}
