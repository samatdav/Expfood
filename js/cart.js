Parse.initialize("mmcrSN69TR6IR6e6uo2pzlhpR2amZNkHl4b0GVh1", "ALR6Z7SnB2mWr2SBkZ9cnQX8dgqJph0F47b1aPjl");

function handleParseError(err) {
  switch (err.code) {
    case Parse.Error.INVALID_SESSION_TOKEN:
      Parse.User.logOut();
      break;
  }
}






// query.find().then(function() {

// }, function(err) {
  // handleParseError(err);
// });

var basedCost = 100;
var totalCost = 0;
var newItem = '';
var dCost = 100;
var mass = 0;
if (!sessionStorage.mass) {
	sessionStorage.mass = 0;
}
if (!sessionStorage.total) {
	sessionStorage.total = 0;
}
var ids = [];
var counts = [];

// alert(dCost);

var currentUser = Parse.User.current();
if (currentUser) {
	var User = Parse.Object.extend("User");
			var query = new Parse.Query(User);
			query.get(currentUser.id, {
			  success: function(user) {
			  	if (user.get("freeDelivery")) {
			  			dCost = 0;
						basedCost = 0;
						$('#delivery_cost').html(dCost);
						$('#cart-price').html(totalCost);
						$('#total_main').html((totalCost + dCost) + '  &#8381;');
						$('#freeDelivery').css('display', 'block');
			  	}
			  }
			});
} else {
	dCost = 0;
	basedCost = 0;
	$('#delivery_cost').html(dCost);
	$('#cart-price').html(totalCost);
	$('#total_main').html((totalCost + dCost) + '  &#8381;');
	$('#freeDelivery').css('display', 'block');
}
// alert(dCost);
dCost = (Math.floor(sessionStorage.mass / 10 ) - Math.floor(sessionStorage.total / 1000)) * 100  + basedCost;
if (dCost < 0) {
	dCost = 0;
}

$('#delivery_cost').html(dCost);
if (dCost != basedCost) {
	$('#plus100').removeClass( "hidden" ).addClass( "visible" );
}
if (sessionStorage.cart) {
	$("#ordered-items").prepend(sessionStorage.cart);
}
if (sessionStorage.total) {
	totalCost = Number(sessionStorage.total);
	$('#total_main').html(totalCost + '  &#8381;');
	$('#grocery-price').html(totalCost);
	$('#cart-price').html(totalCost);
}
if (sessionStorage.count) {
	$('#cart-number').html(Number(sessionStorage.count));
	$('#cart-number').css( "display", "block" );
	if (Number(sessionStorage.count) >= 10) {
		$('#cart-number').css( "width", "37px" );
	}
}

// alert(dCost);

