$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12) 91234-1234'
    });

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um e-mail válido',
            mensagem: 'Por favor, insira uma mensagem'
        },
        submitHandler: function(form) {
            var valorNome = $('#nome').val();
            alert(`Sua mensagem nos foi enviada, ${valorNome}`)
            $('#nome').val('');
            $('#email').val('');
            $('#telefone').val('');
            $('#mensagem').val('');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos. Cadastro não enviado.`)
            }
        }
    });
});