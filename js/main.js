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

    $('#menu-item-2-mobile-js').on('click', () => {
        showMobileInsightsContent();
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
    $('#filter-insights-js').on('click',()=>{
        slideFilterTags();
    })
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