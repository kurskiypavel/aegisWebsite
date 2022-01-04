<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Aegis - Radiant Care</title>


    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="shortcut icon" href="static/images/aegis%20favicon.png">

    <script src="static/js-libs/jquery.min.js"></script>
    <script src="static/js-libs/tweenmax.min.js"></script>
    <script src="static/js-libs/scrollmagic.min.js"></script>
    <!--    <script src="static/js-libs/debug.addIndicators.js"></script>-->
    <script src="static/js-libs/animation.gsap.min.js"></script>
<script src="static/js-libs/player.js"></script>

    <script src="js/style.js?v=12"></script>
    <script src="js/main.js?v=12"></script>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/project.css?v=12">
    <link rel="stylesheet" href="css/media.css?v=12">
    <link rel="stylesheet" href="css/common-media.css?v=12">

</head>
<body>
<div class="desktop-content">
    <div class="containery">
        <header>
            <div class="logo">
                <img onclick="location.href='index.php'" src="static/images/aegis%20wordmark%20_red%20rgb.svg"
                     alt="">
            </div>
        </header>
        <div class="body project-html">
            <div class="main-content">
                <div class="head-block">
                    <div class="content-head-text">
                        <span class="simple">Contemporary rebrand for</span>
                        <span class="simple">a faith-based community</span>
                    </div>
                    <div class="project-name">Radiant Care</div>
                    <div class="tag-list">
                        <img alt="folder icon" class="folder-icon" src="static/images/desktop/folder-icon.png">
                        <ul>
                            <li>● Research</li>
                            <li>● Naming</li>
                            <li>● Brand Identity</li>
                            <li>● Wayfinding</li>
                        </ul>
                    </div>
                </div>

                <div class="row-full">
                    <img class="full-row desktop-only-img" src="static/images/desktop/projects/radiant-care/1_radiantcare_hero.jpg" alt="">
                    <div class="mobile-only-set">
                        <img class="full-row" src="static/images/desktop/projects/radiant-care/1_radiantcare_mobile_hero.jpg" alt="">
                    </div>
                </div>

                <div class="content-row">
                    <div class="col-3 d-block">
                    </div>
                    <div class="col-7">
                        <p>Tabor Manor and Pleasant Manor were established by Mennonites early in the 20th century. They are affiliated through faith, culture and values. Facing new trends in demographics, the Board and management wanted to broaden their appeal. The older generation of Mennonites is shrinking. Their boomer children are rapidly approaching retirement themselves. In many cases, they have built careers, marriages, families and lives outside the community. Today’s retirees are more affluent and have active retirement lifestyle expectations.</p>
                        <p><span style="font-weight: bold">Signalling inclusivity</span>—While both Tabor Manor and Pleasant Manor welcome applicants from all faiths and ethnicities, a Mennonite faith-based organization does not appeal to non-Mennonite prospects. Through a human-centred, anthropological approach to branding and change management, we helped the organization shift its brand from being aligned around a specific cultural heritage to be more open and inclusive.</p>
                    </div>
                </div>

                <div class="row">
                    <img class="full-row desktop-only-img" src="static/images/desktop/projects/radiant-care/2_radiantcare.jpg" alt="">
                    <div class="mobile-only-set">
                        <img class="full-row" src="static/images/desktop/projects/radiant-care/2_radiantcare_mobile.jpg" alt="">
                    </div>
                </div>

                <div class="content-row">
                    <div class="col-3 d-block">
                    </div>
                    <div class="col-7">
                        <p><span style="font-weight: bold">Universality from shared values</span>—After an ethnographic exploration of both the internal and external stakeholder communities, we helped to reposition the organization around its core values of caring, compassion, and community. The result was a refreshed, universally compelling brand and value proposition that the organization already ‘lives’ and can deliver. We created a unifying name, Radiant Care, an identity, and messaging that conveyed the brand’s values of warmth and openness, and set expectations about the resident experience. ⬤</p>
                    </div>
                </div>

                <div class="row">
                    <img class="full-row" src="static/images/desktop/projects/radiant-care/3_radiantcare.jpg" alt="">
                </div>

            </div>

            <div class="next-project" style="cursor: pointer;" onclick="loadProject('project-council-for-ontario-universities', true)">
                <div class="next-project-body">
                    <div class="ref">
                        Next Project / Council for Ontario Universities
                    </div>
                    <div class="next-title">
                        <span class="simple">Designing Information for</span>
                        <span class="simple">ergonomics and accessibility</span>
                    </div>
                </div>
                <div class="row-full limited-next-image">
                    <img src="static/images/desktop/projects/radiant-care/Intersection%201.png" alt="">
                </div>
            </div>
        </div>
        <!--new content loads here-->
    </div>
    <?php  require_once('desktopMenu.php');?>


</div>
<div class="mobile-content">
<?php  require_once('mobileMenu.php');?>
</div>
</body>
</html>