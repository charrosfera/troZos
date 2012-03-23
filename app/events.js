App.Events = (function(lng, app, undefined) {
  
    LUNGO.dom('#btn-perfil').tap(function(event) {
        LUNGO.View.Template.List.create({
              el: '#datos-perfil',
              template: 'datos-perfil',
              data: lng.Data.usuario.perfil()
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