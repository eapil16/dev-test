'use strict';
document.addEventListener('DOMContentLoaded', () => {
	// select
	setTimeout(function() {
		$('select').styler();
	}, 100);

	// scroll bar
	const getSelect = () => {
		const psSelect = new
		PerfectScrollbar('.jq-selectbox__dropdown ul', {
			wheelSpeed: 2,
			minScrollbarLength: 20,
			swipeEasing:true,
			wheelPropagation:false,
		});
	}
	setTimeout(() => {
		getSelect();
	}, 500);

	// slider range
	var rangeSlider = document.getElementById('slider-range');

	noUiSlider.create(rangeSlider, {
		start: [75],
		range: {
			'min': [1],
			'max': [100]
		}
	});
	var rangeSliderValueElement = document.getElementById('slider-range-value');
	rangeSlider.noUiSlider.on('update', function (values, handle) {
		rangeSliderValueElement.innerHTML = parseInt(values[handle]);
	});

	// file 
	let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });

	document.querySelector('body').addEventListener('click', e => {
		//mobile menu
		if (e.target.closest('.menu-toggle-cont')) {
			e.target.closest('.menu-toggle-cont').classList.toggle('menu-toggle-cont_active');
			document.querySelector('.fixed-menu').classList.toggle('show');
			document.querySelector('body').classList.toggle('hidden-body');
		}
	});

});
