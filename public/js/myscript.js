	var slider = new MasterSlider();
	slider.setup('mainSlider', {
		width: 1170,
		height: 580,
		autoplay: true,
		space: 1,
		loop: true,
		dir: "v",
		fullwidth: true,
		centerControls: false,
		speed: 60,
		preload: 0,
		view: 'scale',
		swipe: true
	});
	slider.control('arrows');
	slider.control('timebar', {color: "rgb(226, 100, 36)"});

	$('.slider').bxSlider({
		auto: true,
		pager: true,
		slideWidth: 1440,
		captions: false,
		controls: false,
		pause: 5000,
	});		