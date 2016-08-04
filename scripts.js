var width_screen;

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

$(window).resize(function(){
    $('.carusel').removeAttr("style");
    $('.carusel img').removeAttr("style");
    delay(function () {
        console.log($(window).width());
        SetSizes($(window).width());
    }, 1000);
})

function SetSizes (width_screen) {
    if (width_screen > 974) {

        left_top = 0;
        left_left = 0;

        center_top = -50;
        center_left = 200;
        center_img = 346;

        right_left = 470;
        right_top = 0;

        img_width = 277;
    } else if (width_screen > 768) {

        left_top = 0;
        left_left = 10;

        center_top = -35;
        center_left = 165;
        center_img = 300;

        right_left = 385;
        right_top = 0;

        img_width = 250;
    } else if (width_screen > 532){

        left_top = 0;
        left_left = '10%';

        center_top = -15;
        center_left = '33%';
        center_img = 175;

        right_left = '60%';
        right_top = 0;

        img_width = 150;
    } else{

        left_top = 0;
        left_left = 0;

        center_top = 0;
        center_left = '15%';
        center_img = 175;

        right_left = '30%';
        right_top = 0;

        img_width = 175;
    }
}

function owlSetsCli () {
    $('.clients .owl-item > .item > img').css("opacity", "1");
    $('.clients .owl-stage > .center + * > .item > img').css("opacity", "0.5");
    $('.clients .owl-stage > .center').prev().children('.item').children('img').css("opacity", "0.5");
    var active_img = $('.clients .owl-stage > .center .item img').attr("src");
    $('.clients .mini-map img').css("border", "2px solid #FFF");
    $('.clients .mini-map [src = "' + active_img + '"]').css("border", "2px solid #C2C2C2");
}

function owlSetsPart () {
    $('.partners .owl-item > .item > img').css("opacity", "1");
    $('.partners .owl-stage > .center + * > .item > img').css("opacity", "0.5");
    $('.partners .owl-stage > .center').prev().children('.item').children('img').css("opacity", "0.5");
    var active_img = $('.partners .owl-stage > .center .item img').attr("src");
    $('.partners .mini-map img').css("border", "2px solid #FFF");
    $('.partners .mini-map [src = "' + active_img + '"]').css("border", "2px solid #C2C2C2");
}

function activeMenu () {
    var secs = [];
    $('section').each(function(ind, elem){
        secs.push($(this).offset().top);
    });
    var top = $(window).scrollTop();
    $('.nav > li').removeClass('active');
    for (var i = 0; i < 14; i++) {
        if (top >= secs[i] && top < secs[i + 1]) {
            $('.nav > li:eq(' + i + ')').addClass('active');
            return true;
        }
    }
}

