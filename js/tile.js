var setTileWidth = function() {
	if($("#item-wrap-inner")[0]) {
		var clientWidth = $("#item-wrap-inner")[0].clientWidth;
		var noOfTiles = clientWidth / 200; //232
		//noOfTiles = Math.floor(noOfTiles);
		if(noOfTiles >= Math.floor(noOfTiles) + 0.75) {
			noOfTiles = Math.ceil(noOfTiles);
		} else {
			noOfTiles = Math.floor(noOfTiles);
		}
		$("#item-wrap-inner")[0].className = "col-xs-10 products-wrap " + "tile-" + noOfTiles;
	}
};



$(window).resize(setTileWidth);
$(window).load(setTileWidth);
$(setTileWidth);