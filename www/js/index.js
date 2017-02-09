
	function getPosition() {

   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
	
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
$("#getPosition").onload(function(){
    alert("Image loaded.");
});

   function onSuccess(position) {
    var txt;
    var r = confirm("Click ok to select Current Location");
    if (r == true) {
       		 var latitude =position.coords.latitude;
		 var longitude = position.coords.longitude;
			$(document).ready(function () {
				$.ajax({
					 type: "GET",
					  url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+ latitude +','+longitude+'&sensor=true',
					context: document.body,
					success: function (data) {						
						console.log(data.results[4].formatted_address)
						var str=data.results[4].formatted_address
						var currentLocationNameData= str.split(" ")[0]
						var currentLocationName= currentLocationNameData.replace(/\,/g,"");
						
						alert(currentLocationName);
						localStorage.setItem('data', JSON.stringify(currentLocationName));
					}});
			})
    } else {
      alert("Hurray!");
    }
    document.getElementById("demo").innerHTML =data.results[4].formatted_address;

		   // alert('Latitude: '          + position.coords.latitude          + '\n' +
         // 'Longitude: '         + position.coords.longitude         + '\n' +
         // 'Altitude: '          + position.coords.altitude          + '\n' +
         // 'Accuracy: '          + position.coords.accuracy          + '\n' +
         // 'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         // 'Heading: '           + position.coords.heading           + '\n' +
         // 'Speed: '             + position.coords.speed             + '\n' +
         // 'Timestamp: '         + position.timestamp                + '\n' );
		 
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}

function watchPosition() {

   var options = {
      maximumAge: 3600000,
      timeout: 30000,
      enableHighAccuracy: true,
   }

   var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

   function onSuccess(position) {

      alert('Latitude: '          + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
   }

}
function audioCapture() {

   var options = {
      limit: 1,
      duration: 10
   };

   navigator.device.capture.captureAudio(onSuccess, onError, options);

   function onSuccess(mediaFiles) {
      var i, path, len;
		
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
         path = mediaFiles[i].fullPath;
         console.log(mediaFiles);
      }
   }

   function onError(error) {
      navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
   }
	
}

document.getElementById("getPosition").addEventListener("click", getPosition);
document.getElementById("watchPosition").addEventListener("click", watchPosition);
document.getElementById("audioCapture").addEventListener("click", audioCapture);
document.getElementById("imageCapture").addEventListener("click", imageCapture);
document.getElementById("videoCapture").addEventListener("click", videoCapture);
