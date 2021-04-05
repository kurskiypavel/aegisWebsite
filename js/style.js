/*---------+---------+---------+---------*/
/*             |MOBILE MENU|             */
/*---------+---------+---------+---------*/

function toggleMobileMenu() {
    $('.mobile-content .navigation').toggleClass('nav-opened');
    setTimeout(() => {
        if (!$('.mobile-content .nav-opened').length) {
            $('.mobile-menu').hide();
        } else {
            $('.mobile-menu').show();
        }
    }, 1000);

}

/*---------+---------+---------+---------*/
/*             |DESKTOP MENU|             */
/*---------+---------+---------+---------*/



function restoreDefaultMenu() {
    hideMenuItemContent();
}

function toggleDesktopMenu() {
    $('.desktop-content .navigation').toggleClass('nav-opened');
    restoreDefaultMenu();
}

function hideMenuItemContent() {
    //TODO write some code here
    /*
    * remove sections appended
    *
    * */
    $('.desktop-menu').css('--menu-items-length',3);//TODO HARDCODED
    $('#htmlLoadZeroMenuItemContent').remove();
    $('#menu-item-0-js').removeClass('touched');
}

function showMenuItemContent(menuElementId) {
    switch (menuElementId) {
        case 'menu-item-0-js': toggleZeroMenuItemContent()
            break;
        default:
            console.log('menuElementId not found!');
            break;
    }

    function toggleZeroMenuItemContent() {
        if (!$('#menu-item-0-js').hasClass('touched')) {
            $('#menu-item-0-js').addClass('touched');
            //replace all menu items with case-studies;
            $('.desktop-menu')
                .append(
                    $('<div id="htmlLoadZeroMenuItemContent">')
                        .load('htmlLoad/zeroMenuItemContent.html #zeroMenuItemContentTarget'))
                .css('--menu-items-length',6);//TODO HARDCODED
        }
    }

    function showOneMenuItemContent() {
        //TBD
    }

    function showTwoMenuItemContent() {
        //TBD
    }



}

function initEvents() {

    /*
    * MOBILE EVENTS
    * */
    $('#mobile-menu-js').click(toggleMobileMenu);

    /*
    * DESKTOP EVENTS
    * */
    $('#desktop-menu-js').click(toggleDesktopMenu);
    $('#menu-item-0-js').click(()=>showMenuItemContent('menu-item-0-js'));
}

function readyDOMStyle() {
    console.log("Init initEvents")
    initEvents();
}

$(function() {
    readyDOMStyle();
});