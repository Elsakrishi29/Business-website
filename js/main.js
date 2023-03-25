						
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

function handleShow(){
    document.querySelector('.navbar-toggler').style.display = 'none';
    document.querySelector('.navbar-collapse').style.display = 'block';

}

function handleHide(){
    document.querySelector('.navbar-toggler').style.display = 'block';
    document.querySelector('.navbar-collapse').style.display = 'none';

}