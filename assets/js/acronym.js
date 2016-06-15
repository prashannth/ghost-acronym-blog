(function($) {
    "use strict"; // use strict to start

    var accronymApp = {
        /* ---------------------------------------------
         Preloader
         --------------------------------------------- */
        preloader: function() {
            $(window).on('load', function() { // makes sure the whole site is loaded
                $('#status').fadeOut(); // will first fade out the loading animation
                $('.spinner').fadeOut(); // will first fade out the loading animation
                $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                $('body').delay(350).css({
                    'overflow': 'visible'
                });
            });
        },
        /* ---------------------------------------------
         Main Pages - mCustomScrollbar Configure
         --------------------------------------------- */
        scrollBar: function() {
            $("#content").mCustomScrollbar({
                theme: "inset-2-dark",
                mouseWheelPixels: 185
            });

            $(".home-template #fullscreen-blog #blog #content").mCustomScrollbar({
                theme: "inset-2-dark",
                mouseWheelPixels: 185
            });
            $(".tag-portfolio #post-portfolios, #mobile-blog").mCustomScrollbar({
                theme: "inset-2-dark",
                mouseWheelPixels: 185
            });
            $(".post-template #right #post").mCustomScrollbar({
                theme: "inset-2-dark",
                mouseWheelPixels: 185
            });
            $(".tag-template #tag-template #right #post-tag").mCustomScrollbar({
                theme: "inset-2-dark",
                mouseWheelPixels: 185
            });
            $(".author-template #author-template #right #post-tag").mCustomScrollbar({
                theme: "inset-2-dark",
                mouseWheelPixels: 185
            });
        },
        /* ---------------------------------------------
         Portfolio Page LightBox
         --------------------------------------------- */
        portfolioLightBox: function() {
            $('.portfolios-two a.zoom-btn').on('click', function(e) {
                e.preventDefault();
                $('.portfolios-two').magnificPopup({
                    delegate: 'a.zoom-btn',
                    type: 'image',
                    closeOnContentClick: false,
                    closeBtnInside: false,
                    mainClass: 'mfp-with-zoom mfp-img-mobile',
                    image: {
                        verticalFit: true,
                    },
                    gallery: {
                        enabled: true
                    },
                    zoom: {
                        enabled: true,
                        duration: 300,
                        opener: function(element) {
                            return element.find('img');
                        }
                    },
                });
            });
        },
        /* ---------------------------------------------
         Image as Background Image
         --------------------------------------------- */
        imageBg: function() {
            $.fn.bgImage = function() {
                $(this).each(function() {
                    var $image = $(this).find('img');
                    var imageSource = $image.attr('src');
                    $image.css('visibility', 'hidden');
                    $(this).css('backgroundImage', 'url(' + imageSource + ')');
                    if (!$image.length) {
                        $(this).css('backgroundImage', 'none');
                    }
                });
            };
            $('#mobile-single-page .featured-img').bgImage();
            $('#tag-content-top .featured-img').bgImage();
            $('#portfolio-content-top .featured-img').bgImage();
        },
        /* ---------------------------------------------
         Disqus Comment Count
         --------------------------------------------- */
        disqusCount: function() {
            if (typeof( disqus_shortname ) != "undefined") {
                var s = document.createElement('script');
                s.async = true;
                s.type = 'text/javascript';
                s.src = '//' + disqus_shortname + '.disqus.com/count.js';
                (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);

            }
        },
        /* ---------------------------------------------
         Menu ScrollBar
         --------------------------------------------- */
        menuScroll: function() {
            checkSize();
            $(window).on('resize', function() {
                checkSize();
            });

            function checkSize() {
                if ($(window).width() > 992) {
                    var mySwiper = $(".navmenu.navmenu-default .menu-area").mCustomScrollbar({
                        theme: "inset-2-dark",
                        autoHideScrollbar:true,
                        mouseWheelPixels: 185
                    });
                } else return
            }
        },
        /* ---------------------------------------------
         Adding Active menu
         --------------------------------------------- */
        menuActiveClass: function() {
            $('ul.navmenu-nav li a').each(function() {
                if ($(this).attr('href') + "/" === document.URL || $(this).attr('href') === document.URL) {
                    $(this).parent().addClass('active');
                }
            });
        },
        /* ---------------------------------------------
         For Safari Browser issue
         --------------------------------------------- */
        safariIssue: function() {
            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
                var height = $(window).height();
                var width = $(window).width();
                var tagHeight = height / 6;
                $('#homeslider .carousel-inner > .item').css('height', '' + height / 2.5 + '');
                $('#mobile-single-page #sidebar .featured-img').css('height', '' + height + '');
                $('#tag-template #post-tag, #author-template #post-tag').css('height', '' + height - tagHeight + '');
                $('.tag-template.tag-portfolio #right #post-portfolios').css('height', '' + height - tagHeight + '');
                $('.post-template #fullscreen #right #post').css('height', '' + height - tagHeight / 1.5 + '');
                if(width < 992) {
                    $('.navmenu.navmenu-default > .menu-content').css('height', '' + height + '');
                } else return
            }
        },
        /* ---------------------------------------------
         Initialize All Function
         --------------------------------------------- */
        initializ: function() {
            accronymApp.preloader();
            accronymApp.scrollBar();
            accronymApp.portfolioLightBox();
            accronymApp.imageBg();
            accronymApp.disqusCount();
            accronymApp.menuScroll();
            accronymApp.menuActiveClass();
            accronymApp.safariIssue();
        }
    };
    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        accronymApp.initializ();
    });
})(jQuery);