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

    <script src="js/style.js?v=13"></script>
    <script src="js/main.js?v=13"></script>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/project.css?v=13">
    <link rel="stylesheet" href="css/media.css?v=13">
    <link rel="stylesheet" href="css/common-media.css?v=13">

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
                        <span class="simple">Bridging the distance</span>
                        <span class="simple">between alumni and the<br> school of their youth</span>
                    </div>
                    <div class="project-name">Crescent School</div>
                    <div class="tag-list">
                        <img alt="folder icon" class="folder-icon" src="static/images/desktop/folder-icon.png">
                        <ul>
                            <li>● Content Creation</li>
                            <li>● Editorial Design</li>
                            <li>● Photography</li>
                            <li>● Art Direction</li>
                            <li>● Anthropological Research</li>
                            <li>● Strategy &amp; Consulting</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="next-project" style="cursor: pointer;">
                <div class="next-project-body">
                    <div class="ref">
                        Next Project / *******
                    </div>
                    <div onclick="loadProject('***********')" class="next-title">
                        <span class="simple">Rebranding a fundraising</span>
                        <span class="simple"> campaign elevates outcomes</span>
                    </div>
                </div>
                <div class="row-full limited-next-image">
                    <img src="static/images/desktop/cases/crescent/Capture.JPG" alt="">
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