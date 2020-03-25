console.clear();

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    if ( scrollTop >= 200 ) {
        $('html').addClass('scroll-top-over-200');
    }
    else {
        $('html').removeClass('scroll-top-over-200');
    }
});




$('.top-bar > div > .menu-box-2 > ul > li').mouseenter(function() {
    $(this).siblings('.on').removeClass('on');
    $(this).addClass('on');
    $('.top-bar').addClass('top-bar-ride-menu-box-2-item-on');
});

$('.top-bar > div > .menu-box-2 > ul').mouseleave(function() {
    $('.top-bar > div > .menu-box-2 > ul > li.on').removeClass('on');
    $('.top-bar').removeClass('top-bar-ride-menu-box-2-item-on');
});






///3차









// 4차 애니메이션 효과



function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);
        
        if ( !$node.attr('data-active-on-visible-diff-y') ) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }
        
        if ( !$node.attr('data-active-on-visible-delay') ) {
            $node.attr('data-active-on-visible-delay', '0');
        }
    });
    
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
        var nodeHeight = $node.height();
        
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        
        if ( scrollTop + windowHeight + diffY > offsetTop && scrollTop + windowHeight < offsetTop + windowHeight + nodeHeight ) {
            $node.addClass('active');
        }
        else {
            $node.removeClass('active');
        }
    });
}

ActiveOnVisible__init();