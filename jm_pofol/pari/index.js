console.clear();

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    if ( scrollTop >= 300 ) {
        $('html').addClass('scroll-top-over-300');
    }
    else {
        $('html').removeClass('scroll-top-over-300');
    }
});


//슬라이더 //



// 기존 버튼형 슬라이더
$('.slider-1 > .page-btns > div').click(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var $slider = $this.parent().parent();
    
    var $current = $slider.find(' > .slides > div.active');
    
    var $post = $slider.find(' > .slides > div').eq(index);
    
    $current.removeClass('active');
    $post.addClass('active');
});

// 좌/우 버튼 추가 슬라이더
$('.slider-1 > .side-btns > div').click(function(){
    var $this = $(this);
    var $slider = $this.closest('.slider-1');
    
    var index = $this.index();
    var isLeft = index == 0;
    
    var $current = $slider.find(' > .page-btns > div.active');
    var $post;
    
    if ( isLeft ){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    };
    
    if ( $post.length == 0 ){
        if ( isLeft ){
            $post = $slider.find(' > .page-btns > div:last-child');
        }
        else {
            $post = $slider.find(' > .page-btns > div:first-child');
        }
    };
    
    $post.click();
});

setInterval(function(){
    $('.slider-1 > .side-btns > div').eq(1).click();
}, 3000);



//6차



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
    slideBy:5,
    nav:true,
    navText:['<i class="xi-angle-left-thin">', '<i class="xi-angle-right-thin"></img>'],
    responsive:{
        0:{
            items:5
        }
    }
});




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


