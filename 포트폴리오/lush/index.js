$(".sbs-slider > .page-nav > div").click(function () {
    var $this = $(this);
    var $slider = $this.closest(".sbs-slider");

    $this.addClass("active");
    $this.siblings(".active").removeClass("active");

    var index = $this.index();

    $slider.find(" > .slides > .active").removeClass("active");
    $slider
        .find(" > .slides > div")
        .eq(index)
        .addClass("active");
});

$(".sbs-slider > .side-btns > div").click(function () {
    var $this = $(this);
    var index = $this.index();
    var $slider = $this.closest(".sbs-slider");

    var $current = $slider.find(".page-nav > div.active");
    var $post;

    if (index == 0) {
        $post = $current.prev();
    } else {
        $post = $current.next();
    }

    if ($post.length == 0) {
        if (index == 0) {
            $post = $slider.find(".page-nav > div:last-child");
        } else {
            $post = $slider.find(".page-nav > div:first-child");
        }
    }

    $post.click();
});

function Slider1__moveNext() {
    var $slider = $(".sbs-slider");
    var $nextBtn = $slider.find(".page-nav > div");
    $nextBtn.click();
}
setInterval(Slider1__moveNext, 3000);

$(".section-01 > .tab-box > .head > ul > li").click(function () {
    $(this).addClass("active");
    $(this)
        .siblings(".active")
        .removeClass("active");

    var $tabBox = $(this).closest(".tab-box");

    var index = $(this).index();

    $tabBox.find(" > .content > ul > li.active").removeClass("active");
    $tabBox
        .find(" > .content > ul > li")
        .eq(index)
        .addClass("active");
});

$(".my-carousel-box-1 > .owl-carousel").owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>'
    ],
    items: 3,
    slideBy: 3,
});

$(".slider > .pages > div").click(function () {
    var $this = $(this);
    var $slider = $this.closest(".slider");

    $this.addClass("active");
    $this.siblings(".active").removeClass("active");

    var index = $this.index();

    $slider.find(" > .slides > .active").removeClass("active");
    $slider
        .find(" > .slides > div")
        .eq(index)
        .addClass("active");
});

$(".slider > .side-btns > div").click(function () {
    var $this = $(this);
    var index = $this.index();
    var $slider = $this.closest(".slider");

    var $current = $slider.find(".pages > div.active");
    var $post;

    if (index == 0) {
        $post = $current.prev();
    } else {
        $post = $current.next();
    }

    if ($post.length == 0) {
        if (index == 0) {
            $post = $slider.find(".pages > div:last-child");
        } else {
            $post = $slider.find(".pages > div:first-child");
        }
    }

    $post.click();
});

function Slider1__moveNext() {
    var $slider = $(".slider-1");
    var $nextBtn = $slider.find(".side-btns > div:last-child");
    $nextBtn.click();
}

setInterval(Slider1__moveNext, 3000);


var $imgBox1 = $('.box-6 > .row > .cell:last-child > .img-box');


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    var imgBox1TranslateY = scrollTop / 8 * -1;
    imgBox1TranslateY += 200;
    $imgBox1.css('transform', 'translateY(' + imgBox1TranslateY + 'px)');
});