/*---------+---------+---------+---------*/
/*             |MOBILE MENU|             */

/*---------+---------+---------+---------*/

function toggleMobileMenu() {
    const mobileContentNavigation = $('.mobile-content .navigation');

    if ($('.contact-menu.opened').length > 0) {
        toggleMobileContact();
    }
    if ($('.team-menu.opened').length > 0) {
        toggleMobileTeam();
    }

    if (!mobileContentNavigation.hasClass('nav-opened')) {
        console.log('Open 3 menu mobile items')
        mobileContentNavigation.addClass('nav-opened');
    } else {
        //restore default menu
        if ($('.nav-opened-cases').length > 0) {
            //close nav-opened-cases
            toggleZeroMenuItemMobileContent();
        } else if ($('.nav-opened-by-content').length > 0) {
            restoreDefaultMobileMenu();
        } else {
            console.log('Close 3 menu mobile items')
            //close 3 menu items
            mobileContentNavigation.removeClass('nav-opened');
        }
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

}

function restoreDefaultMobileMenu() {
    closeMobileMenuTitlePage();

}

function toggleZeroMenuItemMobileContent() {
    const menuItem0MobileJs = $('#menu-item-0-mobile-js');
    closeMobileInsightsContent();
    closeMobileProjectsContent();
    if (!menuItem0MobileJs.hasClass('touched')) {
        console.log('Open 6 mobile items')

        menuItem0MobileJs.addClass('touched');
        $('.containery').addClass('displayNone');
        $('#caseStudyMobileContent')
            .css('--menu-items-length', caseStudyItems)
            .addClass('opened');
        $('.nav-opened').addClass('nav-opened-cases');
        $('.case-study-panel__inner').addClass('preopened');
        caseStudyMobileMenuJs(document.querySelector('.case-study-panel__header.default'));
    } else {
        console.log('Close 6 mobile items')
        $('.containery').removeClass('displayNone');

        menuItem0MobileJs.removeClass('touched');
        $('#caseStudyMobileContent')
            .removeClass('opened');
        $('.nav-opened').removeClass('nav-opened-cases');
        $('.case-study-panel__inner').removeClass('preopened');
    }
}

/*---------+---------+---------+--------+-----------*/
/*             |MOBILE CASE STUDY MENU|            */

/*---------+---------+---------+--------+-----------*/
function caseStudyMobileMenuJs(caseStudyMobileMenuItem) {

    $('.mobile-content .navigation')
        .removeClass('nav-opened-cases')
        .addClass('nav-opened-by-content');

    caseStudyMobileMenuItem.parentElement.classList.remove('preopened');
    caseStudyMobileMenuItem.parentElement.classList.add('opened');
    // caseStudyMobileMenuItem.children[0].children[1].children[1].innerText = '↓';
    // $('#caseStudyMobileContent .case-study-panel__inner.opened .case-study-arrow').text('↓')
    // $('#caseStudyMobileContent .case-study-panel__inner.preopened .case-study-arrow').text('↑');
    const previousSiblings = getPreviousSiblings(caseStudyMobileMenuItem.parentElement);
    previousSiblings.forEach(div => {
        div.classList.remove('preopened');
        div.classList.add('opened');
    });

    const nextSiblings = getNextSiblings(caseStudyMobileMenuItem.parentElement);
    nextSiblings.forEach(div => {
        div.classList.remove('opened');
        div.classList.add('preopened');
    });
}

function closeMobileMenuTitlePage() {
    $('.case-study-panel__inner')
        .removeClass('opened')
        .addClass('preopened');
    $('.nav-opened-by-content')
        .removeClass('nav-opened-by-content')
        .addClass('nav-opened-cases');
    // $('.case-study-arrow').text('↑');
    toggleMobileMenu();

}

/*---------+---------+---------+--------+-----------*/
/*             |MOBILE CONTACT MENU|               */

/*---------+---------+---------+--------+-----------*/

function toggleMobileContact() {
    const mobileContent = $('.mobile-content .contact-menu');
    if ($('.team-menu.opened').length > 0) {
        toggleMobileTeam();
    }

    if (!mobileContent.hasClass('opened')) {

        if ($('#caseStudyMobileContent').hasClass('opened')) {
            toggleZeroMenuItemMobileContent();
        }

        console.log('Open menu contact');
        $('.mobile-content .navigation')
            .addClass('nav-opened')
            .addClass('nav-opened-by-content');
        mobileContent.addClass('opened');
        $('body').css({'overflow': 'hidden', 'height': '0'});
    } else {
        console.log('Close menu contact');
        $('.mobile-content .navigation')
            .removeClass('nav-opened')
            .removeClass('nav-opened-by-content');
        mobileContent.removeClass('opened');
        $('body').css({'overflow': 'unset', 'height': 'initial'});


    }
}

/*---------+---------+---------+--------+-----------*/
/*             |MOBILE TEAM MENU|               */

/*---------+---------+---------+--------+-----------*/

function toggleMobileTeam() {
    const mobileContent = $('#teamMobileContent');
    if ($('.contact-menu.opened').length > 0) {
        toggleMobileContact();
    }
    if (!mobileContent.hasClass('opened')) {

        if ($('#caseStudyMobileContent').hasClass('opened')) {
            toggleZeroMenuItemMobileContent();
        }

        console.log('Open menu team');
        $('.mobile-content .navigation')
            .addClass('nav-opened')
            .addClass('nav-opened-by-content');
        mobileContent.addClass('opened');
        $('body').css({'overflow': 'hidden', 'height': '0'});
    } else {
        console.log('Close menu team');
        $('.mobile-content .navigation')
            .removeClass('nav-opened')
            .removeClass('nav-opened-by-content');
        mobileContent.removeClass('opened');
        $('body').css({'overflow': 'unset', 'height': 'initial'});


    }
}

function teamMobileMenuJs(teamMobileMenuItem) {

    const teamMobileMenuItemClassList = teamMobileMenuItem.parentElement.classList;
    teamMobileMenuItemClassList.remove('preopened');
    teamMobileMenuItemClassList.remove('slided');
    teamMobileMenuItemClassList.add('opened');
    const previousSiblings = getPreviousSiblings(teamMobileMenuItem.parentElement);
    previousSiblings.forEach(div => {
        div.classList.remove('preopened');
        div.classList.add('opened');
        div.classList.add('slided');
        div.scrollTop = 0;
    });

    const nextSiblings = getNextSiblings(teamMobileMenuItem.parentElement);
    nextSiblings.forEach(div => {
        div.classList.remove('opened');
        div.classList.add('preopened');
    });
}


/*---------+---------+---------+--------+-----------*/
/*             |MOBILE INSIGHTS MENU|            */

/*---------+---------+---------+--------+-----------*/

function showInsightsMobileContentFromHomepage(e) {
    e.stopPropagation();
    toggleMobileMenu();
    showMobileInsightsContent();
}

function showMobileInsightsContent() {
    closeMobileProjectsContent();
    console.log('showMobileInsightsContent');
    $('.navigation').addClass('nav-opened-by-insights');
    $('.containery').addClass('displayNone');
}

function closeMobileInsightsContent(e) {
    if (e) e.stopPropagation();
    console.log('closeMobileInsightsContent');
    $('.containery').removeClass('displayNone');
    $('.navigation').removeClass('nav-opened-by-insights');

}


/*---------+---------+---------+--------+-----------*/
/*             |MOBILE PROJECTS MENU|               */

/*---------+---------+---------+--------+-----------*/
function showMobileProjectsContent() {
    console.log('showMobileProjectsContent');
    closeMobileInsightsContent();
    $('.navigation').addClass('nav-opened-by-projects');
    $('.containery').addClass('displayNone');
    $('#menu-item-2-mobile-js').addClass('preopened');
}

function closeMobileProjectsContent(e) {
    if (e) e.stopPropagation();
    console.log('closeMobileProjectsContent');
    $('.containery').removeClass('displayNone');
    $('.navigation').removeClass('nav-opened-by-projects');
    $('#menu-item-2-mobile-js').removeClass('preopened');

}

function slideMobileFilterTags() {
    const tagList = $('.mobile-menu .tag-list');
    if (tagList.hasClass('slided')) {
        tagList.slideDown().toggleClass('slided');
    } else {
        tagList.slideUp().toggleClass('slided');
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
    $('.opened-by-cases').removeClass('opened-by-cases');
    // $('.desktop-menu>.sections').removeClass('displayNone');
    $('#zeroMenuItemContentTarget .case-study-arrow').text('↑');
    closeInsightsContent();
    closeProjectsContent();
    closeContactFromMenu();
    closeTeamFromMenu();

    if (!desktopContentNavigation.hasClass('nav-opened')) {
        console.log('Open 3 menu items')
        desktopContentNavigation.addClass('nav-opened');
        $('.navigation-arrow-up').addClass('rotated');
        showMenuItemContent();
        activateShadow();
    } else {
        console.log('Close 3 menu items')
        if ($('.touched').length > 0) {
            $('.zeroMenuItemContent').addClass('closed');
            restoreDefaultMenu();
        } else {
            desktopContentNavigation.removeClass('nav-opened');
            $('.navigation-arrow-up').removeClass('rotated');
            restoreDefaultMenu();
            deactivateShadow();
        }
    }
}

function showMenuItemContent() {
    $('.desktop-menu').css('--menu-items-length', 3);//TODO HARDCODED
}

function hideMenuItemContent() {
    console.log('hideMenuItemContent')
    if ($('.new-html.inactive') === 0) {
        activateShadow();
    }
    $('.desktop-menu').css('--menu-items-length', 3);//TODO HARDCODED
    $('.nav-opened').removeClass('navig-opened-by-cases');
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
        deactivateShadow();
        const menuItem0Js = $('#menu-item-0-js');
        if (!menuItem0Js.hasClass('touched')) {
            menuItem0Js.addClass('touched');
            $('.nav-opened').removeClass('fullvw');
            $('.desktop-menu').addClass('opened-by-cases');
            // $('.desktop-menu>.sections').addClass('displayNone');


            $('.desktop-menu')
                .append(htmlLoadZeroMenuItemContent);
            $('.desktop-menu.opened-by-cases>.sections').addClass('off');
            $('.zeroMenuItemContent.closed').removeClass('closed');
            $('.desktop-menu').css('--menu-items-length', caseStudyItems);
            caseStudyMenuJs(document.querySelector('.case-study-panel__header.default'));
        }
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
        $('.nav-opened').addClass('navig-opened-by-cases');
    }
    caseStudyMenuItem.children[0].children[1].innerText = '↓';
    if (!caseStudyMenuItem.parentElement.classList.contains('opened')) caseStudyMenuItem.parentElement.classList.add('opened');
    const previousSiblings = getPreviousSiblings(caseStudyMenuItem.parentElement);
    previousSiblings.forEach(div => div.classList.add('opened'));

    const nextSiblings = getNextSiblings(caseStudyMenuItem.parentElement);
    nextSiblings.forEach(div => div.classList.remove('opened'));
    setTimeout(() => {
        $('.containery').addClass('height-0');
    }, 500)

}

function closeCaseStudyMenuJs() {
    $('.menu-content-opened').removeClass('menu-content-opened');
    $('#zeroMenuItemContentTarget .section').removeClass('opened');
    // $('.case-study-arrow').text('↑');
}

function closeMenuTitlePage() { //todo here 1st
    console.log('closeMenuTitlePage');
    $('#zeroMenuItemContentTarget .case-study-arrow').text('↑');
    $('.containery').removeClass('height-0');
    $('.case-study-panel__inner').removeClass('opened');
    $('.menu-content-opened').removeClass('menu-content-opened');
    $('.opened-by-cases').removeClass('opened-by-cases');
    $('.sections.off').removeClass('off');

    // $('.case-study-arrow').text('↑');
    // hideMenuItemContent();
    // restoreDefaultMenu();
    toggleDesktopMenu();

}


/*---------+---------+---------+--------+-----------*/
/*             |DESKTOP CONTACT MENU|               */

/*---------+---------+---------+--------+-----------*/

function toggleDesktopContact() {
    const contactMenu = $('.contact-menu');

    if ($('.contact-menu.displayNone').length === 0) {
        setTimeout(() => {
            contactMenu.addClass('displayNone');
            deactivateShadow();
        }, 500);
    } else {
        contactMenu.removeClass('displayNone');
        activateShadow();
    }
    setTimeout(() => {
        console.log('toggleDesktopContact');
        $('.nav-opened').removeClass('fullvw');
        contactMenu.toggleClass('opened');

        if (contactMenu.hasClass('opened')) {
            $('.contact-item-arrow').text('↓');
        } else {
            $('.contact-item-arrow').text('↑');
        }
        $('.desktop-content .navigation').removeClass('nav-opened');
        $('.navigation-arrow-up').removeClass('rotated');
        $('.zeroMenuItemContent').addClass('closed');
        closeTeamFromMenu();
        restoreDefaultMenu();
    }, 100)

}

function closeContactFromMenu() {
    console.log('closeContactFromMenu');
    $('.contact-menu')
        .removeClass('opened')
        .addClass('displayNone');
    $('.contact-item-arrow').text('↑');
}

/*---------+---------+---------+--------+-----------*/
/*             |DESKTOP TEAM MENU|                  */

/*---------+---------+---------+--------+-----------*/

function toggleDesktopTeam() {
    const teamMenu = $('.team-menu');
    // $('.desktop-content .navigation').toggleClass('team-opened');
    // $('.desktop-menu').toggleClass('displayNone');

    if ($('.team-menu.displayNone').length === 0) {
        setTimeout(() => {
            teamMenu.addClass('displayNone');
            deactivateShadow();
        }, 500);
    } else {
        teamMenu.removeClass('displayNone');
        activateShadow();

    }
    setTimeout(() => {
        console.log('toggleDesktopTeam');
        $('.nav-opened').removeClass('fullvw');
        teamMenu.toggleClass('opened');

        if (teamMenu.hasClass('opened')) {
            $('.team-item-arrow').text('↓');
        } else {
            $('.team-item-arrow').text('↑');
        }
        $('.desktop-content .navigation').removeClass('nav-opened');
        $('.navigation-arrow-up').removeClass('rotated');
        $('.zeroMenuItemContent').addClass('closed');
        closeContactFromMenu();
        restoreDefaultMenu();
    }, 100)

}

function closeTeamFromMenu() {
    console.log('closeTeamFromMenu');
    $('.team-menu')
        .removeClass('opened')
        .addClass('displayNone');
    $('.team-item-arrow').text('↑');
}

function nextTeamTab(e) {
    console.log(e.target);
    $('.team-item-title.active-element.active').removeClass('active');
    const target = $(e.target);
    target.addClass('active');
    if (target.hasClass('pauls')) {
        $('.team-member-content.active').removeClass('active');
        $('.team-member-content.paul').addClass('active');
    } else if (target.hasClass('pats')) {
        $('.team-member-content.active').removeClass('active');
        $('.team-member-content.pat').addClass('active');
    } else if (target.hasClass('sabrinas')) {
        $('.team-member-content.active').removeClass('active');
        $('.team-member-content.sabrina').addClass('active');
    } else if (target.hasClass('alexs')) {
        $('.team-member-content.active').removeClass('active');
        $('.team-member-content.alex').addClass('active');
    } else if (target.hasClass('gregs')) {
        $('.team-member-content.active').removeClass('active');
        $('.team-member-content.greg').addClass('active');
    }

}


/*---------+---------+---------+--------+-----------*/
/*             |DESKTOP INSIGHTS MENU|            */

/*---------+---------+---------+--------+-----------*/

function showInsightsContentFromHomepage(e) {
    e.stopPropagation();
    toggleDesktopMenu();
    showInsightsContent();
}

function showInsightsContent() {
    console.log('showInsightsContent');
    deactivateShadow();
    $('#menu-item-2-js').removeClass('closed');
    $('.desktop-menu').addClass('opened');
    $('.navigation-content').addClass('white-back');
    $('#menu-item-2-js .menu-item-arrow').text('↓');
    $('#menu-item-2-js .menu-item-arrow-bottom').text('↓');
    $('.nav-opened').addClass('fullvw');
    $('.containery').addClass('height-0');

}

function closeInsightsContent(e) {
    console.log('closeInsightsContent');
    if (!$('.menu-content-opened').length > 0) activateShadow();
    $('.desktop-menu').removeClass('opened');
    $('.navigation-content').removeClass('white-back');
    $('#menu-item-2-js .menu-item-arrow').text('↑');
    $('#menu-item-2-js .menu-item-arrow-bottom').text('↑');
    $('.nav-opened').removeClass('fullvw');
    $('.containery').removeClass('height-0');
    if (e) e.stopPropagation();

}

function slideFilterTags() {
    const tagList = $('.desktop-menu .tag-list');
    if (tagList.hasClass('slided')) {
        tagList.slideDown().toggleClass('slided');
    } else {
        tagList.slideUp().toggleClass('slided');
    }
}

/*---------+---------+---------+--------+-----------*/
/*             |DESKTOP INSIGHTS MENU|            */

/*---------+---------+---------+--------+-----------*/

function showProjectsContent() {
    console.log('showProjectsContent');
    deactivateShadow();
    $('#menu-item-2-js').addClass('closed');
    $('.desktop-menu').addClass('opened');
    $('.nav-opened').addClass('fullvw');
    $('.navigation-content').addClass('white-back');
    $('#menu-item-1-js .menu-item-arrow').text('↓');
    $('#menu-item-1-js .menu-item-arrow-bottom').text('↓');
    $('.containery').addClass('height-0');

}

function closeProjectsContent(e) {
    console.log('closeProjectsContent');
    activateShadow();
    $('.desktop-menu').removeClass('opened');
    $('.nav-opened').removeClass('fullvw');
    $('.navigation-content').removeClass('white-back');
    $('#menu-item-1-js .menu-item-arrow').text('↑');
    $('#menu-item-1-js .menu-item-arrow-bottom').text('↑');
    $('.containery').removeClass('height-0');
    $('#menu-item-2-js').removeClass('closed');
    if (e) e.stopPropagation();

}

/* Shadow styles */

function activateShadow() {
    console.log('activateShadow');
    $('.shadow-menu').addClass('active');
    // $('.desktop-content .navigation-content').addClass('toWhite');
}

function deactivateShadow() {
    console.log('deactivateShadow');
    $('.shadow-menu.active').removeClass('active');
    // $('.desktop-content .navigation-content.toWhite').removeClass('toWhite');
}

/*---------+---------+---------+--------+-----------*/
/*             |DESKTOP CONTENT INTRO |             */

/*---------+---------+---------+--------+-----------*/

function callBackCompleteCaseLoading() {
    $('.desktop-content .navigation').removeClass('nav-opened');
    $('.navigation-arrow-up').removeClass('rotated');
    $('.zeroMenuItemContent').addClass('closed');
    restoreDefaultMenu();
    console.log('// Animation end.')
    $('.preventClick').removeClass('preventClick');
    setTimeout(()=>{
        $('.content-intro').removeClass('content-intro');
    },600)
}

function runContentIntroAnimation() {
    console.log('runContentIntroAnimation runs');
    $('.desktop-content .containery.height-0')
        .addClass('content-intro')
        .addClass('active');
    setTimeout(() => {
        $('.desktop-content .containery.height-0')
            .removeClass('active');
        console.log('runContentIntroAnimation done')
        callBackCompleteCaseLoading();
    }, 1000)

}