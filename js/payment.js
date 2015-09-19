Parse.initialize("mmcrSN69TR6IR6e6uo2pzlhpR2amZNkHl4b0GVh1", "ALR6Z7SnB2mWr2SBkZ9cnQX8dgqJph0F47b1aPjl");


function num2word(num,words) {
  num=num%100;
  if (num>19) { num=num%10; }
  switch (num) {
    case 1:  { return(words[0]); }
    case 2: case 3: case 4:  { return(words[1]); }
    default: { return(words[2]); }
  }
}
words=Array("рубль", "рубля", "рублей");

var productPay = Number(sessionStorage.cost);
var payTotal = productPay + Number(sessionStorage.dCost);
var discPay = Math.round(payTotal* 0.05);
var payFinal = payTotal - discPay;
var dCostPay = Number(sessionStorage.dCost);
$( "#payProducts" ).html( productPay + ' <span class="payRub">' + num2word(productPay,words) + '</span>');
if(dCostPay > 0) {
  $( "#dCostPay" ).html( '+' + dCostPay + ' <span class="payRub">' + num2word(dCostPay,words) + '</span>' );
} else {
  $( "#dCostPay" ).html( '<span class="payFree">Бесплатно!</span>' );
}
$( "#discPay" ).html( '- ' + discPay + ' <span class="payRub"> ' + num2word(discPay,words) + '</span>' );
$( "#payTotal" ).html( payFinal + ' <span class="payRub"> ' + num2word(payFinal,words) + '</span>' );

$( "iframe" ).attr({
  src: "https://money.yandex.ru/embed/small.xml?account=410013085842859&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=white&targets=ExpFood.ru&default-sum="+payFinal+"&successURL=",
});


$('#creditcard').click(function() {
    $( "#discPay" ).html( '- ' + discPay + ' <span class="payRub"> ' + num2word(discPay,words) + '</span>' );
    $( "#payTotal" ).html( payFinal + ' <span class="payRub"> ' + num2word(payFinal,words) + '</span>' );
    $( ".next" ).html( '<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/embed/small.xml?account=410013085842859&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=white&targets=expfood&default-sum='+payFinal+'&successURL=" width="195" height="54"></iframe>' );
});

$('#cash').click(function() {
    $( "#discPay" ).html( '- 0 <span class="payRub"> рублей </span>' );
    $( "#payTotal" ).html( payTotal + ' <span class="payRub"> ' + num2word(payTotal,words) + '</span>' );
    $( ".next" ).html( '<a href="success.html" id="toPay" class="backForth">Завершить <span aria-hidden="true">&rarr;</span></a>' );
});



var Orders = Parse.Object.extend("Orders");
var query = new Parse.Query(Orders);
query.equalTo("objectId", sessionStorage.cOrder);
query.find({
  success: function(results) {
    // alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    object = results[0];
    object.set("userInfo", sessionStorage.userInfo);
    object.set("payment", "card");
    object.save();
  },
  error: function(error) {
  	console.log("Error here: " + error.code + " " + error.message);
    alert("Error here: " + error.code + " " + error.message);
  }
});

var OrdersArchive = Parse.Object.extend("OrdersArchive");
var query = new Parse.Query(OrdersArchive);
query.equalTo("objectId", sessionStorage.cOrderArchive);
query.find({
  success: function(results) {
    // alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    object = results[0];
    object.set("userInfo", sessionStorage.userInfo);
    object.set("payment", "Credit Card");
    object.save();
  },
  error: function(error) {

  }
});

