<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Aegis - Ryerson University</title>


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
                        <span class="simple">A magazine establishes a</span>
                        <span class="simple">young research university</span>
                    </div>
                    <div class="project-name">Ryerson University</div>
                    <div class="tag-list">
                        <img alt="folder icon" class="folder-icon" src="static/images/desktop/folder-icon.png">
                        <ul>
                            <li>● Editorial Design</li>
                            <li>● Annual Report</li>
                            <li>● Art Direction</li>
                        </ul>
                    </div>
                </div>

                <div class="row-full">
                    <img class="full-row desktop-only-img" src="static/images/desktop/projects/ryerson-university/1_ryerson_hero.jpg" alt="">
                    <div class="mobile-only-set">
                        <img class="full-row" src="static/images/desktop/projects/ryerson-university/1_ryerson_mobile_hero.jpg" alt="">
                    </div>
                </div>

                <div class="content-row">
                    <div class="col-3 d-block">
                    </div>
                    <div class="col-7">
                        <p>Ryerson partnered with Aegis to create Intersections, a magazine aimed at academia, business, community and government. The magazine features the bright minds that drive the university’s research. It is intended primarily to communicate the unique nature of Ryerson’s research to stakeholders. But the has also become an important tool for recruiting both high calibre research talent and high calibre students.</p>
                    </div>
                </div>

                <div class="row">
                    <img class="full-row" src="static/images/desktop/projects/ryerson-university/2_ryerson.jpg" alt="">
                </div>

                <div class="content-row">
                    <div class="col-3 d-block">
                    </div>
                    <div class="col-7">
                        <p><span style="font-weight: bold">Leadership through storytelling</span>—Stories are a powerful way to communicate culture and leadership. We created the magazine as a collection of engaging stories and photography about people of science—Ryerson researchers in their pursuit of ground-breaking work. At its core, Intersections galvanized the notion of Ryerson as an urban campus integrated into the city. ⬤</p>
                    </div>
                </div>

                <div class="row">
                    <img class="full-row" src="static/images/desktop/projects/ryerson-university/3_ryerson.jpg" alt="">
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/ryerson-university/4_ryerson.jpg" alt="">
                </div>

                <!--2 images-->
                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/ryerson-university/Group%20180.png" alt="">
                </div>
                <!--2 images end-->

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/ryerson-university/7_ryerson.jpg" alt="">
                </div>

                <div class="row-full-img">
                    <img class="full-row desktop-only-img" src="static/images/desktop/projects/ryerson-university/8_ryerson.jpg" alt="">
                    <div class="mobile-only-set">
                        <img class="full-row" src="static/images/desktop/projects/ryerson-university/8_ryerson.jpg" alt="">
                    </div>
                </div>

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/ryerson-university/9_ryerson.jpg" alt="">
                </div>

                <!--2 images-->
                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/ryerson-university/Group%20181.png" alt="">
                </div>
                <!--2 images end-->

                <div class="row-img">
                    <img class="full-row" src="static/images/desktop/projects/ryerson-university/12_ryerson.jpg" alt="">
                </div>

            </div>

            <div class="next-project" style="cursor: pointer;" onclick="loadProject('project-TYS-2011-Campaign', true)">
                <div class="next-project-body">
                    <div class="ref">
                        Next Project / The York School
                    </div>
                    <div class="next-title">
                        <span class="simple"> Creating a campaign</span>
                        <span class="simple"> that changes perception</span>
                    </div>
                </div>
                <div class="row-full limited-next-image">
                    <img src="static/images/desktop/projects/ryerson-university/1 tys2011campaign hero.jpg" alt="">
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