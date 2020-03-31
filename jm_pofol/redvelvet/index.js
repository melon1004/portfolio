setTimeout(function() {
    $('.page-1 > .con > .box-1').addClass('hover');
}, 100);

setTimeout(function() {
    $('.box-2-warp').addClass('hover')
}, 100);

//재생버튼


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




//오디오 재생 





function AudioPlayer1__init() {
    var audioPlayer = document.querySelector(".audio-player");

    var url = audioPlayer.getAttribute('data-url');

    var audio = new Audio(url);

    audio.addEventListener(
        "loadeddata",
        function() {
            //audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(audio.duration);
            audio.volume = .75;
        },
        false
    );

    var timeline = audioPlayer.querySelector(".timeline");
    timeline.addEventListener("click", function(e) {
        var timelineWidth = window.getComputedStyle(timeline).width;
        var timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
        audio.currentTime = timeToSeek;
    }, false);

    var volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
    volumeSlider.addEventListener('click', function(e) {
        var sliderWidth = window.getComputedStyle(volumeSlider).width;
        var newVolume = e.offsetX / parseInt(sliderWidth);
        audio.volume = newVolume;
        audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
    }, false)

    //toggle between playing and pausing on button click
    var playBtn = audioPlayer.querySelector(".controls .toggle-play");
    playBtn.addEventListener(
        "click",
        function() {
            if (audio.paused) {
                playBtn.classList.remove("play");
                playBtn.classList.add("pause");
                audio.play();
                $('.songs > .song-1 > .btn-play').click();
            } else {
                playBtn.classList.remove("pause");
                playBtn.classList.add("play");
                audio.pause();
                $('.songs > .song-1 > .btn-stop').click();
            }
        },
        false
    );
    
    
    //check audio percentage and update time accordingly
    setInterval(function() {
        var progressBar = audioPlayer.querySelector(".progress");
        progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
        if ( audio.currentTime == audio.duration ) {
            playBtn.classList.remove("pause");
            playBtn.classList.add("play");
            $('.songs > .song-1').data('player-current-time', -1);
            return;
        }
        
        var ct = Math.floor(audio.currentTime) * 1000;
        
        $('.songs > .song-1').data('player-current-time', ct);
        
        //audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(audio.currentTime);
    }, 500);

    
    /*
    audioPlayer.querySelector(".volume-button").addEventListener("click", function() {
        var volumeEl = audioPlayer.querySelector(".volume-container .volume");
        audio.muted = !audio.muted;
        if (audio.muted) {
            volumeEl.classList.remove("icono-volumeMedium");
            volumeEl.classList.add("icono-volumeMute");
        } else {
            volumeEl.classList.add("icono-volumeMedium");
            volumeEl.classList.remove("icono-volumeMute");
        }
    });
    */

    //turn 128 seconds into 2:08
    function getTimeCodeFromNum(num) {
        var seconds = parseInt(num);
        var minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        var hours = parseInt(minutes / 60);
        minutes -= hours * 60;

        return minutes + ":" + (seconds % 60);
    }
}

AudioPlayer1__init();

function Song__init() {
    $('.songs > .song').each(function(index2, node2) {
        var $song = $(node2);
        
        $song.data('current-active-no', -1);
        
        var txtTimeline = {};
        
        $song.find('.text-prompter > div').each(function(index, node) {
            var $node = $(node);

            var start = $node.attr('data-start') * 1;
            var end = $node.attr('data-end');

            if ( typeof end == 'undefined' ) {
                var $next = $node.next();
                end = $next.attr('data-start') * 1 - 0.1;
            }

            $node.data('start', start);
            $node.data('end', end);

            var start2 = start / 100;
            var end2 = end / 100;

            for ( var i = start2; i <= end2; i++ ) {
                txtTimeline[i] = {
                    node: $node,
                    index: index
                };
            }
        });
        
        $song.data('txtTimeline', txtTimeline);
    });
    
    $('.songs > .song > .btn-play').click(function() {
        var $song = $(this).closest('.song');
        
        Song__stopPlay($song);
        
        $song.data('player-current-time', 0);
        Song__startPlay($song);
    });
    
    $('.songs > .song > .btn-stop').click(function() {
        var $song = $(this).closest('.song');
        Song__stopPlay($song);
    });
}

function Song__stopPlay($song) {
    $song.data('player-current-time', -1);
}

function Song__startPlay($song) {
    setTimeout(function() {
        var diff = $song.data('player-current-time');
        
        if ( diff != -1 ) {
            diff += 10;
            $song.find('.current-time').text(diff);
            $song.data('player-current-time', diff);
            
            var diff2 = Math.floor(diff / 100);
            
            if ( typeof $song.data('txtTimeline')[diff2] == 'undefined' ) {
                if ( $song.data('current-active-no') != -1 ) {
                    $song.find('.text-prompter > div.active').removeClass('active');
                    $song.data('current-active-no', -1);
                }
            }
            else {
                if ( $song.data('current-active-no') != $song.data('txtTimeline')[diff2].index ) {
                    $song.find('.text-prompter > div.active').removeClass('active');
                    $song.data('txtTimeline')[diff2].node.addClass('active');
                    $song.data('current-active-no', $song.data('txtTimeline')[diff2].index);
                }
            }

            Song__startPlay($song);
        }
    }, 10);
}

Song__init();
