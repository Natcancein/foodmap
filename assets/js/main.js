$(document).ready(function(){

// inicio desapareción logo
	 setTimeout(function() {
        $('.logo').fadeOut(2500);
    },2000);

	 $('.loader').fadeOut("3500");

 
 $('.logo2').hide(3000);

  setTimeout(function() {
        $('.logo2').fadeIn(2500);
    },2000);
 

// clasificacion comidas
	$('#varias').show();
	$('.chilena').hide();
	$('.colombianas').hide();
	$('.mexicanas').hide();

	$('#chile').click(function(){
		$('.chilena').show();
		$('#varias').hide();
		$('.colombianas').hide();
		$('.mexicanas').hide();
	
	})

	$('#colombia').click(function(){
		$('.chilena').hide();
		$('#varias').hide();
		$('.colombianas').show();
		$('.mexicanas').hide();
	
	})

	$('#mexico').click(function(){
		$('.chilena').hide();
		$('#varias').hide();
		$('.colombianas').hide();
		$('.mexicanas').show();
	
	})
 
// comidas chilenas
$('.chile1').mouseover(function () {
    $('#overlay').show();
}).mouseout(function () {
    $('#overlay').hide();
});

$('.chile2').mouseover(function () {
    $('#overlay2').show();
}).mouseout(function () {
    $('#overlay2').hide();
});

$('.chile3').mouseover(function () {
    $('#overlay3').show();
}).mouseout(function () {
    $('#overlay3').hide();
});

$('.chile4').mouseover(function () {
    $('#overlay4').show();
}).mouseout(function () {
    $('#overlay4').hide();
});

$('.chile5').mouseover(function () {
    $('#overlay5').show();
}).mouseout(function () {
    $('#overlay5').hide();
});

$('.chile6').mouseover(function () {
    $('#overlay6').show();
}).mouseout(function () {
    $('#overlay6').hide();
});


// comidas mexicanas
$('.mexico1').mouseover(function () {
    $('#overlay-m1').show();
}).mouseout(function () {
    $('#overlay-m1').hide();
});

$('.mexico2').mouseover(function () {
    $('#overlay2-m2').show();
}).mouseout(function () {
    $('#overlay2-m2').hide();
});

$('.mexico3').mouseover(function () {
    $('#overlay3-m3').show();
}).mouseout(function () {
    $('#overlay3-m3').hide();
});

$('.mexico4').mouseover(function () {
    $('#overlay4-m4').show();
}).mouseout(function () {
    $('#overlay4-m4').hide();
});

$('.mexico5').mouseover(function () {
    $('#overlay5-m5').show();
}).mouseout(function () {
    $('#overlay5-m5').hide();
});

$('.mexico6').mouseover(function () {
    $('#overlay6-m6').show();
}).mouseout(function () {
    $('#overlay6-m6').hide();
});


// comidas colombiana
$('.colombia1').mouseover(function () {
    $('#overlay-c1').show();
}).mouseout(function () {
    $('#overlay-c1').hide();
});

$('.colombia2').mouseover(function () {
    $('#overlay2-c2').show();
}).mouseout(function () {
    $('#overlay2-c2').hide();
});

$('.colombia3').mouseover(function () {
    $('#overlay3-c3').show();
}).mouseout(function () {
    $('#overlay3-c3').hide();
});

$('.colombia4').mouseover(function () {
    $('#overlay4-c4').show();
}).mouseout(function () {
    $('#overlay4-c4').hide();
});

$('.colombia5').mouseover(function () {
    $('#overlay5-c5').show();
}).mouseout(function () {
    $('#overlay5-c5').hide();
});

$('.colombia6').mouseover(function () {
    $('#overlay6-c6').show();
}).mouseout(function () {
    $('#overlay6-c6').hide();
});


});

