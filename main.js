(function() {
	angular.module('goldRush', [])
		.controller('mapController', mapController)
})();

function mapController() {
	var mc = this;

	// our data structure to hold all our data for each map marker
	mc.mapMarkerList = [];

	mc.addMapMarker = function(theEvent) {
		var widthOfParent = theEvent.target.width;
		console.log("Width of Thing You clicked on: ", widthOfParent);

		mc.mapMarkerList.push({
			x: event.pageX,
		 	y: event.pageY,
		 	notes: ''
		})
	};

	mc.removeMapMarker = function(mapMarkerIndex) {
		mc.mapMarkerList.splice(mapMarkerIndex, 1);
	};

	// mc.calculateXpercent(x) {

	// }
	// mc.calculateXpercent(y) {
		
	// }
}


