$(document).ready(function() {
    
    const tel = '(00) 00000-0000';

    $('#telefone').mask(tel);

    $('#form-fale-conosco').validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome",
                minlength: "Seu nome deve ter pelo menos 2 caracteres"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            mensagem: {
                required: "Por favor, insira sua mensagem",
                minlength: "Sua mensagem deve ter pelo menos 10 caracteres"
            }
        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            error.addClass('text-danger');
            error.insertAfter(element);
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});


