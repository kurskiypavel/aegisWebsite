/*
* VAR SETTERS
* */
const caseStudyItems = 6; //TODO HARDCODED
const htmlLoadPath = "htmlLoad";
const htmlLoadZeroMenuItemContent = $('<div style="float: right" id="htmlLoadZeroMenuItemContent">')
    .load(`${htmlLoadPath}/zeroMenuItemContent.html #zeroMenuItemContentTarget`);


/*
* FUNCTION HELPERS
* */

function getPreviousSiblings(elem) {
    let siblings = [];
    while (elem = elem.previousElementSibling) {
        siblings.push(elem);
    }
    return siblings;
}

function getNextSiblings(elem) {
    let siblings = [];
    while (elem = elem.nextElementSibling) {
        siblings.push(elem);
    }
    return siblings;
}

async function loadImage(imageUrl) {
    let img;
    const imageLoadPromise = new Promise(resolve => {
        img = new Image();
        img.onload = resolve;
        img.src = imageUrl;
    });

    await imageLoadPromise;
    console.log("image loaded");
    return img;
}

/*
* METHOD REALIZATION
* */
function initEvents() {

    /*
    * MOBILE EVENTS
    * */

    /*  MENU EVENTS */
    $('#mobile-menu-js').on('click', () => {
        toggleMobileMenu()
    });
    $('#menu-item-0-mobile-js').on('click', () => {
        showCaseStudyMobileContent('menu-item-0-mobile-js');
        // closeInsightsMobileContent();//TODO
    });

    $('#mobile-contact-menu-js').on('click', () => {
        toggleMobileContact();
    });

    $('#menu-item-1-mobile-js').on('click', () => {
        showMobileProjectsContent();
    });

    $('#menu-item-2-mobile-js').on('click', () => {
        showMobileInsightsContent();
    });

    $('#filter-insights-mobile-js').on('click', () => {
        slideMobileFilterTags();
    });

    /*
    * DESKTOP EVENTS
    * */

    /*  MENU EVENTS */
    $('#desktop-menu-js').on('click', () => {
        toggleDesktopMenu();
    });

    $('#desktop-contact-js').on('click', () => {
        toggleDesktopContact();
    });
    $('#menu-item-0-js').on('click', () => {
        showCaseStudyContent('menu-item-0-js');
        closeInsightsContent();
    });
    $('#menu-item-1-js').on('click', () => {
        showProjectsContent();
    });
    $('#menu-item-2-js').on('click', () => {
        showInsightsContent();
    });
    $('#filter-insights-js').on('click', () => {
        slideFilterTags();
    });
    $(document).on("click", (e) => {
        const navigation = $('.navigation');
        const caseStudyMobileContent = $('#caseStudyMobileContent');
        if ($('.desktop-content .navigation').hasClass('nav-opened')
            && !navigation.is(e.target)
            && navigation.has(e.target).length === 0) {
            toggleDesktopMenu();
        }
        if ($('.contact-menu').hasClass('opened')
            && !navigation.is(e.target)
            && navigation.has(e.target).length === 0) {
            toggleDesktopContact();
        }
        if ($('.mobile-content .navigation').hasClass('nav-opened')
            && !navigation.is(e.target)
            && navigation.has(e.target).length === 0
            && !caseStudyMobileContent.is(e.target)
            && caseStudyMobileContent.has(e.target).length === 0) {
            toggleMobileMenu();
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

function loadInsight(insightToLoad) {
    console.log(insightToLoad);
    $('.next-title').addClass('preventClick');
    $('body').addClass('js-page-loading');
    $('.insight-html').addClass('old-html');
    $(".desktop-content .containery").append('<div class="new-html inactive"></div>');
    $(".desktop-content .containery .new-html").load(`${insightToLoad}.html .insight-html`, function (responseText, textStatus, XMLHttpRequest) {
        if (textStatus === "success") {
            $('.js-page-loading').removeClass('js-page-loading');
            $('title').load(`${insightToLoad}.html title`, '', function (data) {
                document.title = $(this).text().toUpperCase();
            });
            history.pushState({pageID: insightToLoad}, insightToLoad, `${insightToLoad}.html`);
            // gtag('config', 'UA-525355-1',{ 'page_title' : document.title, 'page_path': location.pathname, 'page_location': location.href});
            // readyDOMStyle();
            // readyDOMMain();
            //init events and etc. if required
            $('.old-html').slideUp("slow", function () {
                console.log('// Animation complete.')
                $('.old-html').remove();
                $('.new-html.inactive .insight-html').unwrap();
                window.scrollTo(0, 1);
            })

        } else {
            console.log('error  $("body").load');
        }
    });
}

function loadCase(caseToLoad) {
    console.log(`loadCase ${caseToLoad}`);
    $('.case-study-panel__body').addClass('preventClick');
    $('body').addClass('js-page-loading');
    $('.body').addClass('old-html'); //TODO test on insight / project / cases / homepage - potentially wont work
    $('.desktop-content .containery').append('<div class="new-html inactive"></div>');
    $(".desktop-content .containery .new-html").load(`${caseToLoad}.html .case-study-html`, function (responseText, textStatus, XMLHttpRequest) {
        if (textStatus === "success") {
            $('head').append('<link rel="stylesheet" type="text/css" href="css/cases.css?v=2">');
            $('link[title="insightCss"]').remove();
            $('.js-page-loading').removeClass('js-page-loading');
            $('title').load(`${caseToLoad}.html title`, '', function (data) {
                document.title = $(this).text().toUpperCase();
            });
            history.pushState({pageID: caseToLoad}, caseToLoad, `${caseToLoad}.html`);
            // gtag('config', 'UA-525355-1',{ 'page_title' : document.title, 'page_path': location.pathname, 'page_location': location.href});
            // readyDOMStyle();
            // readyDOMMain();
            //init events and etc. if required
            console.log('// Animation start.')
            //animation here
            $('.old-html').remove();
            $('.new-html.inactive .case-study-html').unwrap();
            $('.desktop-content .navigation').removeClass('nav-opened');
            $('.navigation-arrow-up').removeClass('rotated');
            $('.zeroMenuItemContent').addClass('closed');
            restoreDefaultMenu();
            console.log('// Animation end.')
            $('.preventClick').removeClass('preventClick');


        } else {
            console.log('error  $("body").load');
        }
    });
}

window.addEventListener('popstate', function (e) {
    if (e.state && e.state.pageID) {
        location.href = `${e.state.pageID}.html`
    } else {
        location.href = 'index.html';
    }
});