/*---------+---------+---------+---------*/
/*             |MOBILE MENU|             */

/*---------+---------+---------+---------*/

function toggleMobileMenu() {
    const mobileContentNavigation = $('.mobile-content .navigation');
    if (!mobileContentNavigation.hasClass('nav-opened')) {
        console.log('Open 3 menu mobile items')
        mobileContentNavigation.addClass('nav-opened');
    } else {
        console.log('Close 3 menu mobile items')
        //restore default menu
        mobileContentNavigation.removeClass('nav-opened');
    }
}

function showCaseStudyMobileContent(menuElementId) {
    switch (menuElementId) {
        case 'menu-item-0-mobile-js':
            toggleZeroMenuItemMobileContent()
            break;
        default:
            console.log('mobile menuElementId not found!');
            break;
    }

    function toggleZeroMenuItemMobileContent() {
        console.log('Open 6 mobile items')
        const menuItem0MobileJs = $('#menu-item-0-mobile-js');
        if (!menuItem0MobileJs.hasClass('touched')) {
            menuItem0MobileJs.addClass('touched');
            $('#caseStudyMobileContent')
                .css('--menu-items-length', caseStudyItems)
                .addClass('opened');
            $('.nav-opened').addClass('nav-opened-cases');
            $('.case-study-panel__inner').addClass('preopened');
        } else {
            menuItem0MobileJs.removeClass('touched');
            $('#caseStudyMobileContent')
                .removeClass('opened');
            $('.nav-opened').removeClass('nav-opened-top');
        }
    }

    function toggleOneMenuItemMobileContent() {
        //TBD
    }

    function toggleTwoMenuItemMobileContent() {
        //TBD
    }


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
    closeContactFromMenu();

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


$(function () {
    console.log("style.js Init")
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
    //menu opened - close
    // menu closed - skip
    //opened case study - close cases + close menu
    console.log('toggleDesktopContact');
    const contactMenu = $('.contact-menu');
    contactMenu.toggleClass('opened');

    if (contactMenu.hasClass('opened')){
        $('.contact-item-arrow').text('↓');
    } else {
        $('.contact-item-arrow').text('↑');
    }
    $('.desktop-content .navigation').removeClass('nav-opened');
    $('.navigation-arrow-up').removeClass('rotated');
    $('.zeroMenuItemContent').addClass('closed');
    restoreDefaultMenu();
}

function closeContactFromMenu() {
    $('.contact-menu').removeClass('opened');
    $('.contact-item-arrow').text('↑');
}


/*---------+---------+---------+--------+-----------*/
/*             |DESKTOP INSIGHTS MENU|            */

/*---------+---------+---------+--------+-----------*/

function showInsightsContent(){
    console.log('showInsightsContent');
    $('.desktop-menu').addClass('opened');
    $('.navigation-content').addClass('white-back');
    $('#menu-item-2-js .menu-item-arrow').text('↓');
    $('#menu-item-2-js .menu-item-arrow-bottom').text('↓');
    $('.containery').addClass('height-0');

}
function closeInsightsContent(e){
    console.log('closeInsightsContent');
    $('.desktop-menu').removeClass('opened');
    $('.navigation-content').removeClass('white-back');
    $('#menu-item-2-js .menu-item-arrow').text('↑');
    $('#menu-item-2-js .menu-item-arrow-bottom').text('↑');
    $('.containery').removeClass('height-0');
    e.stopPropagation();
}

function slideFilterTags() {
    const tagList = $('.tag-list');
    if (tagList.hasClass('slided')){
        tagList.slideDown().toggleClass('slided');
    } else{
        tagList.slideUp().toggleClass('slided');
    }
}