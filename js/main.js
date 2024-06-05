$(document).ready(function() {
    $('#carousel-imagem').slick({
        autoplay: true,
    });

    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    })

    $('nav ul li a').click(function() {
        $('nav').slideUp();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            pacote: {
                required: false
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            mensagem: 'Por favor, escreva uma mensagem.'
        },
        submitHandler: function(form) {
            alert("O formulário foi enviado com sucesso!");
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existe(m) ${camposIncorretos} campo(s) incorreto(s)!`)
            }
        }
    })

    $('.lista-viagem button').click(function() {
        const destino = $('#contato');
        const nomePacote = $(this).parent().find('h3').text();

        $('#pacote').val(nomePacote);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})