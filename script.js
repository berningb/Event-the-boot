var mouseX;
var mouseY;
$(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY - 220;
});
$(".hover").on("click", function () {
    $('#tobeshown').css({
        'height': "250px",
        'width': "300px",
        'top': mouseY,
        'left': mouseX,
        'background-color': "yellow"
    }).fadeIn("fast");
});

$(".hover").mouseout(function () {
    $('#tobeshown').fadeOut('slow');
});