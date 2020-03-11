/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('slick-carousel/slick/slick.min');
const WOW = require('wow.js/dist/wow.min');
import 'wow.js/dist/wow.min';

$(function () {
    // new WOW().init();

    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 500,          // distance to the element when triggering the animation (default is 0)
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

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
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

    $(window).on('mousewheel', function (e) {
        var active = $('.bg-image.active');
        var id = active.data('index');
        var count = active.data('count');
        if (scrollBool === true) {
            scrollBool = false;
            if (e.originalEvent.wheelDelta < 0) {
                if (id === count) {
                    id = 0;
                }
                next = $('#bgdiv' + (id + 1));
                inDirection = 'Right';
                outDirection = 'Left';
            } else {
                if (id === 1) {
                    id = count + 1;
                }
                next = $('#bgdiv' + (id - 1));
                inDirection = '';
                outDirection = '';
            }
            addClass = bgClass + inDirection;

            $(active).css('animation-name', '');
            $(active).css('visibility', '');
            $(next).addClass(addClass);
            $(active).removeClass(bgClass + 'Left ' + mode + 'InRight');
            $(active).addClass('wow animated active slow ' + mode + 'Out' + outDirection);


            wow.sync();
            clearTimeout(timerRemove);
            clearTimeout(timerId);
            // timerRemove = setTimeout(function () {
            //     $(active).removeClass('wow animated active slow ' + mode + 'Out' + outDirection);
            // }, 1200)
            timerId = setTimeout(function () {
                scrollBool = true;
                $(active).removeClass('wow animated active slow ' + mode + 'Out' + outDirection);
            }, 2100)
        }
    });

    $(window).on('DOMMouseScroll', function (e) {
        var active = $('.bg-image.active');
        var id = active.data('index');
        var count = active.data('count');
        if (scrollBool === true) {
            scrollBool = false;
            if (e.originalEvent.detail > 0) {
                if (id === count) {
                    id = 0;
                }
                next = $('#bgdiv' + (id + 1));
                inDirection = 'Right';
                outDirection = 'Left';
            } else {
                if (id === 1) {
                    id = count + 1;
                }
                next = $('#bgdiv' + (id - 1));
                inDirection = 'Left';
                outDirection = 'Right';
            }
            addClass = bgClass + inDirection;

            $(active).css('animation-name', '');
            $(active).css('visibility', '');
            $(next).addClass(addClass);
            $(active).removeClass(bgClass + 'Left ' + mode + 'InRight');
            $(active).addClass('wow animated active slow ' + mode + 'Out' + outDirection);


            wow.sync();
            clearTimeout(timerId);
            timerId = setTimeout(function () {
                scrollBool = true;
                $(active).removeClass('wow animated active slow ' + mode + 'Out' + outDirection);
            }, 1200)
        }
    });

    // var ts;
    // $(document).bind('touchstart', function (e){
    //     ts = e.originalEvent.touches[0].clientY;
    // });
    //
    // $(document).bind('touchend', function (e){
    //     var te = e.originalEvent.changedTouches[0].clientY;
    //     if(ts > te+5){
    //         slide_down();
    //     }else if(ts < te-5){
    //         slide_up();
    //     }
    // });
});
