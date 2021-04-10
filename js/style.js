/*---------+---------+---------+---------*/
/*             |MOBILE MENU|             */

/*---------+---------+---------+---------*/

function toggleMobileMenu() {
    $('.mobile-content .navigation').toggleClass('nav-opened');
    /*setTimeout(() => {
        if (!$('.mobile-content .nav-opened').length) {
            $('.mobile-menu').hide();
        } else {
            $('.mobile-menu').show();
        }
    }, 500);*/

}

/*---------+---------+---------+---------*/
/*             |DESKTOP MENU|            */

/*---------+---------+---------+---------*/


function restoreDefaultMenu() {
    //perhaps dont need this method hierarchy

    /*
    * remove menu-content-opened
    * remove opened from zeroMenuItemContentTarget section
    * change desktop-menu back to --menu-items-length: 3;
    * remove htmlLoadZeroMenuItemContent content
    * if zero content opened call     closeCaseStudyMenuJs();
    * then replace headings of menu items back to
    * */
    if ($('.menu-content-opened').length>0) {
        closeCaseStudyMenuJs();
        hideMenuItemContent();
    } else{
        hideMenuItemContent();
    }
}

function toggleDesktopMenu() {
    console.log('toggleDesktopMenu');
    const desktopContentNavigation = $('.desktop-content .navigation');

    if(!desktopContentNavigation.hasClass('nav-opened')){
        desktopContentNavigation.addClass('nav-opened');
        showMenuItemContent();
    }
    else {
        desktopContentNavigation.removeClass('nav-opened');

        restoreDefaultMenu();
    }
}

function showMenuItemContent() {
    $('.desktop-menu').css('--menu-items-length', 3);//TODO HARDCODED
}

function hideMenuItemContent() {
    $('.desktop-menu').css('--menu-items-length', 3);//TODO HARDCODED
    setTimeout(()=>{
        $('#htmlLoadZeroMenuItemContent').remove();
    },500)
    $('#menu-item-0-js').removeClass('touched');
}

function showCaseStudyContent(menuElementId) {
    switch (menuElementId) {
        case 'menu-item-0-js':
            toggleZeroMenuItemContent()
            break;
        default:
            console.log('menuElementId not found!');
            break;
    }

    function toggleZeroMenuItemContent() {
        const menuItem0Js = $('#menu-item-0-js');
        if (!menuItem0Js.hasClass('touched')) {
            menuItem0Js.addClass('touched');
            $('.desktop-menu')
                .append(htmlLoadZeroMenuItemContent)
                .css('--menu-items-length', caseStudyItems);
        }
    }

    function toggleOneMenuItemContent() {
        //TBD
    }

    function toggleTwoMenuItemContent() {
        //TBD
    }


}


function readyDOMStyle() {
    console.log("Style setups")

}

$(function () {
    console.log("style.js Init")
    readyDOMStyle();
});


/*
*
*TODO HARDCODE JS - replace to normal exec function and loading after content is loaded
*
* */

function caseStudyMenuJs(caseStudyMenuItem) {
    if (!$('.menu-content-opened').length) {
        $('.desktop-content .navigation-content').addClass('menu-content-opened');
        $('.nav-opened').css('--case-study-items', caseStudyItems);
    }
    if (!caseStudyMenuItem.classList.contains('opened')) caseStudyMenuItem.classList.add('opened');
    const previousSiblings = getPreviousSiblings(caseStudyMenuItem);
    previousSiblings.forEach(div => div.classList.add('opened'));

    const nextSiblings = getNextSiblings(caseStudyMenuItem);
    nextSiblings.forEach(div => div.classList.remove('opened'));

}

function closeCaseStudyMenuJs() {
    $('.menu-content-opened').removeClass('menu-content-opened');
    document.querySelectorAll('#zeroMenuItemContentTarget .section')
        .forEach(section => section.classList.remove('opened'));
}