/**
 * Created by trevorBye on 8/4/17.
 */
var app = (function () {
    "use strict";

    var app = {};

    // Initialization function (to be called from each page that needs notification)
    app.initialize = function () {
        $('body').append(
            '<div id="notification-message">' +
            '<div class="padding">' +
            '<div id="notification-message-close"></div>' +
            '<div id="notification-message-header"></div>' +
            '<div id="notification-message-body"></div>' +
            '</div>' +
            '</div>');

        $('#notification-message-close').click(function () {
            $('#notification-message').hide();
        });


        // After initialization, expose a common notification function
        app.showNotification = function (header, text) {
            $('#notification-message-header').text(header);
            $('#notification-message-body').text(text);
            setTimeout(function () {
                $('#notification-message').hide();
            }, 3000)
        };
    };

    return app;
})();

