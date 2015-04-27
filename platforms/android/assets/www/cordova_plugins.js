cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    }
];
module.exports.metadata =
// TOP OF METADATA
{
    "org.apache.cordova.geolocation": "0.3.12",
    "cordova-plugin-splashscreen": "2.0.1-dev",
    "com.ionic.keyboard": "1.0.4"
}
// BOTTOM OF METADATA
});
