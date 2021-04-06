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
    hideMenuItemContent();
}

function toggleDesktopMenu() {
    const desktopContentNavigation = $('.desktop-content .navigation');

    desktopContentNavigation.toggleClass('nav-opened');
    if (desktopContentNavigation.hasClass('nav-opened')) {
        restoreDefaultMenu();
    }
}

function hideMenuItemContent() {
    //TODO optimize for multiple contents in menu later
    $('.desktop-menu').css('--menu-items-length', 3);//TODO HARDCODED
    $('#htmlLoadZeroMenuItemContent').remove();
    $('#menu-item-0-js').removeClass('touched');
}

function showMenuItemContent(menuElementId) {
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
                .css('--menu-items-length', menuItemsLength);
/*            var script = document.createElement('script');
            script.src = 'htmlLoad/js/zeroMenuItemScript.js';
            script.type = 'text/javascript';
            document.body.parentNode.appendChild(script);*/
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

function caseStudy0Js() {
    $('.desktop-content .navigation-content')
        .css({'transform': 'translate(-906px)', 'background': 'white'});
    $('.case-study-0-panel__inner').css('transform','translate(-910px)')
}