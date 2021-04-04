/*---------+---------+---------+---------*/
/*             |MOBILE MENU|             */

/*---------+---------+---------+---------*/

function processMenu() {
    $('.navigation').toggleClass('nav-opened');
    setTimeout(() => {
        if (!$('.nav-opened').length) {
            $('.mobile-menu').hide()
        } else {
            $('.mobile-menu').show();
        }
    }, 500);

}

function initEvents() {

    /*             |MOBILE MENU|             */
    $('#mobile-menu-js').click(processMenu);
}

function readyDOMStyle() {
    console.log("Init initEvents")

    initEvents();


}

$(document).ready(readyDOMStyle);