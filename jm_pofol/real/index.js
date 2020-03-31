//이미지 호버

setTimeout(function() {
    $('.top-img > .img').addClass('hover');
}, 100);

setTimeout(function() {
    $('.top-img').addClass('hover')
}, 100);


//도널드 

setTimeout(function() {
    $('.donerd > .do-2').addClass('hover');
}, 100);

setTimeout(function() {
    $('.donerd').addClass('hover')
}, 100);


//menu color effect

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    
    //scroll animation

    var styles;
    $('[data-position]').each(function () {
        $(this).attr('data-top', $(this).position().top)
    })

    window.onscroll = function () {
        var theOffset = window.pageYOffset + window.innerHeight - 100;
        $('[data-position]:not([data-position="center"])').each(function () {
            if (theOffset > (parseInt($(this).attr('data-top')))) {

                styles = {
                    opacity: 1
                }
                styles[$(this).attr('data-position')] = 0
                $(this).css(styles)
                $(this).attr('data-position', 'center')

            }
        })
    }


    //home text animation
    
    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
        var cw = wordArray[currentWord];
        var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
        for (var i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

        currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function () {
            cw[i].className = 'letter out';
        }, i * 80);
    }

    function animateLetterIn(nw, i) {
        setTimeout(function () {
            nw[i].className = 'letter in';
        }, 340 + (i * 80));
    }

    function splitLetters(word) {
        var content = word.innerHTML;
        word.innerHTML = '';
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);

});

//nav active

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.navegation-static ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navegation-static ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}








$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})








function SbsSlider2__init() {
    $('.sbs-slider-2').each(function(index, node) {
        var $slider = $(node);
        
        var animateDuration = parseInt($slider.attr('data-animate-duration'));
        var itemWidth = parseInt($slider.attr('data-item-width'));
        var itemHeight = parseInt($slider.attr('data-item-height'));
        
        $slider.data('animateDuration', animateDuration);
        $slider.data('$items', $slider.find('> .slides'));
        $slider.data('$item', $slider.find('> .slides > *'));
        
        var itemsCount = $slider.data('$item').length;
        
        $slider.data('itemsCount', itemsCount);
        $slider.data('currentIndex', 0);
        
        $slider.data('itemWidth', itemWidth);
        $slider.data('itemHeight', itemHeight);
        $slider.data('halfIndex', parseInt(itemsCount / 2));
        
        $slider.data('$item').css({
            width:itemWidth,
            height:itemHeight
        });
        $slider.height(itemHeight);
    });
    
    $('.sbs-slider-2 > .nav-btns > div').click(function() {
        var $clicked = $(this);
        var $slider = $clicked.closest('.sbs-slider-2');
        var currentIndex = $slider.data('currentIndex');
        
        var isLeft = $clicked.index() == 0;
        
        var newIndex;
        
        if ( isLeft ) {
            newIndex = currentIndex - 1;
            
            if ( newIndex < 0 ) {
                newIndex = 0;
            }
        }
        else {
            newIndex = currentIndex + 1;
            
            if ( newIndex >= $slider.data('itemsCount') ) {
                newIndex = $slider.data('itemsCount') - 1;
            }
        }
        
        SbsSlider2__show($slider, newIndex);
    });
    
    $('.sbs-slider-2 > .slides > li').click(function() {
        var $clicked = $(this);
        var $slider = $clicked.closest('.sbs-slider-2');
        
        SbsSlider2__show($slider, $clicked.index());
    });
    
    $('.sbs-slider-2').each(function(index, node) {
        var $slider = $(node);
        SbsSlider2__show($slider, $slider.data('halfIndex'));
    });
}

function SbsSlider2__show($slider, index) {
    if ( $slider.data('currentIndex') == index ) {
        return;
    }
    
    var itemWidth = $slider.data('itemWidth');
    $slider.data('currentIndex', index);
    //$slider.data('$items').css('margin-left', itemWidth * index * -1 - itemWidth / 2);
    var newMarginLeft = itemWidth * index * -1 - itemWidth / 2;
    
    $slider.data('$items').siblings('.active').removeClass('active');
    var $item = $slider.data('$items').eq(index);
    $item.addClass('active');
    
    $slider.data('$items').stop().animate({
        marginLeft:newMarginLeft
    }, $slider.data('animateDuration'), 'easeInExpo');
    
    if ( $slider.attr('data-item-active-callback-func-name') && window[$slider.attr('data-item-active-callback-func-name')] ) {
        window[$slider.attr('data-item-active-callback-func-name')]($slider, $item, index);
    }
}

var SbsSlider2__$slider2 = $('.sbs-slider-2-1');

function SbsSlider2__itemSetCallback1($slider, $item, index) {
    SbsSlider2__show(SbsSlider2__$slider2, index);
}

SbsSlider2__init();




