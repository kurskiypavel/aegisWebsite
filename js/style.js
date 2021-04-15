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
    if ($('.menu-content-opened').length > 0) {
        closeCaseStudyMenuJs();
        hideMenuItemContent();
    } else {
        hideMenuItemContent();
    }
}

function toggleDesktopMenu() {
    const desktopContentNavigation = $('.desktop-content .navigation');

    if (!desktopContentNavigation.hasClass('nav-opened')) {
        console.log('Open 3 menu items')
        desktopContentNavigation.addClass('nav-opened');
        $('.navigation-arrow-up').addClass('rotated');
        showMenuItemContent();
    } else {
        console.log('Close 3 menu items')
        if ($('.touched').length > 0) {
            $('.zeroMenuItemContent').addClass('closed');
            restoreDefaultMenu();
        } else {
            desktopContentNavigation.removeClass('nav-opened');
            $('.navigation-arrow-up').removeClass('rotated');
            restoreDefaultMenu();
        }


    }
}

function showMenuItemContent() {
    $('.desktop-menu').css('--menu-items-length', 3);//TODO HARDCODED
}

function hideMenuItemContent() {
    $('.desktop-menu').css('--menu-items-length', 3);//TODO HARDCODED
    setTimeout(() => {
        // $('#htmlLoadZeroMenuItemContent').remove();
    }, 500)
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
        console.log('Open 6 items')
        const menuItem0Js = $('#menu-item-0-js');
        if (!menuItem0Js.hasClass('touched')) {
            menuItem0Js.addClass('touched');

            $('.desktop-menu')
                .append(htmlLoadZeroMenuItemContent);
            $('.zeroMenuItemContent.closed').removeClass('closed');
            $('.desktop-menu').css('--menu-items-length', caseStudyItems);
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

/*---------+---------+---------+--------+-----------*/
/*             |DESKTOP CASE STUDY MENU|            */

/*---------+---------+---------+--------+-----------*/

function caseStudyMenuJs(caseStudyMenuItem) {
    if (!$('.menu-content-opened').length) {
        $('.desktop-content .navigation-content').addClass('menu-content-opened');
        $('.nav-opened').css('--case-study-items', caseStudyItems);
    }
    caseStudyMenuItem.children[0].children[1].innerText = '↓';
    if (!caseStudyMenuItem.parentElement.classList.contains('opened')) caseStudyMenuItem.parentElement.classList.add('opened');
    const previousSiblings = getPreviousSiblings(caseStudyMenuItem.parentElement);
    previousSiblings.forEach(div => div.classList.add('opened'));

    const nextSiblings = getNextSiblings(caseStudyMenuItem.parentElement);
    nextSiblings.forEach(div => div.classList.remove('opened'));

}

function closeCaseStudyMenuJs() {
    $('.menu-content-opened').removeClass('menu-content-opened');
    $('#zeroMenuItemContentTarget .section').removeClass('opened');
    $('.case-study-arrow').text('↑');
}

function closeMenuTitlePage() {
    $('.case-study-panel__inner').removeClass('opened');
    $('.menu-content-opened').removeClass('menu-content-opened');
    $('.case-study-arrow').text('↑');

}


/*---------+---------+---------+--------+-----------*/
/*             |DESKTOP CONTACT MENU|               */
/*---------+---------+---------+--------+-----------*/

function toggleDesktopContact() {
    console.log(333);
    const contactMenu = $('.contact-menu');
    contactMenu.toggleClass('opened');

    if (contactMenu.hasClass('opened')){
        $('.contact-item-arrow').text('↓');
    } else {
        $('.contact-item-arrow').text('↑');
    }
}