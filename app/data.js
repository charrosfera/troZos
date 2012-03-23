App.Data = (function(lng, app, undefined) {
  
    var ultimaActualizacion = function( fechaHora ){
      if (fechaHora){
        lng.Data.Storage.persistent('jt.ultima-actualizacion', fechaHora);
      }else{
        return lng.Data.Storage.persistent('jt.ultima-actualizacion');  
      }
      
    }
  
    /* Usuarios */
     
    var datosUsuario = function( datos ){
      if (datos){
        lng.Data.Storage.persistent('jt.usuario-perfil', datos);
      }else{
        return lng.Data.Storage.persistent('jt.usuario-perfil');  
      }
      
    }
    
    var flagRefresh = function( flag ){
      if (flag){
        lng.Data.Storage.persistent('jt.flag-refresh', flag);
      }else{
        return lng.Data.Storage.persistent('jt.flag-refresh');  
      }
    }
    
    /* Mapa */
   
    
    /* Atacar */

    return {
      app:{
        ultimaActualizacion: ultimaActualizacion, 
        flagRefresh: flagRefresh       
      },
      user:{       
        profile: datosUsuario
      }
    }

})(LUNGO, App);