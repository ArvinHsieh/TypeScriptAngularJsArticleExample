var ExampleApp;
(function (ExampleApp) {
    var Controllers;
    (function (Controllers) {
        var HelloWorldCtrl = (function () {
            function HelloWorldCtrl($scope, helloWorldSvc) {
                this.scope = $scope;
                this.scope.helloWorldSvc = helloWorldSvc;
                this.scope.SayHello = this.SayHello;
                this.scope.GetBookInfo = this.GetBookInfo;
                var model = new ExampleApp.Models.HelloWorldViewModel;
                model.Message = "Hello World!!!";
                this.scope.model = model;
                this.scope.$on("destroy", function () {
                });
            }
            HelloWorldCtrl.prototype.SayHello = function () {
                var scope = this;
                scope.model.Message = "Hello Arvin!!!";
            };
            HelloWorldCtrl.prototype.GetBookInfo = function () {
                var scope = this;
                scope.helloWorldSvc.GetBookInfo(function (data, error) {
                    if (error != null) {
                        console.error(error);
                        return;
                    }
                    scope.model.BookInfo = data;
                });
            };
            HelloWorldCtrl.$name = "HelloWorldCtrl";
            HelloWorldCtrl.$inject = ["$scope", "HelloWorldSvc"];
            return HelloWorldCtrl;
        })();
        Controllers.HelloWorldCtrl = HelloWorldCtrl;
    })(Controllers = ExampleApp.Controllers || (ExampleApp.Controllers = {}));
})(ExampleApp || (ExampleApp = {}));
ExampleApp.RegisterAngular.RegisterController(ExampleApp.Controllers.HelloWorldCtrl.$name, ExampleApp.Controllers.HelloWorldCtrl);
//# sourceMappingURL=HelloWorld.Controller.js.map