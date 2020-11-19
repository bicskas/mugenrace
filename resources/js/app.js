/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('slick-carousel/slick/slick.min');
const WOW = require('wow.js/dist/wow.min');
const AOS = require('aos/dist/aos');
// import 'wow.js/dist/wow.min';

$(document).on('load', function () {

});

if (!$('body').hasClass('loaded-complete')) {
    loadingProcess();
}

$(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    // new WOW().init();

    $('.szoveg > *').each(function () {
        $(this).attr('data-aos', 'fade-down-right');
        $(this).addClass('aos-init');
    });

    AOS.init({
        anchorPlacement: 'top-bottom',
    });
    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
        }
    );
    wow.init();

    $('.slick-multiple-items').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    $.each(['team', 'rider'], function (index, value) {
        $('#' + value + '-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            speed: 1000,
            asNavFor: '#' + value + '-slider-nav'
        });
        $('#' + value + '-slider-nav').slick({
            asNavFor: '#' + value + '-slider-for',
            dots: false,
            centerMode: true,
            // arrows: false,
            prevArrow: '<button type="button" class="slick-prev">' + $('#' + value + '-slider-nav').data('svg') + '</button>',
            nextArrow: '<button type="button" class="slick-next">' + $('#' + value + '-slider-nav').data('svg') + '</button>',
            focusOnSelect: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
        });
    });

    $('.home-page-slick').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'ease'
    });

