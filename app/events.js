App.Events = (function(lng, app, undefined) {
    
    lng.dom('#btn-actualizar').tap(function(event) {
        lng.Services.usuario.actualizar();
    });
    
    
    lng.dom('section#mapsection').on('load', function(){
      
       LUNGO.Sugar.Geolocation.getLatLng(function(position){
         
          LUNGO.Sugar.GMap.init({
              el: '#map',
              zoom: 14,
              center: { 
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude
              }
         });
         
         LUNGO.Sugar.GMap.addMarker({
           latitude: position.coords.latitude, 
           longitude: position.coords.longitude 
           }, null, false);
         
         
         _latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         
          var request = {
            location: _latlng,
            radius: '1000'
          };
          
          //Search places on google places
          service = new google.maps.places.PlacesService( LUNGO.Sugar.GMap.instance() );
          service.search(request, function(results, status){
            //Check status of the search in google places
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                var place = results[i];
                //Create marker for each place founded
                var marker = LUNGO.Sugar.GMap.addMarker({
                 latitude: place.geometry.location.lat(), 
                 longitude: place.geometry.location.lng() 
                 }, null, false);
                 
                 //And the event for the infobox
                google.maps.event.addListener(marker, 'tap', function() {
                  
                  lng.Data.Cache.set('view-place', place);
                  
                  lng.Router.section('viewplace');
                  
                });
                 
              }
            }  
          });
          
          
                     
       })
           
    });
    
    lng.dom('section#viewplace').on('load', function(){
      
      var placeCached = lng.Data.Cache.get('view-place');
      
      App.Services.place.spy(placeCached.id, function( place ){
        
        lng.dom('#place-name').html( place.name );
        lng.dom('#place-status').html( place.status );
        
        if (place.user){
          lng.dom('#user-name').html( place.user.name );
          //lng.dom('#user-level').html( place.user.level );
        }
        
      });
      
    });
  
    /**
     * Hace una llamada al servidor para obtner las notificaciones nuevas
     */
    var comprobarNotificaciones = function(){
      
      
    }

    return {

    }

})(LUNGO, App);