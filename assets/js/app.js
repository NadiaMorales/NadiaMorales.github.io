$(document).ready(() => {
    $('#sobreMi').hide();
    $('#habilidades').hide();
    $('#proyecto').hide();
    $('#contacto').hide();
});

$('.home').click(() => {
    $('#sobreMi').hide();
    $('#habilidades').hide();
    $('#proyecto').hide();
    $('#contacto').hide();
    $('#home').show();
});

$('.sobreMi').click(() => {
    $('#home').hide();
    $('#habilidades').hide();
    $('#proyecto').hide();
    $('#contacto').hide();
    $('#sobreMi').show();
});

$('.habilidades').click(() => {
    $('#home').hide();
    $('#sobreMi').hide();
    $('#proyecto').hide();
    $('#contacto').hide();
    $('#habilidades').show();
});

$('.proyecto').click(() => {
    $('#home').hide();
    $('#sobreMi').hide();
    $('#habilidades').hide();
    $('#contacto').hide();
    $('#proyecto').show();
});

$('.contacto').click(() => {
    $('#home').hide();
    $('#sobreMi').hide();
    $('#habilidades').hide();
    $('#proyecto').hide();
    $('#contacto').show();
});

$('.atras').click(() => {
    $('#sobreMi').hide();
    $('#habilidades').hide();
    $('#proyecto').hide();
    $('#contacto').hide();
    $('#home').show();
});

$('.atras2').click(() => {
    $('#home').hide();
    $('#habilidades').hide();
    $('#proyecto').hide();
    $('#contacto').hide();
    $('#sobreMi').show();
});

$('.atras3').click(() => {
    $('#home').hide();
    $('#sobreMi').hide();
    $('#proyecto').hide();
    $('#contacto').hide();
    $('#habilidades').show();
});

$('.atras4').click(() => {
    $('#home').hide();
    $('#sobreMi').hide();
    $('#habilidades').hide();
    $('#contacto').hide();
    $('#proyecto').show();
});