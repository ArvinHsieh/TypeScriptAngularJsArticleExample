var ExampleApp;
(function (ExampleApp) {
    /**
     * 啟動設定
     */
    var Config = (function () {
        function Config($locationProvider, $provide, $compileProvider, $httpProvider, blockUIConfig) {
            // 設定 Ajax 請求攜帶 XMLHttpRequest Header
            $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
            // 設定 BlockUI
            blockUIConfig.message = "Loading...";
            blockUIConfig.autoBlock = false;
        }
        Config.$inject = ["$locationProvider", "$provide", "$compileProvider", "$httpProvider", "blockUIConfig"];
        return Config;
    })();
    ExampleApp.Config = Config;
    /**
     * 自訂錯誤處理
     */
    var ExceptionHandlerProvider = (function () {
        function ExceptionHandlerProvider() {
        }
        ExceptionHandlerProvider.prototype.mode = function (mode) {
            // set mode is log or rethorw
        };
        ExceptionHandlerProvider.prototype.$get = function ($injector) {
            return function (exception, cause) {
                console.error(exception);
            };
        };
        ExceptionHandlerProvider.$name = "$exceptionHandler";
        return ExceptionHandlerProvider;
    })();
    ExampleApp.ExceptionHandlerProvider = ExceptionHandlerProvider;
    /**
     * 註冊 Angular 各項服務
     */
    var RegisterAngular = (function () {
        function RegisterAngular() {
        }
        RegisterAngular.RegisterDirective = function (name, service) {
            angular.module("ExampleApp.Directives").directive(name, service);
        };
        RegisterAngular.RegisterDirectives = function (object) {
            var _this = this;
            var classNames = Object.getOwnPropertyNames(object);
            classNames.forEach(function (className) {
                _this.RegisterDirective(object[className].$name, object[className].$inject);
            });
        };
        RegisterAngular.RegisterService = function (name, service) {
            angular.module("ExampleApp.Services").service(name, service);
        };
        RegisterAngular.RegisterController = function (name, service) {
            angular.module("ExampleApp.Controllers").controller(name, service);
        };
        return RegisterAngular;
    })();
    ExampleApp.RegisterAngular = RegisterAngular;
    /**
    * 初始化 Angular Module
    */
    var appModules = [
        "ExampleApp.Directives", "ExampleApp.Controllers", "ExampleApp.Services"
    ];
    var trirdpartyModules = [
        "blockUI"
    ];
    appModules.forEach(function (module) { return angular.module(module, []); });
    appModules = appModules.concat(trirdpartyModules);
    angular.module("ExampleApp", appModules).config(Config);
})(ExampleApp || (ExampleApp = {}));
//# sourceMappingURL=App.js.map