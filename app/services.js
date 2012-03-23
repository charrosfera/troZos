App.Services = (function(lng, app, undefined) {
  
    var actualizarUsuario = function(){
      
      //Llamada ajax para obtener los datos de usuario
      //var datosUsuario = $.ajax....
      
      //Guardar los datos del usuario
      lng.Data.usuario.perfil( datosUsuario );
      
    }

    return {
      usuario:{
        actualizar: actualizarUsuario
      }

    }

})(LUNGO, App);