(function() {
	angular.module('goldRush', [])
		.controller('mapController', mapController)
})();

function mapController() {
	var mc = this;

	// our data structure to hold all our data for each map marker
	mc.mapMarkerList = [];

  mc.addMapMarker    = function(theEvent) {
  var widthOfParent  = theEvent.target.width;
  var heightOfParent = theEvent.target.height;

	// we are calculating and setting our x & y points to be percentages 
	// based on where the user clicks in relation to the width/height of 
	// the container that is calling this controller
	mc.mapMarkerList.push({
		x: (event.pageX / widthOfParent)  * 100,
	 	y: (event.pageY / heightOfParent) * 100,
	 	notes: ''
	})
};

	mc.removeMapMarker = function(mapMarkerIndex) {
		mc.mapMarkerList.splice(mapMarkerIndex, 1);
	};
}



