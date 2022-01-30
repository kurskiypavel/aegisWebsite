<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Aegis - Thrive Group</title>


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
                    <div class="content-head-text desktop-tys-only">
                        <span class="simple">Branding unifies a<br </span>
                        <span class="simple">merger of health-care</span>
                        <span class="simple">services</span>
                    </div>
                    <div class="project-name">Thrive Group</div>
                    <div class="tag-list">
                        <img alt="folder icon" class="folder-icon" src="static/images/desktop/folder-icon.png">
                        <ul>
                            <li>● Research</li>
                            <li>● Naming</li>
                            <li>● Identity Design</li>
                        </ul>
                    </div>
                </div>

                <div class="row-full">
                    <img class="full-row desktop-only-img" src="static/images/desktop/projects/thrive-group/1_thrivegroup_hero.jpg" alt="">
                    <div class="mobile-only-set">
                        <img class="full-row" src="static/images/desktop/projects/thrive-group/1_thrivegroup_mobile_hero.jpg" alt="">
                    </div>
                </div>

                <div class="content-row">
                    <div class="col-3 d-block">
                    </div>
                    <div class="col-7">
                        <p>Our work for Thrive was deceptively simple. We were commissioned to design an organizational identity. The challenge was that we were creating a new corporate identity for two merging organizations, each with their own extensive histories and cultures.</p>
                        <p>Producing the identity was a result of extensive research into the various regional offices that would be servicing the Thrive community. Finding the linking elements between the two communities was the most important task for our team. Once identified, the logo and identity materials were easy to design. Thrive gave us the opportunity to put our research front and centre. They understood that the more we knew, the better our product. The result was a fresh and exciting image for the company as it turns a new leaf in its story. ⬤</p>
                    </div>
                </div>

                <div class="row">
                    <img class="full-row" src="static/images/desktop/projects/thrive-group/2_thrivegroup.jpg" alt="">
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/thrive-group/3_thrivegroup.gif" alt="">
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/thrive-group/6_thrivegroup.jpg" alt="">
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/thrive-group/7_thrivegroup.jpg" alt="">
                </div>



            </div>

            <div class="next-project" style="cursor: pointer;" onclick="loadProject('project-ivey-business-school', true)">
                <div class="next-project-body">
                    <div class="ref">
                        Next Project / Ivey Business School
                    </div>
                    <div class="next-title desktop-tys-only">
                        <span class="simple">Making a case for support</span>
                        <span class="simple">through brand storytelling</span>
                    </div>
                    <div class="next-title mobile-tys-only">
                        <span class="simple">Making a case for<br> support through<br> brand storytelling</span>
                    </div>
                </div>
                <div class="row-full limited-next-image">
                    <img src="static/images/desktop/projects/thrive-group/1_iveybusinessschool_hero.jpg" alt="">
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