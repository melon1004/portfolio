$('.body-box-wrap + .bar-btn > .content > .title').click(function() {
    if ( $('.body-box-wrap').hasClass('active-page-2') ) {
        $('.body-box-wrap').removeClass('active-page-2');
        $('.body-box-wrap + .bar-btn > .content > ul > li.hover').removeClass('hover');
        $('.body-box-wrap + .bar-btn > .content.hover').removeClass('hover');
    }
});

$('.body-box-wrap + .bar-btn > .content > ul > li').click(function() {
    $('.body-box-wrap').addClass('active-page-2');
});

$('.body-box-wrap + .bar-btn > .content > ul > li').mouseenter(function() {
    $(this).addClass('hover');
    $(this).siblings('.hover').removeClass('hover');
});

$('.body-box-wrap + .bar-btn > .content').mouseenter(function() {
    $(this).addClass('hover');
});

$('.body-box-wrap + .bar-btn > .content').mouseleave(function() {
    $(this).removeClass('hover');
});



//하이트 진로 슬라이더 and 캐러셀


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


//슬라이더
function Slider1__updatePageNavText() {
    var $current = $('.slider-1 > .slides > div.active');
    
    var $prev = $current.prev();
    
    if ( $prev.length == 0 ) {
        $prev = $current.siblings(':last-child');
    }
    
    var $next = $current.next();
    
    if ( $next.length == 0 ) {
        $next = $current.siblings(':first-child');
    }
    
    var prevSlideText = $prev.attr('data-slider-1-slide-text');
    var nextSlideText = $next.attr('data-slider-1-slide-text');
    
    $('.slider-1 > .side-btns > .row:first-child > .text').text(prevSlideText);
    $('.slider-1 > .side-btns > .row:last-child > .text').text(nextSlideText);
}

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
    
    Slider1__updatePageNavText();
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
    var dataMouseOver = $('.slider-1').attr('data-mouse-over');
    
    if ( dataMouseOver != 'Y' ) {
        $('.slider-1 > .side-btns > div:last-child').click();
    }
}, 3000);

$('.slider-1').mouseenter(function() {
    $(this).attr('data-mouse-over', 'Y');
});

$('.slider-1').mouseleave(function() {
    $(this).attr('data-mouse-over', 'N');
});

Slider1__updatePageNavText();



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
    margin:40,
    nav:false,
    responsive:{
        0:{
            items:3
        }
    }
});

