import '../styles/main.scss'
import $ from 'jquery';
import 'slick-carousel'
//import 'bootstrap3'

global.jQuery = $;
global.$ = $;
$(function(){
	console.log('main.js init');
		//плавная прокрутка
	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	});

	//slider clients
	$('.slick-carousel').slick({
	  infinite: true,
	  slidesToShow: 7,
	  slidesToScroll: 1,
	  autoplay: true,
  	  autoplaySpeed: 2000,
  	  nextArrow: '<i class="fa fa-arrow-right"><img src="dist/images/arrow-right.png" alt=""></i>',
  	  prevArrow: '<i class="fa fa-arrow-left"><img src="dist/images/arrow-left.png" alt=""></i>',
	});	

	function resize () {
		console.log(window.innerWidth);		
		$('.slick-carousel').slick('unslick');
		$('.slick-carousel').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
	  	  autoplaySpeed: 2000,
	  	  nextArrow: '<i class="fa fa-arrow-right"><img src="dist/images/arrow-right.png" alt=""></i>',
	  	  prevArrow: '<i class="fa fa-arrow-left"><img src="dist/images/arrow-left.png" alt=""></i>',
		});	
		$('header').css({
			position: 'relative',
		})
		$('header .wrap-header').css({
			position:'inherit',		
			'margin-left'	: 0,
		});

		$('header .wrap-header .row').css({
			'position':'absolute',	
			top: '50px',
			'z-index':99999,
			left:'10px',
		})
		$('.wrap-header .row div').css({
			'text-align': 'left',
			'display':'block'
		})
		
		$('header .buter').click(function(){
			if ($(this).hasClass('active')) {
				$(this).removeClass('active')								
				$('.wrap-header .row a').css({
					'display':'block',						
				})
			}
			else {
				$(this).addClass('active')					
				
				$('.wrap-header .row a').css({
					'display':'none',						
				})			
			}			
			console.log('click;')
		}).css({
			cursor:'pointer',
			position:'absolute',
			left:'20px',
			top:'-30px',
			'z-index': 9999,
			display:'block',
		});
	}

	if (window.innerWidth < 970 ) {
		resize();
	}
	else {
		$('header .wrap-header ,row').css({
			//position:'inherit',
		})
	}
	$(window).resize(function() {
		if (window.innerWidth < 970 ) {
			resize();
		}
		else {
			$('header').css({
					position: 'fixed',
			})
			$('header .wrap-header').css({
				position:'relative',		
				'margin-left'	: 'calc(50% - 970px/2)',
			});

			$('header .wrap-header .row').css({
				'position':'inherit',										
				top:0,
			})
			
			$('header .buter')
			.unbind('click')
			.css({
				cursor:'inherit',
				position:'inherit',									
				display:'block',
				left:0,
				top:0,
				'margin-top':'8px',

			})	
			$('.wrap-header .row a').css({
				'display':'block',						
			})
		
		}
	});

	//document.getElementById("polygon").setAttribute("points", "100,0 50,0 100,100");
	 ymaps.ready(init);
        var myMap,
            myPlacemark;        
        function init(){
            myMap = new ymaps.Map("map", {
                center: [55.783592, 37.6129793],                
                zoom: 16,
                controls: [],
            });

             myPlacemark = new ymaps.Placemark([55.780442, 37.6129793], {
             // hintContent: 'addres',
             // balloonContent: 'redstart'
        	 }, {
	        //     // Опции.
	        //     // Необходимо указать данный тип макета.
	               iconLayout: 'default#image',
	        //     // Своё изображение иконки метки.
	        //     iconImageHref: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABICAYAAABWWr1vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI2QzgxQ0MwQ0I4NjExRTZBNDE1QTIwQzRGOEU3NzZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI2QzgxQ0MxQ0I4NjExRTZBNDE1QTIwQzRGOEU3NzZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjZDODFDQkVDQjg2MTFFNkE0MTVBMjBDNEY4RTc3NkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjZDODFDQkZDQjg2MTFFNkE0MTVBMjBDNEY4RTc3NkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5G0I9XAAAGGElEQVR42tSba0wcVRTHZ2B5FnlUpWALmIgxWiVSCW2pPIQ+bGqMxcYarfX9oVZiYzU+2vrBQkxqrfFFSUyMBh/VFmtU/FCT1oKWFpDWB0Kwah+IFNsC8l7oXP8ne4Fddhfm3plZhpP8WJi7Z2b+c8/cOffcQWWMKb5MvaTI2CyQBrLBDSAJpIB4t+9cAKdAK2gG1eAn0O2+IxasSJvqXxTTu48QcCe4H+SC2RLnQYKOgI9BJehkwaoFokamFBUBisBGkKyYZ13gXbCLOdR2c0UNa5P5PQa2gwTFOhsAO0AJCwkaNkeU0+dNNQ+UgzwlcHYSPMpCg6v0OgT5b2ITWQ2aQJ6PNitJBYdV58g24z015NHjz4BXlem3/SwspFBe1KBz9Fe6d7Yq9rGDLDy0QE7UwJCdeshbWERYgbio/sG78bFPsa+Vs8jw9bpFqX0DNFT/o9jfnmKzIt7UJ6q3v5GnOTPB0llU5An3DQ4vQT19L5koiJ7gp8E50AciwZU8Awk16Rh0i6T67Sm1u3cOPtpNONAXYC+o4onrRKPwXgTWgrtAuMHjbWQxUaW+RXX1foSP+wzs/HOwhWffeo2ylGLwoIHjUhTEstioEQ9RaldPMg8V2TCjk/rQwIndwf1jJP03sdjL3vAU1dm9Ex+bJXY2xEPphAlhS3OvOn7fidpZFheTPCZKvdgVht/bJOZClPVmggYTR7MUPmmU6bEcNju22jX6aUx2crfWZEEKvwVW8kmjqK2jmbQrS2faGqAI8jWokPDTQw0ok/ArHA+/jvMUeomCV2UuD1mrjJ5jg3SOgn6pQWr7v/MQfolAEaAStAn6CMHir3Dic7eEb64DXZYmcRXLApIAMe0D/HxC0GuhA8oWSxyuLiCiNEaPiU4QJ+CVSD2VJHion3kuZ31HzU1wqq1t1bwEp9cup56KFjzWbwHNwTV2RtAjinpKVFR/QEUxbVB01IQoJjoFCAqsKCY6pDOEn+YUdIoLbPhpUaK5KPVUj6BTBn8gsgD11I2i0xDqqf8kMolrQYvVetTf/6CoyBJ066LRr1XieAWBEIVzy5ZIkzpo9KuVqeKA3QEY+TZJeDWqSmOz7Ix3OfjWQkl0L/0i4ZfpytIbmyhDiJeY91xtoag6PiiJGC0ARAfx2P1GIhtOAe9YlKVvARkSflVs/vWDDh67VM56SOJqUgb9J3jNxB5ax6tLMvbJeDFT0w4prnVXmbrATl6k3G6CoA2g1ID/V2MpD7s5bQAPufcUqizJ8TLYA2Ik/UNBKUf2HCqgo8OzRPbjcSN1v1Gj1wleAXvA33qmCYBWV2j9K8ngsRewW9KPe1do6xtoprnehDCifJJq3Ad4uescrzeE8lH2JrAMUKEk2oTjHWIZC/LHdHiIqq2nK3feguF5mONQzFsYcLfrWGZGi89pBBouIDZfNBDX/ggBkfzeMXvfZe6CvHpqbGPNsZmyPkVRlcAWL/R4P8LhJ92nFKh1BohawbIWeb3w4X/N9/sjtIrxvo0FbWW3ZpX4anBMMjmjkZBq7A/bUNABlr2kxF+jY5JpNP18BMxXXCsbdrFTimsBQREXNR6Wt/H7K84GguhK57C8HE1OlKa5l8Sy+UM0eJpFFbD8vLPy5S7P954aQW5g37PyYg0EfadHuZ6eGrUfwD3gs2nooSK2LL/CeGHS99N7L3jagqxgMnZA0NsiV0DPQDHRXgdXKa6Xsay2crZi6XOiTiLh527PgmvAagsFHWUrl0vNGGR6atRo2kCL2OkWCKJHSJ6ssxFRZDmK6x3XOSYKornYErbq9iELRGl6/Hv5FW0yUdRScMbIDkRHP180g3tNGuk2g2qdUWKpKOJTmqwZFPQl2DX2tw1EERvAaUlBPaDQY5sBMzpQTLRV4FcJP3rn75JZN6WZPUUgR2TFgj7l4KDXdhuJIraBFp3fvQge99lmo/AbtQfAMR3fo3+EGVJMNit6iqgFlVN8pwHs99tuQ1FE0RTtT07ablNRf4F9ftqOgpqZKIp4wc/256f0tbGok6DKx7bD0yPKvOJC8YS/S/T5WTKkmzbC0gr+W4prNb8+EFXf/wUYAC0n8nTLyKnmAAAAAElFTkSuQmCC',
	        //     // Размеры метки.
	        //     iconImageSize: [30, 42],
	        //     // Смещение левого верхнего угла иконки относительно
	        //     // её "ножки" (точки привязки).
	        //     iconImageOffset: [-5, -38]
	         });
             myMap.geoObjects.add(myPlacemark);

        }
});