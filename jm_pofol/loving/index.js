//mobile menu-toggle

$(document).ready(function () {
	$(".mobile_toggle a").click(function () {
		$(".mobile_nav").slideToggle(700);
	});

	$(".dropdown").click(function () {
		$(".dropdown-content").slideToggle(700);
	});
});

//main-slider

$(function () {
	$('.carousel-1 > .owl-carousel').owlCarousel({
		autoplay: true, // 오토 플레이
		autoplayTimeout: 2000, // 오토 플레이 시에 다음 슬라이드로 넘어가는 주기, 2초
		autoplayHoverPause: true, // 마우스 올리면 오토 플레이 멈춤
		loop: true, // 끝에서 다시 처음으로 시작
		margin: 0,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			}
		}
	});
});
