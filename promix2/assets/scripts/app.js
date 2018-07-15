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

/*
* табы
**/

(function( $ ){

    var methods = {
        init : function( options ) {

            var settings = $.extend( {
                'active'              : 0,
                'vertical'            : false,
                'onChange'            : function() {}
            }, options);
            var tabID = 0;

            return this.each(function() {
                var tabs = $(this);
                if(!tabs.is('.c-tabs-loaded')){
                    tabID++;
                    var activeTab = tabs.find('.c-tabs__nav .c-tabs__link').eq(settings.active);

                    if(tabs.find('.c-tabs__nav  .c-tabs__link.is-active').length > 0){
                        activeTab = tabs.find('.c-tabs__nav .c-tabs__link.is-active');
                    }
                    var target = activeTab.find('.c-tabs__link').attr('href');
                    var other = tabs.find('.c-tabs__nav .c-tabs__link').not(activeTab);

                    other.each(function () {
                        $(this).removeClass('is-active');
                        $($(this).attr('href')).hide();
                    }).promise().done(function () {
                        activeTab.addClass('is-active');
                        $(target).fadeIn();
                    });
                    tabs.trigger('change');


                    tabs.find('.c-tabs__nav  .c-tabs__link').on('click',function (event) {
                        var tab = $(this);
                        var target = $(this).attr('href');
                        var other = tabs.find('.c-tabs__nav  .c-tabs__link').not(tab);

                        other.each(function () {
                            $(this).removeClass('is-active');
                            $($(this).attr('href')).hide();
                        }).promise().done(function () {
                            tab.addClass('is-active');
                            $(target).fadeIn();
                        });

                        tabs.trigger('change');
                        event.preventDefault();
                    });

                    tabs.on('change',function () {
                        var data = {
                            'tab' : tabs
                        };
                        settings.onChange(data);
                    });
                    tabs.addClass('c-tabs-loaded');
                }

            });
        },
        set : function (val) {
            return this.each(function() {
                var tabs = $(this);
                var activeTab;
                var target;

                if($(val).length > 0){
                    activeTab = tabs.find('.c-tabs__nav li a[href="'+val+'"]').closest('li');
                    target = $(val);
                }else{
                    activeTab = tabs.find('.c-tabs__nav li').eq(val);
                    target = $(activeTab.find('a').attr('href'));
                }


                var other = tabs.find('.c-tabs__nav li').not(activeTab);

                other.each(function () {
                    $(this).removeClass('is-active');
                    $($(this).find('a').attr('href')).hide();
                }).promise().done(function () {
                    activeTab.addClass('is-active');
                    target.fadeIn();
                });
                tabs.trigger('change');


            });
        },
        destroy : function () {
            return this.each(function() {
                var tabs = $(this);
                tabs.removeClass('c-tabs-loaded');
                tabs.find('.c-tabs__nav > li').removeClass('is-active');
                tabs.find('.c-tabs__nav li > a').each(function () {
                    var tab = $(this);
                    $(this).off('click');
                    $(tab.attr('href')).css('display','');
                    $(tab.attr('href')).appendTo(tabs.find('.c-tabs__content'))
                });
            });
        }
    };
    $.fn.tabs = function( method ) {
        // логика вызова метода
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует ' );
        }
    };
})( $ );

//$('.tabs').tabs();
//$('.tabs').tabs('destroy');
//$('.tabs').tabs('set','1');
//$('.tabs').tabs('set','#tab-1');

function wrapTables(table) {
    table.each(function () {
        var table = $(this);
        table.wrap('<div class="c-table-wrapper"></div>');
        var wrapper = table.closest('.c-table-wrapper');

        $(window).on('load resize tabs-change',function () {
            if(table.width() > wrapper.width()){
                wrapper.addClass('is-active');
                wrapper.mCustomScrollbar({
                    axis : 'x',
                    theme : 'dark-thick',
                    scrollButtons:{
                        enable: false
                    },
                    advanced: {
                        updateOnContentResize: true,
                        autoExpandHorizontalScroll:true
                    }
                });
            }else{
                wrapper.removeClass('is-active');
                wrapper.mCustomScrollbar('destroy');
            }
        });
    });
}
wrapTables($('.l-page-body table'));

$('.js-img-background').each(function(){
    var self = $(this);
    self.css('background-image', 'url(' + self.find('img').attr('src') + ')' ).find('img').css('opacity', '0' ).css('visibility','hidden');
    self.css('opacity', '');
});

var map,
    mapCoord = [55.633682,37.438950];

function mapContactsResponsive() {
    if($('#js-map').length > 0){
        //map.setCenter(mapCoord);
        //map.panTo( 55.753321, 37.857773);
        map.setZoom(17);
        map.setCenter(mapCoord);

        if(breakpoints.current === 'xs'){
            map.behaviors.disable('drag');
            map.behaviors.enable('multiTouch');
        }else{
            map.behaviors.enable('drag');
            map.behaviors.enable('multiTouch');
        }
    }

}
function initMaps(){

    if($(document).find('#js-map').length > 0){
        map = new ymaps.Map("js-map", {
            center: mapCoord,
            zoom: 17,
            scroll:false,
            duration: 1000,
            controls:[]
        });

        map.geoObjects
            .add(new ymaps.Placemark(mapCoord, {
                    iconCaption: '',
                    balloonContent: ''
                },{
                    preset: 'islands#redDotIcon'
                }
            ));
        map.behaviors.disable('scrollZoom')

    }

}


ymaps !== undefined && ymaps.ready(initMaps);

$(window).on('resize load',function(){
    ymaps !== undefined && ymaps.ready(mapContactsResponsive);
});




