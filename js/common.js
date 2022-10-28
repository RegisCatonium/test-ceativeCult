document.addEventListener('DOMContentLoaded', function() {
	const slider = new Swiper('#slider', {
		loop: true,
		grabCursor: true,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		 }
	})
	
	const brand = new Swiper('#brand', {
		loop: true,
		grabCursor: true,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		 }
	})
})

