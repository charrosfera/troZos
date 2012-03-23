App.Services = (function(lng, app, undefined) {
    var urlRoot = 'http://138.4.61.93/api';

    var getUserProfile = function(callback) {
        var url = urlRoot + '/user';

        lng.Service.get(url, {}, function(userProfile) {
            App.Data.user.profile(userProfile);
            callback.call(userProfile);
        });
    }

    var getUserNotifications = function(callback) {
        var url = urlRoot + '/notifications';

        lng.Service.get(url, {}, function(userNotifications) {
            //lng.Data.user.notifications(userNotifications);
            callback.call(userNotifications);
        });
    };

    return {
        user: {
            getProfile: getUserProfile,
            getNotifications: getUserNotifications
        }
    }

})(LUNGO, App);