$(document).ready(function(){




    var owl = $(".owl-carousel").owlCarousel({
        items:3,
        loop:true,
        margin: 25,
        center:true,
        URLhashListener:true,
    });
    var owl2 = $(".owl-carousel-2").owlCarousel({
        items:3,
        loop:true,
        margin: 25,
        center:true,
        URLhashListener:true,
    });

    activeMenu();


    owlSetsCli();
    owlSetsPart();
    owl.on('translated.owl.carousel', owlSetsCli);
    owl2.on('translated.owl.carousel', owlSetsPart);
    owl.on('translate.owl.carousel', function(){
        $('.owl-item > .item > img').css("opacity", "0.5");
    });
    owl2.on('translate.owl.carousel', function(){
        $('.owl-item > .item > img').css("opacity", "0.5");
    });

    $(' .right-button').click(function(){
        owl.trigger('next.owl.carousel');
    });
    $('.clients .left-button').click(function(){
        owl.trigger('prev.owl.carousel');
    })

    $('.clients .mini-map').on('click', 'img', (function (){
        owl.trigger('to.owl.carousel', $( this ).index())
    }));

    $('.partners .right-button').click(function(){
        owl2.trigger('next.owl.carousel');
    });
    $('.partners .left-button').click(function(){
        owl2.trigger('prev.owl.carousel');
    })

    $('.partners .mini-map').on('click', 'img', (function (){
        owl2.trigger('to.owl.carousel', $( this ).index())
    }));


    function setActive () {
        var first_class = $('.carusel-row div:first').attr('class');
        $('.carusel__button').removeClass('active');
        if (first_class == 'carusel left') {
            $('.carusel__button:eq(1)').addClass('active');
        } else if (first_class == 'carusel right'){
            $('.carusel__button:eq(2)').addClass('active');
        } else if (first_class == 'carusel center'){
            $('.carusel__button:eq(0)').addClass('active');
        }
    }

    var speed = 400; //speed of animate carusel
    SetSizes($(window).width());

    function caruselRight () {

        $('.carusel.left').css('z-index', '30');
        $('.carusel.left').animate({
            'top': center_top, //'-50px',
            'left': center_left //'200px'
        });
        $('.carusel.left img').animate({
            'width': center_img//"346"
        }, speed);

        $('.carusel.right').css('z-index', '5');
        $('.carusel.right').animate({
            'top': left_top, //'0px',
            'left': left_left //'0px'
        }, speed);


        $('.carusel.center').css('z-index', '7');
        $('.carusel.center').animate({
            'left': right_left, //'470px',
            'top': right_top //'0px'
        }, speed);
        $('.carusel.center img').animate({
            'width': img_width //"277"
        }, speed);

        left = $('.carusel.left').removeClass('left');
        right = $('.carusel.right').removeClass('right');
        center = $('.carusel.center').removeClass('center');
        left.addClass('center');
        right.addClass('left');
        center.addClass('right');
        setActive ();
    }

    function caruselLeft () {

        $('.carusel.left').css('z-index', '5');
        $('.carusel.left').animate({
            'left': right_left//'470px'
        });

        $('.carusel.right').css('z-index', '30');
        $('.carusel.right').animate({
            'top': center_top, //'-50px',
            'left': center_left//'200px'
        }, speed);
        $('.carusel.right img').animate({
            'width': center_img //"346"
        }, speed);

        $('.carusel.center').css('z-index', '7');
        $('.carusel.center').animate({
            'top': left_top, //'0px',
            'left': left_left //'0px'
        }, speed);
        $('.carusel.center img').animate({
            'width': img_width //"277"
        }, speed);

        left = $('.carusel.left').removeClass('left');
        right = $('.carusel.right').removeClass('right');
        center = $('.carusel.center').removeClass('center');
        left.addClass('right');
        right.addClass('center');
        center.addClass('left');
        setActive ();
    }

    $('.button-left').click(caruselLeft);

    $('.button-right').click(caruselRight);

    $('.carusel__button:eq(0)').click(function () {
        var first_class = $('.carusel-row div:first').attr('class');
        if (first_class == 'carusel left') {caruselRight()}
        if (first_class == 'carusel right') {caruselLeft()}
    })

    $('.carusel__button:eq(1)').click(function () {
        var first_class = $('.carusel-row div:first').attr('class');
        if (first_class == 'carusel center') {caruselLeft()}
        if (first_class == 'carusel right') {caruselRight()}
    })

    $('.carusel__button:eq(2)').click(function () {
        var first_class = $('.carusel-row div:first').attr('class');
        if (first_class == 'carusel left') {caruselLeft()}
        if (first_class == 'carusel center') {caruselRight()}
    })

    $("a.scrollTo").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        activeMenu();
        return false;
    });

        /*animations*/
    $('.anim-left').addClass('unvisible').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });
    $('.anim-bottom').addClass('unvisible').viewportChecker({
        classToAdd: 'visible animated fadeInBottom',
        offset: 100
    });
    $('.anim-right').addClass('unvisible').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });
    $('.anim-down-big').addClass('unvisible').viewportChecker({
        classToAdd: 'visible animated fadeInDownBig',
        offset: 100
    });
    $('.anim-up-big').addClass('unvisible').viewportChecker({
        classToAdd: 'visible animated fadeInUpBig',
        offset: 100
    });
    $('.anim-zoom').addClass('unvisible').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });
    var speed = 500;
    $('.anim-h').addClass('unvisible').viewportChecker({
        offset: '30%',
        callbackFunction: function(elem, action){
            elem.addClass('visible');
            elem.children('*:eq(1)').addClass('unvisible');
            elem.children('*:eq(2)').addClass('unvisible');
            elem.children('*:eq(3)').addClass('unvisible');
            elem.children('div').css('width', '0%').animate({width: '23%'}, speed,
                function(){
                    elem.children('*:eq(1)').addClass('visible animated fadeInUp');
                    setTimeout(function(){
                        elem.children('*:eq(2)').addClass('visible animated fadeInUp');
                        setTimeout(function(){
                            elem.children('*:eq(3)').addClass('visible animated fadeInUp');
                        },speed);
                    },speed);
            });
        },
    });

    $('.vertical-4').addClass('unvisible').viewportChecker({
        offset: '20%',
        callbackFunction: function (elem, action) {
            elem.css('height', 0).animate({height: '60px'}, speed);
        }
    });
    $('.anim-svg').addClass('unvisible').viewportChecker({
        offset: '30%',
        callbackFunction: function(elem, action){
            var id = elem.children().attr('id');
            var line_round_1 = new Vivus(id, {type: 'oneByOne', duration: 50});
            line_round_1.reset().play();
        }
    });

    $('.anim-up').addClass('unvisible').viewportChecker({
        offset: '20%',
        callbackFunction: function(elem, action){
            var top = elem.height() * 0.6;
            elem.addClass('visible');
            elem.css({'top': top, opacity : 0}).animate({top: 0, opacity: 1}, speed * 2 );
        },
    });
    $('.anim-list.toRight').viewportChecker({
        offset: '30%',
        callbackFunction: function(elem, action){
            elem.children().addClass('unvisible');
            console.log(elem.children().length);
            function doElement (i) {
                setTimeout(function(){
                    elem.children('*:eq(' + i + ')').addClass('visible animated fadeInRight');
                    i++;
                    if (i < elem.children().length) {
                        doElement (i);
                    };
                },speed)
            }
            doElement (0);
        }
    });
    $('.anim-list.toLeft').viewportChecker({
        offset: '30%',
        callbackFunction: function(elem, action){
            elem.children().addClass('unvisible');
            console.log(elem.children().length);
            function doElement1 (i) {
                setTimeout(function(){
                    elem.children('*:eq(' + i + ')').addClass('visible animated fadeInLeft');
                    i++;
                    if (i < elem.children().length) {
                        doElement1 (i);
                    };
                },speed)
            }
            doElement1 (0);
        }
    });
    $('.anim-list.toUp').viewportChecker({
        offset: '30%',
        callbackFunction: function(elem, action){
            elem.children().addClass('unvisible');
            console.log(elem.children().length);
            function doElement1 (i) {
                setTimeout(function(){
                    elem.children('*:eq(' + i + ')').addClass('visible animated fadeInUp');
                    i++;
                    if (i < elem.children().length) {
                        doElement1 (i);
                    };
                },speed)
            }
            doElement1 (0);
        }
    });


    $('#send').submit(function(){
        var form = $(this);
        var error = false;
        if (error == false) {
            var data = form.serialize();
            $.ajax({
                type: "GET",
                url: 'send.php',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                    $('.cssload-progress').removeClass('unvisible');
                },
                success: function(data){
                    if (data['error'] == 0) {
                        $('section').css('display','none');
                        $('#regForm').modal('hide');
                        $('.thank-back').css('display','block');
                    } else{
                        console.log(data['error']);
                    };
                 },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                },
                complete: function(data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                    $('.cssload-progress').addClass('unvisible');
                }
            });
        }
        return false; // вырубaeм стaндaртную oтпрaвку фoрмы
    });
});

$(window).scroll(activeMenu);