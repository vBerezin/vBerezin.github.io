var breakpoints = {};
breakpoints.current = '';
breakpoints.getValue = function () {
    this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
    return this.value;
};
breakpoints.triggerEvent = function () {
    $(window).trigger(breakpoints.value);
    console.log(breakpoints.value);
};

$(window).on('resize load',function () {
    breakpoints.getValue();
    if(breakpoints.value !== breakpoints.current){
        breakpoints.current = breakpoints.value;
        breakpoints.triggerEvent();
    }
});

autosize($('.js-textarea'));
$('.js-input-phone').mask("+7(999) 999-99-99");

function wrapTables(table) {
    table.each(function () {
       var table = $(this);
       table.wrap('<div class="c-table-wrapper"></div>');
       var wrapper = table.closest('.c-table-wrapper');

       $(window).on('resize load',function () {
           if(table.width() > wrapper.width()){
               wrapper.addClass('is-active');
           }else{
               wrapper.removeClass('is-active');
           }
       });
    });
}
wrapTables($('.l-page-content table'));

$('.js-img-background').each(function(){
    var self = $(this);
    self.css('background-image', 'url(' + self.find('img').attr('src') + ')' ).find('img').css('opacity', '0' ).css('visibility','hidden');
    self.css('opacity', '');
});



$(window).on('xs sm md',function () {
    $('#js-menu-main').insertBefore($('#js-header-fixed'));
    $('#js-menu-main').css('top',$('#js-header-fixed').height());
});

$(window).on('lg container xxl',function () {
    $('#js-menu-main').appendTo($('#js-header-fixed .c-header-fixed__nav'));
    $('#js-menu-main').css('top','');
});

$(window).on('load',function () {
    $('html').removeClass('no-js');
}).on('resize',function () {

}).on('click',function (event) {


}).on('scroll',function () {

});

(function(){
    var self = $('.js-section-build');
    var dots = self.find('.c-section-build__scheme__dots');
    var nav = self.find('.c-section-build__scheme__nav');

    function setActive(index) {
        dots.find('li').eq(index).addClass('is-active').siblings().removeClass('is-active');
        nav.find('li').eq(index).addClass('is-active').siblings().removeClass('is-active');
    }
    dots.find('li').on('click',function () {
        setActive($(this).index())
    });
    nav.find('li').on('click',function () {
        setActive($(this).index())
    });
}());

(function () {
    $(window).on('mousemove',function (event) {
        var posX = event.clientX;
        var posY = event.clientY;
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        if(posX <= windowWidth/2){
            posX = windowWidth/2 - posX
        }else{
            posX = (posX - windowWidth/2)*-1
        }

        if(posY <= windowHeight/2){
            posY = windowHeight/2 - posY
        }else{
            posY = (posY - windowHeight/2)*-1
        }

        $('.js-object').each(function () {
            var itemX = 0;
            var itemY = 0;

            if($(this).data('x') != undefined){
                itemX = posX * parseFloat($(this).data('x'));
            }
            if($(this).data('y') != undefined){
                itemY = posY * parseFloat($(this).data('y'));
            }

            $(this).css('transform','translateX('+ itemX +'px) translateY('+ itemY +'px)');
        });
    });
}());

$('.js-menu-toggle').on('click',function (event) {
    $('#js-menu-main').toggleClass('is-expanded');
    $(this).toggleClass('is-active');
    event.stopPropagation();
    event.preventDefault();
});
$('#js-menu-main').on('click',function (event) {
    event.stopPropagation();
});
$(window).on('click',function (event) {
    $('#js-menu-main').removeClass('is-expanded');
    $('.js-menu-toggle').removeClass('is-active');
});
(function(){
    var header = $('#header');
    var headerFixed = $('#js-header-fixed');
    var gutter = 200;

    function init() {
        if($(window).scrollTop() >= header.outerHeight() && $(window).scrollTop() <= header.outerHeight() + headerFixed.outerHeight()+gutter){
            var bottom = headerFixed.outerHeight()+gutter;
            var pos = $(window).scrollTop() - header.outerHeight();
            var percent = -100 + pos/bottom*100;
            headerFixed.addClass('is-active').css('transform','translate(0,'+ parseInt(percent) +'%)');
        }
        if($(window).scrollTop() < header.outerHeight()){
            headerFixed.removeClass('is-active').css('transform','translate(0,-100%)');
            $('#js-menu-main').removeClass('is-expanded');
            $('.js-menu-toggle').removeClass('is-active');
        }
        if($(window).scrollTop() > header.outerHeight() + headerFixed.outerHeight()+gutter){
            headerFixed.addClass('is-active').css('transform','translate(0,0)');
        }
    }
    $(window).on('load scroll',function () {
        init();
    });

}());
(function(){
    $('.js-menu [href^="#"]').on('click',function (event) {
        var link = $(this).attr('href');
        var target = $(link);

        if(target.length > 0){
            $('html, body').animate({
                scrollTop: target.offset().top - $('#js-header-fixed').height()
            }, 500);
            setActive(link);
            event.preventDefault();
        }
    });

    function setActive(href) {
        var item = $('.js-menu').find('[href="'+href+'"]').closest('.c-menu__item');
        var other = item.closest('li').siblings('li').find('.c-menu__item');
        item.addClass('is-active');
        other.each(function () {
            $(this).removeClass('is-active');
        });
        $('#js-menu-main').removeClass('is-expanded');
        $('.js-menu-toggle').removeClass('is-active');
    }

    $(window).on('scroll load',function (event) {
        var scrollTop = $(window).scrollTop();
        $('.js-menu [href^="#"]').each(function(){
            var link = $(this).attr('href');
            var target = $(link);
            var item = $('.js-menu').find('[href="'+link+'"]').closest('.c-menu__item');

            if (
                scrollTop + $(window).height()/2 >= target.offset().top &&
                scrollTop + $(window).height()/2 <= target.offset().top + target.outerHeight() ||
                scrollTop >= target.offset().top && scrollTop <= target.offset().top + target.outerHeight()
            ) {
                setActive(link);

            } else {
                item.removeClass('is-active');
            }
        });
    });
}());