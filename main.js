$(document).ready(function() {
    $('#carousel-imagem').slick({
        autoplay: true,
    });

    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    })
})