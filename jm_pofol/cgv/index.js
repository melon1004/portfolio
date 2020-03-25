// 기존 버튼형 슬라이더
$('.slider-1 > .page-btns > div').click(function () {
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
$('.slider-1 > .side-btns > div').click(function () {
    var $this = $(this);
    var $slider = $this.closest('.slider-1');

    var index = $this.index();
    var isLeft = index == 0;

    var $current = $slider.find(' > .page-btns > div.active');
    var $post;

    if (isLeft) {
        $post = $current.prev();
    } else {
        $post = $current.next();
    };

    if ($post.length == 0) {
        if (isLeft) {
            $post = $slider.find(' > .page-btns > div:last-child');
        } else {
            $post = $slider.find(' > .page-btns > div:first-child');
        }
    };

    $post.click();
});

setInterval(function () {
    //$('.slider-1 > .side-btns > div').eq(1).click();
}, 3000);

function ProdBox1__updateMenuBox1LiActive() {
    var currentItemNo = $('.prod-box-1 > .my-carousel-box-1 > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item').attr('data-no');

    $('.prod-box-1 > .menu-box-1 > ul > li.active').removeClass('active');

    if (currentItemNo < 5) {
        $('.prod-box-1 > .menu-box-1 > ul > li:nth-child(1)').addClass('active');
    } else if (currentItemNo >= 5 && currentItemNo < 9) {
        $('.prod-box-1 > .menu-box-1 > ul > li:nth-child(2)').addClass('active');
    } else {
        $('.prod-box-1 > .menu-box-1 > ul > li:nth-child(3)').addClass('active');
    }
}

$('.prod-box-1 > .menu-box-1 > ul > li').click(function () {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');

    var index = $(this).index();
    var no = index * 1;

    $('.prod-box-1 > .my-carousel-box-1 > .owl-carousel').trigger('to.owl.carousel', [no, 100]);
});

$('.prod-box-1 > .my-carousel-box-1 > .owl-carousel').owlCarousel({
    smartSpeed: 100,
    slideBy: 4,
    loop: true,
    margin: 0,
    nav: true,
    nav:false,
    responsive: {
        0: {
            items: 4
        }
    },
    onInitialized: ProdBox1__updateMenuBox1LiActive,
    onTranslated: ProdBox1__updateMenuBox1LiActive,
});
