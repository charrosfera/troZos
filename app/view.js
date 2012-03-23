App.View = (function(lng, app, undefined) {
  
  
  var userprofile_html = '<div>\
      <div class="usuario-cabecera">\
        <img src="{{img}}" />\
        <p class="user-info usuario-nombre">{{name}}</p>\
        <p class="user-info usuario-nivel">{{level}}</p>\
      </div>\
      <div class="usuario-fuerzadia"></div>\
      <div class="usuario-bloque">{{ataque}}</div>\
      <div class="usuario-bloque">{{defensa}}</div>\
      <a href="#" id="btn-atacar" class="button" >Atacar</a>\
      <a href="#" id="btn-cancelar-ataque" class="button" >No atacar (cobarde!)</a>\
    </div>';
  
   lng.View.Template.create('userprofile', userprofile_html);
   
   var notifications_html = '<li>\
      <span class="notification-title">{{name}}</span><span class="notification-title">{{title}}</span>\
    </li>';
  
   lng.View.Template.create('notificationslist', notifications_html);   

    return { 
    }

})(LUNGO, App);