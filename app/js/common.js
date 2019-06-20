$(document).ready(function() {
	$('.popup_button').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#text',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#text';
				}
			}
		}
	});
});


// Карусель.

$(document).ready(function(){
	$(".info-carousel").owlCarousel({
	//	nav:true,
	//	dots:true,
		loop:true,
		center: true,
	//	autoWidth:true,
	//	items:1,
	//	autoplay:true,
	//	autoplayTimeout:2000,
	//	smartSpeed:1900,
		responsive: {0:{items:1}, 600:{items:2, center:false}, 900:{items:3}},
	});
	$(".about__carousel").owlCarousel({
		nav:true,
	//	dots:true,
		loop:true,
		center: true,
	//	autoWidth:true,
	//	items:1,
	//	autoplay:true,
	//	autoplayTimeout:2000,
	//	smartSpeed:1900,
		responsive: {0:{items:1}},
	});
});


// Кнопка на верх

$(document).ready(function(){

	$("#back-top").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1000) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

// Слайдер 20 20 https://github.com/zurb/twentytwenty

// Инициализируем плагин
$(function(){
  $("#container1").twentytwenty();
});

// Настройки

$(function(){
  $("#container1").twentytwenty({
    default_offset_pct: 0.5, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
    orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
    before_label: 'До', // подпись 'до'
    after_label: 'После', // подпись 'после'
    no_overlay: false, // не показывать затемнение с надписями 'до' и 'после'
    move_slider_on_hover: false, // двигать "ползунок" слайдера вместе с курсором мыши
    move_with_handle_only: true, // двигать слайдер только за его "ползунок"
    click_to_move: false // разрешить перемещение "ползунка" слайдера по клику на изображении
  });
});

