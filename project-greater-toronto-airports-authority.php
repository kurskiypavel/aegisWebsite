<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Aegis - Greater Toronto Airports Authority</title>


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
                        <span class="simple">Design lifts a report</span>
                        <span class="simple">to the level of art</span>
                    </div>
                    <div class="project-name">Greater Toronto Airports Authority</div>
                    <div class="tag-list">
                        <img alt="folder icon" class="folder-icon" src="static/images/desktop/folder-icon.png">
                        <ul>
                            <li>● Annual Report</li>
                            <li>● Art Direction</li>
                            <li>● Photography</li>
                        </ul>
                    </div>
                </div>


                <div class="row-full">
                    <img class="full-row desktop-only-img" src="static/images/desktop/projects/gtaa/1_gtaa_hero.jpg" alt="">
                    <div class="mobile-only-set">
                        <img class="full-row" src="static/images/desktop/projects/gtaa/1_gtaa_mobile_hero.jpg" alt="">
                    </div>
                </div>

                <div class="content-row">
                    <div class="col-3 d-block">
                    </div>
                    <div class="col-7">
                        <p>As an ambitious new airport rose out of the bones of the older one, Greater Toronto Airport Authority CEO Lou Turpin saw an opportunity to share the project with stakeholders through the Authority’s annual report. Aegis was invited onboard to not only design a report, but to celebrate the scale and beauty of the new airport by lifting the corporate annual report to the level of art. Not a typical brief for us, but one which became a labour of love. The final design of the annual report won recognition from design juries around the world, including the AR100 and the London Advertising Awards. ⬤</p>
                    </div>
                </div>

                <div class="row">
                    <img class="full-row" src="static/images/desktop/projects/gtaa/2_gtaa.jpg" alt="">
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/gtaa/3_gtaa.jpg" alt="">
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/gtaa/4_gtaa.jpg" alt="">
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/gtaa/5_gtaa.jpg" alt="">
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/gtaa/6_gtaa.jpg" alt="">
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/gtaa/7_gtaa.jpg" alt="">
                </div>



            </div>

            <div class="next-project" style="cursor: pointer;" onclick="loadProject('project-BSS-Annual-Fund', true)">
                <div class="next-project-body">
                    <div class="ref">
                        Next Project / The Bishop Strachan School / Annual Fund
                    </div>
                    <div class="next-title">
                        <span class="simple">Title for annual fund</span>
                        <span class="simple"> branding and design</span>
                    </div>
                </div>
                <div class="row-full limited-next-image">
                    <img src="static/images/desktop/projects/gtaa/1_bssannualfund_hero.jpg" alt="">
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