$(window).on('xs sm md', function () {
    $('#js-menu-main').insertBefore($('#js-header-fixed'));
    $('#js-menu-main').css('top', $('#js-header-fixed').height());
    $('.js-main-footer .c-footer__copyright').appendTo($('.js-main-footer .c-footer__inner'));
});

$(window).on('lg container xxl', function () {
    $('#js-menu-main').appendTo($('#js-header-fixed .c-header-fixed__nav'));
    $('.js-main-footer .c-footer__copyright').appendTo($('.js-main-footer .c-footer__center'));
    $('#js-menu-main').css('top', '');
});

$(window).on('load', function () {
    $('html').removeClass('no-js');
}).on('resize', function () {

}).on('click', function (event) {


}).on('scroll', function () {

});

(function () {
    var self = $('.js-section-build');
    var dots = self.find('.c-section-build__scheme__dots');
    var nav = self.find('.c-section-build__scheme__nav');

    function setActive(index) {
        dots.find('li').eq(index).addClass('is-active').siblings().removeClass('is-active');
        nav.find('li').eq(index).addClass('is-active').siblings().removeClass('is-active');
    }

    dots.find('li').on('click', function () {
        setActive($(this).index())
    });
    nav.find('li').on('click', function () {
        setActive($(this).index())
    });
}());
$('.js-tabs').tabs({
    'onChange':function () {
        $(window).trigger('tabs-change');
    }
});
$('.js-menu-toggle').on('click', function (event) {
    $('#js-menu-main').toggleClass('is-expanded');
    $(this).toggleClass('is-active');
    event.stopPropagation();
    event.preventDefault();
});
$('#js-menu-main').on('click', function (event) {
    event.stopPropagation();
});
$(window).on('click', function (event) {
    $('#js-menu-main').removeClass('is-expanded');
    $('.js-menu-toggle').removeClass('is-active');
});
(function () {
    var header = $('#header');
    var headerFixed = $('#js-header-fixed');
    var gutter = 200;

    function init() {
        if ($(window).scrollTop() >= header.outerHeight() && $(window).scrollTop() <= header.outerHeight() + headerFixed.outerHeight() + gutter) {
            var bottom = headerFixed.outerHeight() + gutter;
            var pos = $(window).scrollTop() - header.outerHeight();
            var percent = -100 + pos / bottom * 100;
            headerFixed.addClass('is-active').css('transform', 'translate(0,' + parseInt(percent) + '%)');
        }
        if ($(window).scrollTop() < header.outerHeight()) {
            headerFixed.removeClass('is-active').css('transform', 'translate(0,-100%)');
            $('#js-menu-main').removeClass('is-expanded');
            $('.js-menu-toggle').removeClass('is-active');
        }
        if ($(window).scrollTop() > header.outerHeight() + headerFixed.outerHeight() + gutter) {
            headerFixed.addClass('is-active').css('transform', 'translate(0,0)');
        }
    }

    $(window).on('load scroll', function () {
        init();
    });

}());
(function () {
    $('.js-menu [href^="#"]').on('click', function (event) {
        var link = $(this).attr('href');
        var target = $(link);

        if (target.length > 0) {
            $('html, body').animate({
                scrollTop: target.offset().top - $('#js-header-fixed').height()
            }, 500);
            setActive(link);
            event.preventDefault();
        }
    });

    function setActive(href) {
        var item = $('.js-menu').find('[href="' + href + '"]').closest('.c-menu__item');
        var other = item.closest('li').siblings('li').find('.c-menu__item');
        item.addClass('is-active');
        other.each(function () {
            $(this).removeClass('is-active');
        });
        $('#js-menu-main').removeClass('is-expanded');
        $('.js-menu-toggle').removeClass('is-active');
    }

    $(window).on('scroll load', function (event) {
        var scrollTop = $(window).scrollTop();
        $('.js-menu [href^="#"]').each(function () {
            var link = $(this).attr('href');
            var target = $(link);
            var item = $('.js-menu').find('[href="' + link + '"]').closest('.c-menu__item');

            if (
                scrollTop + $(window).height() / 2 >= target.offset().top &&
                scrollTop + $(window).height() / 2 <= target.offset().top + target.outerHeight() ||
                scrollTop >= target.offset().top && scrollTop <= target.offset().top + target.outerHeight()
            ) {
                setActive(link);

            } else {
                item.removeClass('is-active');
            }
        });
    });
}());

$('[data-paralax]').each(function () {
    var item = $(this);
    var itemTop = item.offset().top;
    var itemBottom = item.offset().top + item.height();
    var itemMod = item.data('paralax') !== undefined ? [].concat(item.data('paralax')) : [0, 0];
    item.data('paralax')[1] !== undefined ? itemMod[1] = item.data('paralax')[1] : itemMod.push(0);

    $(window).on('load', function () {
        item.addClass('is-active');
    });
    $(window).on('load scroll', function (event) {
        var scrollTop = $(window).scrollTop();
        var scrollBottom = $(window).scrollTop() + $(window).height();

        if (scrollBottom >= itemTop && scrollTop <= itemBottom) {
            var end = itemBottom + $(window).height() - itemTop;
            var percentPos = (scrollBottom - itemTop) / end * 100;

            var modYStep = -itemMod[0] / 100;
            var transformY = modYStep * percentPos;

            var modXStep = -itemMod[1] / 100;
            var transformX = modXStep * percentPos;

        }
        item.css('transform', 'translateY(' + parseFloat(transformY) + 'px) translateX(' + parseFloat(transformX) + 'px)');
    });
});

$('#section-feedback').on('change',function (event) {
    var self = $(this);
    function mapResize(){
        ymaps !== undefined && map.container.fitToViewport();
    }
    self.find('.js-textarea').on('autosize:resized', function(){
        mapResize();
    });
    mapResize();
});