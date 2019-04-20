$(".addstyle img").each(function(i, obj) {
    $(obj).wrap(function(){
      var theImage = new Image();
      theImage.src = $(this).attr("src");
      // Get accurate measurements from that.
      var imageWidth = $(this).attr('width');
      var imageHeight = $(this).attr('height');
      var imageResize = $(this).attr('resize');
      var clipMode = $(this).attr('clipmode');
      var clipCode = 'background-size: ' + imageResize + ' auto';
      if (imageWidth == '') {
        imageWidth = 'width: ' + theImage.width + 'px;';
      }
      else if (imageWidth == 'none'){
        imageWidth = ''
      }
      else {
        imageWidth = 'width: ' + imageWidth + ';';
      }
      if (imageHeight == '') {
        imageHeight = 'height: ' + theImage.height + 'px;';
      }
      else if (imageHeight == 'none'){
        imageHeight = ''
      }
      else {
        imageHeight = 'height: ' + imageHeight + ';';
      }
      if (imageResize == '') {
        imageResize = '150%';
      }
      if (clipMode == 'height') {
        clipCode = 'background-size: auto ' + imageResize;
      }
      return '<span class="image-wrap ' + $(this).attr('class') + '" style="position:relative; display:inline-block; background:url(' + theImage.src + ') no-repeat center center; ' + imageWidth + ' ' + imageHeight + ' ' + clipCode + ';" />';
    });
    $(obj).remove();
});

(function ($) { "use strict";
	
	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */
	
	// window.load = function () {
	// 	document.getElementById('preloader').style.display = 'none';
	// }

	$(window).on("load",function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */
	var portfolio_item=$('.portfolio-items-wrapper');
    if(portfolio_item.length){
        var mixer=mixitup(portfolio_item, {
            animation: {
                duration: 300
            },
            selectors: {
              control: '.portfolio-filter button'
            }
        });
    };

})(jQuery);

const player = new Plyr('.plyr-player');

$(document).ready(function () {
  $('#dtBasicExample').DataTable({
  "searching": true // false to disable search (or any other option)
  });
  $('.dataTables_length').addClass('bs-select');
});