// $('.test').on('click', function () {
//     $('.home-page-slick').slick('slickNext');
// });
// 'background-image', 'url(' + imageUrl + ')'
    var scrollBool = true;
    var timerId;
    var timerRemove;
    var mode = 'zoom';
    var bgClass = 'wow animated active slow ' + mode + 'In';
    var next;
    var inDirection;
    var outDirection;
    var addClass;
    var scrollBool = true;
    var timerId;
    var timerRemove;


    $(window).on('mousewheel', function (e) {
        if ($('body').hasClass('homepage')) {
            var active = $('.bg-image-selector:checked');
            var id = active.data('index');
            var count = active.data('count');
            if (scrollBool === true) {
                scrollBool = false;
                if (e.originalEvent.wheelDelta < 0) {
                    if (id === count) {
                        id = 0;
                    }
                    next = $('#select-img-' + (id + 1));
                } else {
                    if (id === 1) {
                        id = count + 1;
                    }
                    next = $('#select-img-' + (id - 1));
                }
                active.attr('checked', false);
                next.attr('checked', true);
                // $('#slider').trigger('click');
                // if ($('#slider-text .active').is(':last-child')) {
                //     $('#slider-text .active').removeClass('active');
                //     $('#slider-text h3').removeClass('active').first().addClass('active');
                // } else {
                //     $('#slider-text .active').removeClass('active').next().addClass('active');
                // }


                clearTimeout(timerId);
                timerId = setTimeout(function () {
                    scrollBool = true;
                }, 1200);
            }

        }
    });

    $(window).on('DOMMouseScroll', function (e) {
        if ($('body').hasClass('homepage')) {
            var active = $('.bg-image-selector:checked');
            var id = active.data('index');
            var count = active.data('count');
            if (scrollBool === true) {
                scrollBool = false;
                if (e.originalEvent.detail > 0) {
                    if (id === count) {
                        id = 0;
                    }
                    next = $('#select-img-' + (id + 1));
                } else {
                    if (id === 1) {
                        id = count + 1;
                    }
                    next = $('#select-img-' + (id - 1));
                }
                active.attr('checked', false);
                next.attr('checked', true);

                clearTimeout(timerId);
                timerId = setTimeout(function () {
                    scrollBool = true;
                }, 1200);
            }
        }
    });


    $(document).on('click', '.cr-container', function () {
        var active = $('.bg-image-selector:checked');
        window.location.href = active.data('href');
    });

    $(document).on('submit', '#subscribeFrom', function (e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            type: 'JSON',
            data: $(this).serialize(),
            success: function (resp) {
                alert(resp);
            }
        });
    });

    var ts;
    $(document).bind('touchstart', function (e) {
        ts = e.originalEvent.touches[0].clientY;
    });

    $(document).bind('touchend', function (e) {
        if ($('body').hasClass('homepage')) {
            var te = e.originalEvent.changedTouches[0].clientY;
            var active = $('.bg-image-selector:checked');
            var id = active.data('index');
            var count = active.data('count');
            if (scrollBool === true) {
                scrollBool = false;
                if (ts > te + 5) {
                    if (id === count) {
                        id = 0;
                    }
                    next = $('#select-img-' + (id + 1));
                } else if (ts < te - 5) {
                    if (id === 1) {
                        id = count + 1;
                    }
                    next = $('#select-img-' + (id - 1));
                }
                active.attr('checked', false);
                next.attr('checked', true);

                clearTimeout(timerId);
                timerId = setTimeout(function () {
                    scrollBool = true;
                }, 1200);
            }
        }
        // if (scrollBool === true) {
        //     scrollBool = false;
        //     if (ts > te + 5) {
        //         if (id === count) {
        //             id = 0;
        //         }
        //         next = $('#bgdiv' + (id + 1));
        //         inDirection = 'Right';
        //         outDirection = 'Left';
        //     } else if (ts < te - 5) {
        //         if (id === 1) {
        //             id = count + 1;
        //         }
        //         next = $('#bgdiv' + (id - 1));
        //         inDirection = 'Left';
        //         outDirection = 'Right';
        //     }
        //
        //     addClass = bgClass + inDirection;
        //
        //     $(active).css('animation-name', '');
        //     $(active).css('visibility', '');
        //     $(next).addClass(addClass);
        //     $(active).removeClass(bgClass + 'Left ' + mode + 'InRight');
        //     $(active).addClass('wow animated active slow ' + mode + 'Out' + outDirection);
        //
        //
        //     wow.sync();
        //     clearTimeout(timerId);
        //     timerId = setTimeout(function () {
        //         scrollBool = true;
        //         $(active).removeClass('wow animated active slow ' + mode + 'Out' + outDirection);
        //     }, 1200);
        // }
    });


    // $(window).on('mousewheel', function (e) {
    //     if ($('body').hasClass('homepage')) {
    //         var active = $('.bg-image.active');
    //         var id = active.data('index');
    //         var count = active.data('count');
    //         if (scrollBool === true) {
    //             scrollBool = false;
    //             if (e.originalEvent.wheelDelta < 0) {
    //                 if (id === count) {
    //                     id = 0;
    //                 }
    //                 next = $('#bgdiv' + (id + 1));
    //                 inDirection = 'Right';
    //                 outDirection = 'Left';
    //             } else {
    //                 if (id === 1) {
    //                     id = count + 1;
    //                 }
    //                 next = $('#bgdiv' + (id - 1));
    //                 inDirection = '';
    //                 outDirection = '';
    //             }
    //             addClass = bgClass + inDirection;
    //
    //             $(active).css('animation-name', '');
    //             $(active).css('visibility', '');
    //             $(next).addClass(addClass);
    //             $(active).removeClass(bgClass + 'Left ' + mode + 'InRight');
    //             $(active).addClass('wow animated active slow ' + mode + 'Out' + outDirection);
    //
    //
    //             wow.sync();
    //             clearTimeout(timerRemove);
    //             clearTimeout(timerId);
    //             timerId = setTimeout(function () {
    //                 scrollBool = true;
    //                 $(active).removeClass('wow animated active slow ' + mode + 'Out' + outDirection);
    //             }, 2100)
    //         }
    //     }
    // });

    // $(window).on('DOMMouseScroll', function (e) {
    //     if ($('body').hasClass('homepage')) {
    //         var active = $('.bg-image.active');
    //         var id = active.data('index');
    //         var count = active.data('count');
    //         if (scrollBool === true) {
    //             scrollBool = false;
    //             if (e.originalEvent.detail > 0) {
    //                 if (id === count) {
    //                     id = 0;
    //                 }
    //                 next = $('#bgdiv' + (id + 1));
    //                 inDirection = 'Right';
    //                 outDirection = 'Left';
    //             } else {
    //                 if (id === 1) {
    //                     id = count + 1;
    //                 }
    //                 next = $('#bgdiv' + (id - 1));
    //                 inDirection = 'Left';
    //                 outDirection = 'Right';
    //             }
    //             addClass = bgClass + inDirection;
    //
    //             $(active).css('animation-name', '');
    //             $(active).css('visibility', '');
    //             $(next).addClass(addClass);
    //             $(active).removeClass(bgClass + 'Left ' + mode + 'InRight');
    //             $(active).addClass('wow animated active slow ' + mode + 'Out' + outDirection);
    //
    //
    //             wow.sync();
    //             clearTimeout(timerId);
    //             timerId = setTimeout(function () {
    //                 scrollBool = true;
    //                 $(active).removeClass('wow animated active slow ' + mode + 'Out' + outDirection);
    //             }, 1200);
    //         }
    //     }
    // });

    // var ts;
    // $(document).bind('touchstart', function (e) {
    //     ts = e.originalEvent.touches[0].clientY;
    // });
    //
    // $(document).bind('touchend', function (e) {
    //     var te = e.originalEvent.changedTouches[0].clientY;
    //     var active = $('.bg-image.active');
    //     var id = active.data('index');
    //     var count = active.data('count');
    //     if (scrollBool === true) {
    //         scrollBool = false;
    //         if (ts > te + 5) {
    //             if (id === count) {
    //                 id = 0;
    //             }
    //             next = $('#bgdiv' + (id + 1));
    //             inDirection = 'Right';
    //             outDirection = 'Left';
    //         } else if (ts < te - 5) {
    //             if (id === 1) {
    //                 id = count + 1;
    //             }
    //             next = $('#bgdiv' + (id - 1));
    //             inDirection = 'Left';
    //             outDirection = 'Right';
    //         }
    //
    //         addClass = bgClass + inDirection;
    //
    //         $(active).css('animation-name', '');
    //         $(active).css('visibility', '');
    //         $(next).addClass(addClass);
    //         $(active).removeClass(bgClass + 'Left ' + mode + 'InRight');
    //         $(active).addClass('wow animated active slow ' + mode + 'Out' + outDirection);
    //
    //
    //         wow.sync();
    //         clearTimeout(timerId);
    //         timerId = setTimeout(function () {
    //             scrollBool = true;
    //             $(active).removeClass('wow animated active slow ' + mode + 'Out' + outDirection);
    //         }, 1200);
    //     }
    // });

    $('#navigation-btn').on('click', function () {
        var $this = $(this);
        var hasOpenClass = $this.hasClass('open');
        $this.toggleClass('open closer');
        if (hasOpenClass) {
            openNav();
        } else {
            closeNav();
        }
    });

    $('#navigation-btn-mobile').on('click', function () {
        var $this = $(this);
        var hasOpenClass = $this.hasClass('open');
        $this.toggleClass('open closer');
        if (hasOpenClass) {
            openNav();
        } else {
            closeNav();
        }
    });

    setTimeout(function () {
        $('#home-page .bg-image').removeClass('hidden');
    }, 300);

});

function openNav() {
    document.getElementById("navigationMenu").style.height = "100%";
    $("#navigationMenu").toggleClass('open-nav close-nav');
    // $("html").toggleClass('noscroll');
}

function closeNav() {
    document.getElementById("navigationMenu").style.height = "0%";
    $("#navigationMenu").toggleClass('open-nav close-nav');
    // $("html").toggleClass('noscroll');
}

function loadingProcess() {
    var img = $('#loading-image');
    var counter = 0;
    var timer = setInterval(function () {
        counter++;
        changeLoadingImageSrc(img, img.data('percent'));
        if (counter >= 49) {
            clearInterval(timer);
            setTimeout(function () {
                closeLoading();
            }, 300);
        }
    }, 100);
}

function changeLoadingImageSrc(img, current) {
    var next = current + 1;
    img.attr('src', '/images/loading/0' + next + '.png');
    img.data('percent', next);
    $('#loading-percent').text(next * 2 + ' %');
}

function closeLoading() {
    $('#loading').css('transition', 'all 1s ease');
    $('#loading').css('height', '0%');
    $('#loading-box').toggleClass('d-block d-none');
}

