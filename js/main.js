						
						/*GALLERY*/
						
$('.brand-carousel').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:20,
    responsive:{
		0:{
			items:1
		},
        600:{
            items:5
        }
    }
});
					/*TESTIMMONIAL*/

$('.test-slide').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:20,
    responsive:{
		0:{
		    itmes:1
		},
		600:{
            items:3
        }
        
    }
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});