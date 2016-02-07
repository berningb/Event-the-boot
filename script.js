var mouseX;
var mouseY;
$(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY - 220;
});
$("#hover").mouseover(function () {
    $('#tobeshown').css({
        'top': mouseY,
        'left': mouseX,
        'background-color': "yellow"
    }).fadeIn("slow");
});

$("#hover").mouseout(function () {
    $('#tobeshown').fadeOut('slow');
});