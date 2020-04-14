$(document).ready(function () {
    slide(1);
    /* 마우스 스크롤 감지 */
    $("html, body").on('mousewheel DOMMouseScroll', function (e) {
        scrollEvent(e);
    });
    /* 팝업 X버튼 이벤트 */
    $('.popup > img').click(function (e) {
        e.stopPropagation();
        $(this).parent().fadeOut(500);
    });
    $('.popup-1').fadeIn(300);
    $('.popup-3').click(function () {
        location.href = './animation.html';
    });
    $('.popup-3').animate({
        left: 0
    }, 500);
});
/* 키보드 상하 감지 */
$(document).keyup(function (key) {
    if (key.which == 38 || key.which == 40) {
        scrollEvent_2();
    } else return;
});
/* 마우스 스크롤 이벤트 */
function scrollEvent(e) {
    var E = e.originalEvent;
    var nowHeight = $('body').scrollTop();
    var topHeight = $('section.top').height();
    var middleHeight_1 = $('section.middle > article:first-child').outerHeight(true);
    var middleHeight_2 = $('section.middle > article:nth-child(2)').outerHeight(true);
    var middleHeight_3 = $('section.middle > article:nth-child(3)').outerHeight(true);
    var middleHeight_4 = $('section.middle > article:nth-child(4)').outerHeight(true);
    var bottomHeight = $(document).height() - $(window).height();

    delta = 0;
    if (E.detail) {
        delta = E.detail * -40;
    } else {
        delta = E.wheelDelta;
    };

    if (delta > 0) {
        //wheelup
        if (nowHeight <= topHeight) {
            $('body').stop().animate({
                scrollTop: 0
            }, 500);
            $('section.top > .img-box').slideDown(500);
            $('header').fadeOut(300);
            $('header > ul:nth-child(1) > li:nth-child(1) > a').removeClass('active');
        } else if (nowHeight <= topHeight + middleHeight_1) {
            $('body').stop().animate({
                scrollTop: topHeight
            }, 500);
            $('header').fadeOut(300);
            $('header > ul:nth-child(1) > li:nth-child(1) > a').removeClass('active');
        } else if (nowHeight <= topHeight + middleHeight_1 + middleHeight_2) {
            $('body').stop().animate({
                scrollTop: topHeight + middleHeight_1
            }, 500);
        } else if (nowHeight <= topHeight + middleHeight_1 + middleHeight_2 + middleHeight_3) {
            $('body').stop().animate({
                scrollTop: topHeight + middleHeight_1 + middleHeight_2
            }, 500);
        } else if (nowHeight > topHeight + middleHeight_1 + middleHeight_2 + middleHeight_3) {
            $('body').stop().animate({
                scrollTop: topHeight + middleHeight_1 + middleHeight_2 + middleHeight_3
            }, 350);
        }
    } else {
        //wheeldown
        if (nowHeight < topHeight) {
            $('body').stop().animate({
                scrollTop: topHeight
            }, 500);
            $('section.top > .img-box').slideUp(500);
        } else if (nowHeight < topHeight + middleHeight_1) {
            $('body').stop().animate({
                scrollTop: topHeight + middleHeight_1
            }, 500);
            $('header').fadeIn(300);
            $('header > ul:nth-child(1) > li:nth-child(1) > a').addClass('active');
        } else if (nowHeight < topHeight + middleHeight_1 + middleHeight_2) {
            $('body').stop().animate({
                scrollTop: topHeight + middleHeight_1 + middleHeight_2
            }, 500);
        } else if (nowHeight < topHeight + middleHeight_1 + middleHeight_2 + middleHeight_3) {
            $('body').stop().animate({
                scrollTop: topHeight + middleHeight_1 + middleHeight_2 + middleHeight_3
            }, 500);
        }
        if (nowHeight + 1 >= topHeight + middleHeight_1 + middleHeight_2 + middleHeight_3) {
            $('body').stop().animate({
                scrollTop: bottomHeight
            }, 350);
        }
    }
}
/* 키보드 스크롤 */
function scrollEvent_2(k) {
    var nowHeight = $('body').scrollTop();
    var topHeight = $('section.top').height();
    var middleHeight_1 = $('section.middle > article:first-child').outerHeight(true);

    if (nowHeight <= topHeight + middleHeight_1) {
        $('header').fadeOut(300);
        $('header > ul:nth-child(1) > li:nth-child(1) > a').removeClass('active');
    } else {
        $('header').fadeIn(300);
        $('header > ul:nth-child(1) > li:nth-child(1) > a').addClass('active');
    }
}
/* 슬라이드 */
function slide(snum) {
    var nowSlide = snum;
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    $('.banner-img').hide();
    $('.banner-txt').animate({
        top: -winHeight
    }, 0);
    $('.banner-txt').hide();

    $('section.top > .img-box > .banner-img:nth-child(' + snum + ')').show();
    $('section.top > .txt-box > .banner-txt:nth-child(' + snum + ')').show();
    $('section.top > .txt-box > .banner-txt:nth-child(' + snum + ')').animate({
        top: 0
    }, 500);

    $('section.top > .btn-box-1 > div').removeClass('now-btn');
    $('section.top > .btn-box-1 > div:nth-child(' + snum + ')').addClass('now-btn');

    if (nowSlide == 6) {
        nowSlide = 1;
    } else {
        nowSlide = snum + 1;
    }

    autoSlide(nowSlide);
}
/* 슬라이드 자동넘기기 */
var slideTimer;

function autoSlide(ns) {
    clearTimeout(slideTimer);
    slideTimer = setTimeout(function () {
        slide(ns);
    }, 2000);
}
