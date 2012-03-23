App.Services = (function(lng, app, undefined) {
    var getUserProfile = function(callback) {
        var url = urlRoot + '/user';

        lng.Service.json(url, null, function(userProfile) {
            App.Data.user.profile(userProfile);
            callback.call(userProfile);
        });
    }

    var spyPlace = function(id, callback) {
        var url = urlRoot + '/spy/' + id;

        lng.Service.json(url, null, function(place) {
            callback.call(place);
        });
    }

    var attackPlace = function(id, callback) {
        
    }

    var getAllNotifications = function(callback) {
        var url = urlRoot + '/notifications';

        lng.Service.json(url, null, function(userNotifications) {
            //lng.Data.user.notifications(userNotifications);
            callback.call(userNotifications);
        });
    };
    
    var destroyAllNotifications = function(callback) {
        var url = urlRoot + '/notifications';

        lng.Service.json(url, null, function(userNotifications) {
            //lng.Data.user.notifications(userNotifications);
            callback.call(userNotifications);
        });
    };

    return {
        user: {
            getProfile: getUserProfile
        },
        place: {
            spy: spyPlace,
            attack: attackPlace
        },
        notification: {
            getAll: getAllNotifications,
            destroyAll: destroyAllNotifications
        }

    }

})(LUNGO, App);
