<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Aegis - Project page</title>


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
                                <style>
                                                       @media only screen and (max-width: 767px) {
                                                          .desktop-tys-only-block,.desktop-tys-only{
                                                           display:none;
                                                          }
                                                       }
                                                       @media only screen and (min-width: 768px) {
                                                          .mobile-tys-only{
                                                           display:none;
                                                          }.desktop-tys-only-block{
                                                           display:block;
                                                          }
                                                         }
                                                      </style>
                    <div class="content-head-text">
                        <span class="simple">An event for thinkers</span>
                        <span class="simple">in an ever changing world</span>
                    </div>
                    <div class="project-name">Goethe-Institut / Branding</div>
                    <div class="tag-list">
                        <img alt="folder icon" class="folder-icon" src="static/images/desktop/folder-icon.png">
                        <ul>
                            <li>● Naming</li>
                            <li>● Identity Design</li>
                            <li>● Event Branding</li>
                        </ul>
                    </div>
                </div>

                <div class="row-full">
                    <img class="full-row desktop-only-img" src="static/images/desktop/projects/Goethe-Openminds/1_goetheopenminds_hero.jpg" alt="">
                    <div class="mobile-only-set">
                        <img class="full-row" src="static/images/desktop/projects/Goethe-Openminds/1_goetheopenminds_mobile_hero.jpg" alt="">
                    </div>
                </div>

                <div class="content-row">
                    <div class="col-3 d-block">
                    </div>
                    <div class="col-7">
                        <p>The Goethe-Institut is a German cultural association encouraging international cultural exchange and relations. Openminds is a public forum, hosted by the Goethe-Institut, which brings together diverse thinkers to share insights into the current state of culture. It explores questions such as: How is culture adapting to shifting paradigms and a world in flux? We developed the branding and communications to reflect the curious and inquiring nature of the event series. ⬤</p>
                    </div>
                </div>

                <div class="row-full">
                    <img class="two_goetheopenminds full-row desktop-only-img" src="static/images/desktop/projects/Goethe-Openminds/2_goetheopenminds.jpg" alt="">
                    <div class="mobile-only-set">
                        <img class="full-row two_goetheopenminds" src="static/images/desktop/projects/Goethe-Openminds/2_goetheopenminds.jpg" alt="">
                    </div>
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/Goethe-Openminds/3_goetheopenminds.jpg" alt="">
                </div>

<!--                three phones-->
                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/Goethe-Openminds/4_goetheopenminds.png" alt="">
                </div>

<!--                two images-->
                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/Goethe-Openminds/5_goetheopenminds.jpg" alt="">
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/Goethe-Openminds/6_goetheopenminds.jpg" alt="">
                </div>



            </div>

            <div class="next-project" style="cursor: pointer;" onclick="loadProject('project-Lakeridge-Health', true)">
                <div class="next-project-body">
                    <div class="ref">
                        Next Project / Lakeridge Health
                    </div>
                    <div class="next-title desktop-tys-only">
                        <span class="simple">Branding a large</span>
                        <span class="simple">healthcare community</span>
                    </div>
                    <div class="next-title mobile-tys-only">
                        <span class="simple">Branding <br>a large healthcare<br> community</span>
                    </div>
                </div>
                <div class="row-full limited-next-image">
                    <img src="static/images/desktop/projects/Goethe-Openminds/1_lakeridgehealth_hero.jpg" alt="">
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