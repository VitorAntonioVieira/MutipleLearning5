function download() {
    var docLocation = window.location.href + 'img/Célula Animal e Vegetal.png';
    var iframe = $('<iframe src="' + docLocation + '" class="hidden"></iframe>');

    $('body').append(iframe);
}