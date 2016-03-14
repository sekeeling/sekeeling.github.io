$(window).load(function(){
		var pages = $('#slideshow li'), current=0;
		var currentPage,nextPage;
		var timeoutID;
		var buttonClicked=0;

		var handler1=function(){
			buttonClicked=1;
			$('#slideshow .button').unbind('click');
			currentPage= pages.eq(current);
			if($(this).hasClass('prevButton'))
			{
				if (current <= 0)
					current=pages.length-1;
					else
					current=current-1;
			}
			else
			{

				if (current >= pages.length-1)
					current=0;
				else
					current=current+1;
			}
			nextPage = pages.eq(current);	
			currentPage.fadeTo('slow;',.004,function(){
				nextPage.fadeIn('slow',function(){
					nextPage.css("opacity",1);
					currentPage.hide();
					currentPage.css("opacity",1);
					$('#slideshow .button').bind('click',handler1);
				});	
			});			
		}

		var handler2=function(){
			buttonClicked=1;
			if($(this).hasClass('BackToSlideButton'))
			{
			$('#slideshow .button').unbind('click');
			currentPage= pages.eq(current);
			
			if (current >= pages.length-1)
				current=0;
			else
				current=current+1;
			nextPage = pages.eq(current);	
			currentPage.fadeTo('slow',0.01,function(){
				nextPage.fadeIn('slow',function(){
					nextPage.css("opacity", 1);
					currentPage.hide();
					currentPage.css("opacity",1);
					$('#slideshow .button').bind('click',handler3);				
				});	
			});
			timeoutID=setTimeout(function(){
				handler2();	
			}, 4500);
			}
		}

		$('#slideshow .button').click(function(){
			clearTimeout(timeoutID);
			handler1();
		});

		timeoutID=setTimeout(function(){
			handler2();	
			}, 1250);
			
			
			var handler3=function(){
				if (buttonClicked==0)
			{currentPage= pages.eq(current);
							
				}
			};
				
			

	
		
});












//Past code tried
//$(function(){
//    $('.fadein img:gt(0)').hide();
//    setInterval(function(){
//      $('.fadein :first-child').fadeOut()
//        .next('img').fadeIn()
//         .end().appendTo('.fadein');}, 
//      5000);
//	  
//	  $('#next').on('click', 1);
//    $('#prev').on('click', 0);
//});
//
//
//   



//$(function(){
//    $('.fadein a:gt(0)').hide();
//    setInterval(function(){
//      $('.fadein a:first-child').fadeOut()
//         .next('a').fadeIn()
//         .prev().appendTo('.fadein');},
//      5000);
//});


//var interval = getNext();
//$(document).ready(function () {
//    interval = setInterval(getNext, 1000); // milliseconds
//    $('#next').on('click', getNext);
//    $('#prev').on('click', getPrev);
//});
//
//function getNext() {
//    var $curr = $('.slideshow img:visible'),
//        $next = ($curr.next().length) ? $curr.next() : $('.slideshow img').first();
//
//    transition($curr, $next);
//}
//
//function getPrev() {
//    var $curr = $('.slideshow img:visible'),
//        $next = ($curr.prev().length) ? $curr.prev() : $('.slideshow img').last();
//    transition($curr, $next);
//}
//
//function transition($curr, $next) {
//    clearInterval(interval);
//
//    $next.css('z-index', 2).fadeIn('slow', function () {
//        $curr.hide().css('z-index', 0);
//        $next.css('z-index', 1);
//    });

//}