$(document).on('click', ".increase_count", function(){
	var theId = $(this).closest('.product').attr('id');

	if (sessionStorage.count) {
    	sessionStorage.count = Number(sessionStorage.count)+1;
	} else {
	    sessionStorage.count = 1;
	}
	sessionStorage.mass = parseFloat(sessionStorage.mass) + parseFloat($(this).closest('.product').find('.product-howmuch').html());
	// console.log(sessionStorage.mass);

	// console.log( $(this).closest('.product').find('.reduce_count'));
	$(this).closest('div').children('.reduce_count').removeClass( "hidden" ).addClass( "visible" );
	$(this).closest('.product').children('.item_count').removeClass( "hidden" ).addClass( "visible" );

	if (sessionStorage[theId]) {
    	sessionStorage[theId] = Number(sessionStorage[theId])+1;
	} else {
	    sessionStorage[theId] = 1;
	}

	// console.log(theId + sessionStorage[theId]);
	$(this).closest('.product').children('.item_count').html(sessionStorage[theId]);

	// $(this).closest('.product').children('.item_count').html(function(i, val) { 
	// 	value = val*1 +1;
	// 	return value; 
	// });

	var idIndex = ids.indexOf($(this).closest('.product').attr('id'));
	if (idIndex >= 0) {
		counts[idIndex] += 1;
	} else {
		ids.push($(this).closest('.product').attr('id'));
		counts.push(1);
	}
// alert($(this).closest('.product').attr('id'));
	newItem = (
				'<tr class="ordered-item" id="cart-'+$(this).closest('.product').attr('id')+'"> '+
					'<td class="image"> <span class="helper"></span>'+ $(this).closest('.product').find('img')[0].outerHTML + '</td>' +
					'<td class="name">'+$(this).closest('.product').find('.product-name').html()+ 
					// '<br>' + '<a href="#" class="cart-del"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span><span class="cart-del-txt"> Удалить</span></a>'+'</td>'  +
					'<td class="price">'+parseFloat($(this).closest('.product').find('.product-price').html())+' &#8381;</td>' +
					'<td class="quantity"> x '+Number(sessionStorage[theId])+'</td>' +
					'<td class="total"> = '+ (parseFloat($(this).closest('.product').find('.product-price').html())*parseFloat(Number(sessionStorage[theId]))).toFixed(2)+' &#8381; </td>'+
				'</tr>');

	
	$('#cart-number').html(Number(sessionStorage.count));

	if (Number(sessionStorage.count) == 1) {
		$('#cart-number').css( "display", "block" );
	}

	if (Number(sessionStorage.count) >= 10) {
		$('#cart-number').css( "width", "37px" );
	}
	var itemId = $(this).closest('.product');
	// if (value > 1) {
		$("#cart-"+ itemId.attr('id')).remove();
	// }

	$("#ordered-items").prepend(newItem);
	
	

	totalCost = totalCost + parseFloat($(this).closest('.product').find('.product-price').html());

	totalCost = Math.round(totalCost);


	dCost = (Math.floor(sessionStorage.mass / 10 ) - Math.floor(sessionStorage.total / 1000)) * 100  + basedCost;
	if (dCost < 0) {
		dCost = 0;
	}
	$('#delivery_cost').html(dCost);
	if (dCost != basedCost) {
		$('#plus100').removeClass( "hidden" ).addClass( "visible" );
	}


	$('#total_main').html((totalCost + dCost) + '  &#8381;');
	$('#grocery-price').html(totalCost);
	$('#cart-price').html(totalCost);

	sessionStorage.cart = $("#ordered-items").html();
	sessionStorage.total = totalCost;
	return newItem;
});


