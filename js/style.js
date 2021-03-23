/*---------+---------+---------+---------*/
/*             |MOBILE MENU|             */
/*---------+---------+---------+---------*/

function processMenu() {
    $('.navigation').toggleClass('nav-opened');
}

function initEvents() {

    /*             |MOBILE MENU|             */
    $('#menu-js').click(processMenu);
}

function readyDOMStyle(){
    console.log("Init initEvents")

    initEvents();


}

$(document).ready(readyDOMStyle);