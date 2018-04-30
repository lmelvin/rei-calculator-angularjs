var app = angular.module("app", []);

(function () {
    app.config([
         "$httpProvider", function ($httpProvider) {
             // IE cache fix
             $httpProvider.defaults.headers.common["Cache-Control"] = "no-cache";
             $httpProvider.defaults.headers.common["Pragma"] = "no-cache";

             // fix relative urls for virtual directories
             $httpProvider.interceptors.push(function () {
                 return {
                     'request': function (config) {
                         var requestUrl = config.url;

                         if (requestUrl.indexOf("/") === 0) {
                             config.url = requestUrl.replace("/", virtualPath);
                         }

                         return config;
                     }
                 };
             });
         }
    ]);
})(app)