$('#orderBtn').on({
	"click":function(e){
      
    
// $(document).on('click', "#orderBtn", function(){ // Parse
	if ((totalCost+dCost) < 300) {
		e.stopPropagation();
		$('#notmin').css( "display", "block" );
	}
	else {
		$('#notmin').css( "display", "none" );


		var OrderArchive = Parse.Object.extend("OrdersArchive");
	var orderArchive = new OrderArchive();
	orderArchive.set("html", $('#cart-items').html());
	orderArchive.save(null, {
	  success: function(order) {
	  	sessionStorage.cOrderArchive = orderArchive.id;
	  },
	  error: function(order, error) {
	  }
	});


	var Order = Parse.Object.extend("Orders");
	var order = new Order();
	var currentUser = Parse.User.current();
	order.set("productsId", ids);
	order.set("quantity", counts);
	order.set("html", $('#cart-items').html());
	// order.set("User", Parse.User.current());
	// console.log(ids);
	// console.log(counts);

	order.save(null, {
	  success: function(order) {
	  	sessionStorage.cOrder = order.id;
	  	sessionStorage.cost = totalCost;
	  	sessionStorage.dCost = dCost;
	    // Execute any logic that should take place after the object is saved.
	    // alert('New object created with objectId: ' + order.objectId);
	    if (currentUser) {
	    	window.location = "order.html";
	    } else {
	    	window.location = "signin.html";
	    }
	    
	    
	  },
	  error: function(order, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    console.log(error.message);
	    alert('Не удалось создать заказ: ' + error.message);

	  }
	});

}//end else
}//end on click
});
// $('.reduce_count').click(function () {
$(document).on('click', ".reduce_count", function(){
	// console.log(newItem);
	var theId = $(this).closest('.product').attr('id');
	sessionStorage[theId] = Number(sessionStorage[theId])-1;
	if (sessionStorage.count) {
    	sessionStorage.count = Number(sessionStorage.count)-1;
	} 
	$(this).closest('.product').children('.item_count').html(sessionStorage[theId]);

	sessionStorage.mass = parseFloat(sessionStorage.mass) - parseFloat($(this).closest('.product').find('.product-howmuch').html());

	newItem = (
				'<tr class="ordered-item" id="cart-'+$(this).closest('.product').attr('id')+'"> '+
					'<td class="image"> <span class="helper"></span>'+ $(this).closest('.product').find('img')[0].outerHTML + '</td>' +
					'<td class="name">'+$(this).closest('.product').find('.product-name').html()+ 
					// '<br>' + '<a href="#" class="cart-del"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span><span class="cart-del-txt"> Удалить</span></a>'+'</td>'  +
					'<td class="price">'+parseFloat($(this).closest('.product').find('.product-price').html())+' &#8381;</td>' +
					'<td class="quantity"> x '+Number(sessionStorage[theId])+'</td>' +
					'<td class="total"> = '+ (parseFloat($(this).closest('.product').find('.product-price').html())*parseFloat(Number(sessionStorage[theId]))).toFixed(2)+' &#8381; </td>'+
				'</tr>');


	var itemId = $(this).closest('.product');

	var idIndex = ids.indexOf($(this).closest('.product').attr('id'));
	counts[idIndex] -= 1;

	$("#cart-"+ itemId.attr('id')).remove();


	if (sessionStorage[theId] <= 0) {
		$(this).closest('div').children('.reduce_count').removeClass( "visible" ).addClass( "hidden" );
		$(this).closest('.product').children('.item_count').removeClass( "visible" ).addClass( "hidden" );
		// sessionStorage[theId] = Number(sessionStorage[theId])-1;
	}
	else {
		$("#ordered-items").prepend(newItem);
	}

	$('#cart-number').html(sessionStorage.count);

	if (Number(sessionStorage.count) == 9) {
		$('#cart-number').css( "width", "30px" );
	}
	if (Number(sessionStorage.count) <= 0) {
		$('#cart-number').css( "display", "none" );
	}

	totalCost = totalCost - parseFloat($(this).closest('.product').find('.product-price').html());

	totalCost = Math.round(totalCost);

	dCost = (Math.floor(sessionStorage.mass / 10 ) - Math.floor(sessionStorage.total / 1000)) * 100  + basedCost;
	if (dCost < 0) {
		dCost = 0;
	}
	$('#delivery_cost').html(dCost);

	if (dCost = basedCost) {
		$('#plus100').removeClass( "visible" ).addClass( "hidden" );
	}

	$('#total_main').html((totalCost + dCost) + '  &#8381;');
	$('#grocery-price').html(totalCost);
	$('#cart-price').html(totalCost);

	sessionStorage.cart = $("#ordered-items").html();
	sessionStorage.total = totalCost;
	return newItem;
});
var h;
var m;
function updateClock() {
	var d = new Date();
	var h = d.getHours() + 1;
	var m = d.getMinutes();
	$("#cart_time_b").html(h+':'+ (d.getMinutes()<10?'0':'') + m);
	// $(".order-time").html(h+':'+ (d.getMinutes()<10?'0':'') + m);
	// если верный работает с 9 до 22
	if ((h > 21 && m > 30) || h > 22){
		$("#cart_time_b").html('12:00');
		$("#delivery_day").html('Доставим завтра до ');

	} 
	if (h < 8){
		$("#cart_time_b").html('12:00');
	}
	

    setTimeout(updateClock, 6000);
    return [h,m];
}
updateClock(); // initial call

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


$('.dropdown-menu').click(function(e) {
        e.stopPropagation();
});


$(".cart-del").click(function() {
	var remid = $(this).closest('.ordered-item').attr('id');
	remid = remid.substring(5, remid.length);
	// alert(remid);
	// $("#"+remid).find(".reduce_count").click();
	$("#"+remid).find(".reduce_count").click();
	// alert($("#"+remid).find(".name").html());
	// alert(remid);
});


// $(".navbar").click(function() {
// 	$("#xTtWoAedgF").find(".reduce_count").click();
// });
