setTimeout(function() {
    $('.page-1 > .con > .box-1').addClass('hover');
}, 100);

setTimeout(function() {
    $('.box-2-warp').addClass('hover')
}, 100);

//재생버튼

$('.sinbo > .stop').click(function(){
    
    var Hasactive = $(this).hasClass('active');
    if (Hasactive){
         $('.sinbo > .stop.active').removeClass('active');
    }
    else{
         $('.sinbo > .stop').addClass('active');
    }
});

//라인

$('.sinbo > .stop').click(function(){
    $('.sinbo > .line').addClass('active');
    
});


// 앨범보기 캐러셀 




$('.section-01 > .tab-box > .head > ul > li').click(function() {
    $(this).addClass('active');
    $(this).siblings('.active').removeClass('active');
    
    var $tabBox = $(this).closest('.tab-box');
    
    var index = $(this).index();
    
    $tabBox.find(' > .content > ul > li.active').removeClass('active');
    $tabBox.find(' > .content > ul > li').eq(index).addClass('active');
});

$('.my-carousel-box-1 > .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    slideBy:1,
    nav:true,
    navText:['<i class="xi-angle-left-thin">', '<i class="xi-angle-right-thin"></img>'],
    responsive:{
        0:{
            items:1
        }
    }
});



//프로필 




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