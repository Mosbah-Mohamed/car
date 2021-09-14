$(document).ready(function () {

    //spinner

    $(window).on('load', function () {
        $('.load').fadeOut(1500)
    })

    // navbar Toggler
    $('nav .navbar-toggler').on('click', function () {
        $('.one').toggleClass('top');
        $('.two').toggleClass('hidden');
        $('.three').toggleClass('bottom');
    })


    // header height

    $(function () {

        $('.header').height($(window).height())

        $(window).resize(function () {
            $('.header').height($(window).height())

        })
    })

    //testimonials shuffle

    $('.test .buttons .btn').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active').siblings().removeClass('active');


        $('#' + $(this).data('click')).siblings().fadeOut(200, function () {

            $('#' + $(this).data('click')).siblings().removeClass('active');

        })


        $('#' + $(this).data('click')).delay(200).fadeIn(200, function () {

            $('#' + $(this).data('click')).addClass('active');

        })

    })

    //slide toggle faq

    $('.faq .bor i').on('click', function () {

        $(this).parent().parent().find('p').slideToggle(300);

        if ($(this).hasClass('fa-plus-circle')) {

            $(this).attr('class', 'fas fa-minus-circle fa-2x');
            $(this).css('color', '#F8234A');
            $(this).parent().parent().find('h4').css('color', '#F8234A');

        } else {
            $(this).attr('class', 'fas fa-plus-circle fa-2x');
            $(this).css('color', '#000');
            $(this).parent().parent().find('h4').css('color', '#000');

        }
    })

    //venobox

    $('.venobox').venobox();

    //owl-carousel

    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })


    // scroll to sections

    $('nav li a').on('click', function () {

        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 100
        }, 1000)
    })

    //up button

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 1000) {
            $('.up').fadeIn(1000);
        } else {
            $('.up').fadeOut(1000);
        }

    })


    $('.up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700)
    })


    //AOS
    $(function () {

        AOS.init();

        window.addEventListener('load', AOS.refresh)

    })




});