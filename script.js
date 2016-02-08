var mouseX;
var mouseY;
$(document).mousemove(function (e) {
    mouseX = e.pageX - 140;
    mouseY = e.pageY - 290;
});
$(".hover").on("click", function () {
    $('#tobeshown').css({
        'top': mouseY,
        'left': mouseX,
    }).fadeIn("fast");
});

$(".hover").mouseout(function () {
    $('#tobeshown').fadeOut('slow');
});