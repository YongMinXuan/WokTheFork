// timeline
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});


// reviews
let options = {
	'speed': 6000,
	'pause': true,
}

window.addEventListener('DOMContentLoaded', function() {
	let slider = document.querySelector('.rbd-review-slider');
	let slides = slider.querySelectorAll('.rbd-review');
	let total  = slides.length;
	let pause  = false;
	
	function pauseSlide(){
		slider.onmouseleave = function(){ pause = false; };
		slider.onmouseenter = function(){ pause = true; };
		return pause;
	}
	
	function slide(){
		if( options.pause && pauseSlide() ) return;
		
		let activeSlide = document.querySelector('.rbd-review-slider .rbd-review.rbd-curr');
		let prev, curr, next, soon;		
		
		curr = activeSlide;
		prev = activeSlide.previousElementSibling;
		next = activeSlide.nextElementSibling;
		
		if( next != null ){
			soon = next.nextElementSibling == null ? slides[0] : next.nextElementSibling;
		} else {
			next = slides[0];
			soon = slides[1];
		}
		
		if( prev != null ) prev.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next');
		if( curr != null ) curr.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next'); curr.classList.add('rbd-prev');
		if( next != null ) next.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next'); next.classList.add('rbd-curr');
		if( soon != null ) soon.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next'); soon.classList.add('rbd-next');
	}
	
	let slideTimer = setInterval(function(){
		slide();
	}, options.speed);
}, true);

// form

var v = $("#booking-form").validate({
      rules: {
        bf_totalGuests: {
          required: true
        },
        bf_date: {
          required: true
        },
        bf_time: {
          required: true
        },
        bf_hours: {
          required: true
        },
        bf_fullname: {
          required: true
        },
        bf_email: {
          required: true,
          email: true
        }
 
      },
      errorElement: "span",
      errorClass: "error",
      errorPlacement: function(error, element) {
            error.insertBefore(element); 
      }
});

$(".next-btn1").click(function() {
    if (v.form()) {
      $(".tab-pane").hide();
      $("#step2").fadeIn(1000);
      $('.progressbar-dots').removeClass('active');
      $('.progressbar-dots:nth-child(2)').addClass('active');
    }
 });
$(".next-btn2").click(function() {
    if (v.form()) {
      $(".tab-pane").hide();
      $("#step3").fadeIn(1000);
      $('.progressbar-dots').removeClass('active');
      $('.progressbar-dots:nth-child(3)').addClass('active');
    }
});

$(".submit-btn").click(function() {
  if (v.form()) {
    $("#loader").show();
     setTimeout(function(){
       $("#booking-form").html("<h4>Your message was sent successfully. Thanks! We'll be in touch as soon as we can, which is usually like lightning (Unless we have a fork in our hands!).</h4>");
     }, 1000);
    return false;
  }
});

// date
$(function() {
  $( ".calendar" ).datepicker({
		dateFormat: 'dd/mm/yy',
		firstDay: 1
	});
	
	$(document).on('click', '.date-picker .input', function(e){
		var $me = $(this),
				$parent = $me.parents('.date-picker');
		$parent.toggleClass('open');
	});
	
	
	$(".calendar").on("change",function(){
		var $me = $(this),
				$selected = $me.val(),
				$parent = $me.parents('.date-picker');
		$parent.find('.result').children('span').html($selected);
	});
});


