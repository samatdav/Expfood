Parse.initialize("mmcrSN69TR6IR6e6uo2pzlhpR2amZNkHl4b0GVh1", "ALR6Z7SnB2mWr2SBkZ9cnQX8dgqJph0F47b1aPjl");


var Orders = Parse.Object.extend("Orders");
var query = new Parse.Query(Orders);
query.equalTo("objectId", sessionStorage.cOrder);
query.find({
  success: function(results) {
    // alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    object = results[0];
    object.set("userInfo", sessionStorage.userInfo);
    object.set("payment", "cash");
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
    object.set("payment", "Cash");
    object.save();
  },
  error: function(error) {

  }
});
