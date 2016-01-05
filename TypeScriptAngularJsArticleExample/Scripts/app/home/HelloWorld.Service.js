var ExampleApp;
(function (ExampleApp) {
    var Services;
    (function (Services) {
        var HelloWorldService = (function () {
            function HelloWorldService($http) {
                this.http = $http;
            }
            /**
             * 取得書籍資訊
             */
            HelloWorldService.prototype.GetBookInfo = function (callback) {
                this.http.get("GetBookInfo")
                    .success(function (data) {
                    callback(data, null);
                })
                    .error(function (error) {
                    callback(null, error);
                });
            };
            HelloWorldService.$name = "HelloWorldSvc";
            HelloWorldService.$inject = ["$http"];
            return HelloWorldService;
        })();
        Services.HelloWorldService = HelloWorldService;
    })(Services = ExampleApp.Services || (ExampleApp.Services = {}));
})(ExampleApp || (ExampleApp = {}));
ExampleApp.RegisterAngular.RegisterService(ExampleApp.Services.HelloWorldService.$name, ExampleApp.Services.HelloWorldService);
//# sourceMappingURL=HelloWorld.Service.js.map