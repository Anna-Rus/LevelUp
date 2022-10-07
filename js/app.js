$(document).ready(function () {
	$('.reviews__slider').slick({
		arrows: false,
		dots: true,
		//adaptiveHeight: true,
		slidesToShow: 1,
		speed: 1600,
		vertical: true,
		verticalSwiping: true,
		touchThreshold: true,
	});
});


//timer
function dec_min() {
	min = parseInt($('.timer__min').html());
	if (min !== 0) {
		$('.timer__min').html(min - 1);
		$('.timer__sec').html(59);
	}
}

$(document).ready(function () {
	var Update = function () {
		$('.timer__sec').each(function () {
			var count = parseInt($(this).html());
			if (count != 0) {
				$(this).html(count - 1);
			} else {
				dec_min();
			}
		});
	};
	setInterval(Update, 1000);
});