$('.slider > .pages > div').click(function() {
    var $this = $(this);
    var $slider = $this.closest('.slider');
    
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var index = $this.index();
    
    $slider.find(' > .slides > .active').removeClass('active');
    $slider.find(' > .slides > div').eq(index).addClass('active');
    
    console.log(index);
    $('.full').attr('data-background-color', index);
});

$('.slider > .side-btns > div').click(function() {
    var $this = $(this);
    var index = $this.index();
    var $slider = $this.closest('.slider');
    
    var $current = $slider.find('.pages > div.active');
    var $post;
    
    if ( index == 0 ) {
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }
    
    if ( $post.length == 0 ) {
        if ( index == 0 ) {
            $post = $slider.find('.pages > div:last-child');
        }
        else {
            $post = $slider.find('.pages > div:first-child');
        }
    }
   
    
    $post.click();
});

function Slider1__moveNext() {
    var $slider = $('.slider-1');
    var $nextBtn = $slider.find('.side-btns > div:last-child');
    $nextBtn.click();
}

setInterval(Slider1__moveNext, 3000);

if ( $('.full > .pages > div:first-child').hasClass('active') ){
    $('.full').css('background-color','red');
    alert('hi');
}



// $ => 포장하다.
$('.sbs-slider > .side-bars > div').click(function() {
    // this 클릭 당사자
    var $clickedBtn = $(this);
    // closest => 조상중에서 가장 가까운 엘리먼트 하나 찾아주세요.
    var $slider = $clickedBtn.closest('.sbs-slider');
    
    //.index() => 형제번호
    var isLeft = $clickedBtn.index() == 0;
    
    // find => 지역탐색
    // $currnet => 현재 active 된 녀석
    var $currnet = $slider.find('.slides > .active');
    // next => 다음 형제 가져와
    var $post = null;
    
    if ( isLeft ) {
        $post = $currnet.prev();
    }
    else {
        $post = $currnet.next();
    }
    
    if ( $post.length == 0 ) {
        if ( isLeft ) {
            $post = $slider.find('.slides > div:last-child');
        }
        else {
            $post = $slider.find('.slides > div:first-child');
        }
    }
    
    $currnet.removeClass('active');
    $post.addClass('active');
});

// $('검색어'); => 이렇게 하면 엘리먼트들을 검색하고 검새결과를 장바구니에 담는다.
// 주어.click => `주어`에 해당하는 녀석이 클릭당하면 할일을 설정한다.
// function() { alert('안녕'); } => 이게 함수이다. 즉 클릭당하면 할 일을 정의한다.

// 제이쿼리 기능인 $ 를 사용해서 `.sbs-slider > .side-bars > div`에 해당하는 엘리먼트들을 검색하고 검색한 결과를 장바구니에 담아 놓는다.
// 그 후 그 장바구니에 click 이라는 명령과 함께 함수하나를 전달한다.
// 장바구니는 함수를 받고 자기 안에 있는 엘리먼트들(2개)에게 전달한다.
// 전달하면서 이렇게 이야기 한다. "이거 잘 가지고 있다가 클릭 당하면 실행해!"


$('.my-1 > .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:4
        }
    },
    center: true,
});

//$('.my-1 > .owl-carousel').trigger('to.owl.carousel', 1, 0);


$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    //console.log(scrollTop);
    
    if ( scrollTop > 1100 ) {
        $('.ll').addClass('active');
    }
    else {
        $('.ll').removeClass('active');
    }
});