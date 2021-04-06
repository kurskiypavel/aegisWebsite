/*
* VAR SETTERS
* */
const menuItemsLength = 6; //TODO HARDCODED
const htmlLoadPath = "htmlLoad";
const htmlLoadZeroMenuItemContent = $('<div id="htmlLoadZeroMenuItemContent">')
    .load(`${htmlLoadPath}/zeroMenuItemContent.html #zeroMenuItemContentTarget`);

/*
* METHOD REALIZATION
* */
function initEvents() {

    /*
    * MOBILE EVENTS
    * */
    $('#mobile-menu-js').on('click', () => {
        toggleMobileMenu()
    });

    /*
    * DESKTOP EVENTS
    * */

    /*  MENU EVENTS */
    $('#desktop-menu-js').on('click', () => {
        toggleDesktopMenu();
    });
    $('#menu-item-0-js').on('click', () => {
        showMenuItemContent('menu-item-0-js');
    });
    $(document).on("click", (e) => {
        const navigation = $('.navigation');
        if ($('.desktop-content .navigation').hasClass('nav-opened')
            && !navigation.is(e.target)
            && navigation.has(e.target).length === 0) {
            toggleDesktopMenu();
        }
    });
}

function readyDOMMain() {
    console.log("Init initEvents")
    initEvents();
}

$(function () {
    console.log("main.js Init")
    readyDOMMain();
});