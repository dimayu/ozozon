(function ($) {
    $(document).ready(function () {

        //Callback
        $('.call-back__button').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $('.messangers-list').slideToggle("fast");
        });

        //tabs
        $('.tabgroup > div.tab-hidden').hide();
        $('.tabgroup > div.tab-hidden:first-of-type').show();
        $('.tabs a').click(function (e) {
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('rel');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('.tab-hidden').hide();
            $(target).show();
        });

        //Menu button on click event
        $('.mobile-nav-button').on('click', function () {
            // Toggles a class on the menu button to transform the burger menu into a cross
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");

            // Toggles a class that slides the menu into view on the screen
            $('.mobile-menu').toggleClass('mobile-menu--open');
            return false;
        });

        //Modal
        $(".js-open-modal").click(function (e) {
            e.preventDefault();
            dataModal = $(this).attr("data-modal");
            $("#" + dataModal).css({
                display: "block"
            });
        });

        $(".js-close-modal, .modal-sandbox").click(function () {
            $(".modal").css({
                display: "none"
            });
        });

        $('.portfolio__items').slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: false,
            arrows: true,
            centerMode: true,
            variableWidth: true,
            infinite: true,
            focusOnSelect: true,
            cssEase: 'linear',
            touchMove: true,
            responsive: [{
                breakpoint: 900,
                settings: {
                    autoplay: false,
                    adaptiveHeight: true
                }
            }]
        });

        var imgs = $('.slider img');
        imgs.each(function () {
            var item = $(this).closest('.item');
            item.css({
                'background-image': 'url(' + $(this).attr('src') + ')',
                'background-position': 'center',
                '-webkit-background-size': 'cover',
                'background-size': 'cover',
            });
            $(this).hide();
        });

        $('.about-us__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-controll',
            arrows: false,
            dots: false,
            infinite: true,
            focusOnSelect: true,
            fade: true,
            cssEase: 'linear',

        });

        $('.slider-controll').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            vertical: false,
            dots: false,
            infinite: true,
            asNavFor: '.about-us__slider',
            focusOnSelect: true,
            centerMode: true,
            variableWidth: true
        });

        //scroll to #
        $('a[href^="#"').on('click', function () {

            let href = $(this).attr('href');

            $('html, body').animate({
                scrollTop: $(href).offset().top
            });
            return false;
        });

        //Mask phone
        jQuery(function ($) {
            $(".phone").mask("+7 (999) 999-99-99");
        });

        //Сalculator
        const inS = document.querySelector(".InS");
        const rezS = document.querySelector(".rezS");
        const inP = document.querySelector(".InP");
        const rezP = document.querySelector(".rezP");
        const inW = document.querySelector(".InW");
        const inL = document.querySelector(".InL");
        const resW = document.querySelector(".resW");
        const resL = document.querySelector(".resL");
        const colR = document.querySelector(".colR");
        const angle = document.querySelector(".angle");
        const comb = document.querySelector(".comb");
        const pendant = document.querySelector(".pendant");

        $('.calc').on('click', function () {
            const colRR = Math.ceil(inS.value / (inW.value / 1000 * inL.value));
            rezS.textContent = inS.value;
            rezP.textContent = inP.value;
            resW.textContent = inW.value;
            resL.textContent = inL.value;
            colR.textContent = colRR;
            angle.textContent = Math.ceil(inP.value / 3);
            comb.textContent = Math.ceil(inS.value / 5);
            pendant.textContent = Math.ceil(inS.value / 5) * 4;
        });

        $('.reset').on('click', function () {
            rezS.textContent = 0;
            rezP.textContent = 0;
            resW.textContent = 0;
            resL.textContent = 0;
            colR.textContent = 0;
            angle.textContent = 0;
            comb.textContent = 0;
            pendant.textContent = 0;
            $('.calc').attr('disabled', 'disabled');
        });

        $('.input').on('keyup', function () {
            let empty = false;

            $('.input').each(function () {
                empty = $(this).val().length == "";
            });

            if (empty)
                $('.calc').attr('disabled', 'disabled');
            else
                $('.calc').attr('disabled', false);
        });

    });
})(jQuery);