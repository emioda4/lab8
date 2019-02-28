function initMap() {
	L.mapquest.key = 'L7nARFzOmK0sMUxXyv9ItfE2JeG6DIcz';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});

	// add marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}