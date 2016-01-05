module ExampleApp {

    /**
     * 啟動設定
     */
    export class Config {
        static $inject = ["$locationProvider", "$provide", "$compileProvider", "$httpProvider", "blockUIConfig"];

        constructor($locationProvider: ng.ILocationProvider, $provide, $compileProvider, $httpProvider, blockUIConfig) {
            // 設定 Ajax 請求攜帶 XMLHttpRequest Header
            $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
            // 設定 BlockUI
            blockUIConfig.message = "Loading...";
            blockUIConfig.autoBlock = false;
        }
    }

    /**
     * 自訂錯誤處理
     */
    export class ExceptionHandlerProvider implements ng.IExceptionHandlerProvider {
        static $name = "$exceptionHandler";

        public mode(mode: string): void {
            // set mode is log or rethorw
        }

        public $get($injector) {
            return (exception, cause) => {
                console.error(exception);
            };
        }
    }

    /**
     * 註冊 Angular 各項服務
     */
    export class RegisterAngular {

        public static RegisterDirective(name: string, service: Array<any>): void {
            angular.module("ExampleApp.Directives").directive(name, service);
        }

        public static RegisterDirectives(object: Object): void {
            var classNames = Object.getOwnPropertyNames(object);
            classNames.forEach((className: string) => {
                this.RegisterDirective(object[className].$name, object[className].$inject);
            });
        }

        public static RegisterService(name: string, service: Function): void {
            angular.module("ExampleApp.Services").service(name, service);
        }

        public static RegisterController(name: string, service: Function): void {
            angular.module("ExampleApp.Controllers").controller(name, service);
        }

    }

    /**
    * 初始化 Angular Module
    */
    var appModules =
        [
            "ExampleApp.Directives", "ExampleApp.Controllers", "ExampleApp.Services"
        ];
    var trirdpartyModules =
        [
            "blockUI"
        ];
    appModules.forEach((module: string) => angular.module(module, []));
    appModules = appModules.concat(trirdpartyModules);
    angular.module("ExampleApp", appModules).config(Config);
    
}