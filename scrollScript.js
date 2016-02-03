$('.nav li a').click(function (event) {
    event.preventDefault();
    var navOffset = $('.navbar').height();
    console.log(navOffset);
    var hash = this.hash;
    console.log($(hash).offset().top);
    $('html, body').animate({
        scrollTop: $(hash).offset().top - navOffset
    }, 300, function () {
        window.location.hash = hash;
    });
});

$('#downarrow a').click(function (event) {
    event.preventDefault();
    var navOffset = $('.navbar').height();
    console.log(navOffset);
    var hash = this.hash;
    console.log($(hash).offset().top);
    $('html, body').animate({
        scrollTop: $(hash).offset().top - navOffset
    }, 300, function () {
        window.location.hash = hash;
    });
});