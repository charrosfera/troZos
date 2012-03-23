App.Events = (function(lng, app, undefined) {
  
    lng.dom('#btn-actualizar').tap(function(event) {
        lng.Services.usuario.actualizar();
    });
    
    
    
  
    /**
     * Hace una llamada al servidor para obtner las notificaciones nuevas
     */
    var comprobarNotificaciones = function(){
      
      
    }

    return {

    }

})(LUNGO, App);