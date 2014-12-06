	
	function into() {
		$('.content-card').delay(500).animate({
	        opacity: 1,
			left: '0'
	    }, 600, function () { $(this).addClass('active'); });
		
		$('.presentation').delay(800).animate({
	        opacity: 1,
	    }, 600);
		
		$('.presentation, .links').delay(1200).animate({
	        opacity: 1,
	    }, 600, function () { 
			$('.check').show();
			$('.check').addClass('active');
			$('.check .text').delay(200).animate({
				opacity: 1,
				top: '90px'
			}, 200);
		});
		
		if (navigator.userAgent.match(/webkit/i)) {
			$('.content-social').delay(2000).animate({
				opacity: 1,
				display: 'block',
				top: '0'
			}, 200);
			$('.content-social').fadeIn();
		}
	}
	
	$(document).ready(function() {
	

		into();
		$(".extern").attr('target','_blank');
		
		$(".name").mouseover(function() {
			$("#card").addClass("active");
			$(this).addClass("hover");
		});      
		$(".name").mouseout(function() {
			$("#card").removeClass("active");
			$(this).removeClass("hover");
		});     
		
		// tooltip
		$('[data-toggle~="tooltip"]').tooltip({ html: true })/*.tooltip('show')*/;
		
		
		$(document).on('click.modal.data-api', '[data-toggle!="modal"][data-toggle~="modal"]', function (e) {
			var $this = $(this)
			, href = $this.attr('href')
			, $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
			, option = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

			e.preventDefault()

			$target
			.modal(option)
			.one('hide', function () {
				$this.focus()
			})
		})

		
	});