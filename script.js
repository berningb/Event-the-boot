var mouseX;
var mouseY;
$(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY - 300;
});
$(".hover").on("click", function () {
    $('#tobeshown').css({
        'top': mouseY,
        'left': mouseX,
        'visibility': "visible",
    }).fadeIn("fast");
});

$(".hover").mouseout(function () {
    $('#tobeshown').fadeOut('slow');
});