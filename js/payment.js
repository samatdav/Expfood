Parse.initialize("mmcrSN69TR6IR6e6uo2pzlhpR2amZNkHl4b0GVh1", "ALR6Z7SnB2mWr2SBkZ9cnQX8dgqJph0F47b1aPjl");

var payTotal = Number(sessionStorage.cost) + Number(sessionStorage.dCost);
var discPay = Math.round(payTotal* 0.05);
var payFinal = payTotal - discPay;
var dCostPay = Number(sessionStorage.dCost);
$( "#payProducts" ).html( Number(sessionStorage.cost) + ' <span class="payRub"> рублей</span>' );
if(dCostPay > 0) {
$( "#dCostPay" ).html( dCostPay + ' рублей' );
} else {
  $( "#dCostPay" ).html( '<span class="payFree">Бесплатно!</span>' );
}
$( "#discPay" ).html( '- ' + discPay + ' <span class="payRub"> рублей</span>' );
$( "#payTotal" ).html( payFinal + ' <span class="payRub"> рублей</span>' );

$( "iframe" ).attr({
  src: "https://money.yandex.ru/embed/small.xml?account=410013085842859&quickpay=small&any-card-payment-type=on&button-text=02&button-size=l&button-color=white&targets=ExpFood.ru&default-sum="+payFinal+"&successURL=",
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
    object.save();
  },
  error: function(error) {

  }
});