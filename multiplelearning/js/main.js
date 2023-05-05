function download() {
    var docLocation = window.location.href + 'img/Célula Animal e Vegetal.png';
    var iframe = $('<iframe src="' + docLocation + '" class="hidden"></iframe>');

    $('body').append(iframe);
}

function menu() {
    let menu = document.querySelector('nav-link');
    if (menu.style.display == 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
}