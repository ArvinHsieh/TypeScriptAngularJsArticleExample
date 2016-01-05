module ExampleApp.Controllers {

    export interface IHelloWordCtrlScope extends ng.IScope {
        model: Models.HelloWorldViewModel;
        
        helloWorldSvc: Services.HelloWorldService;

        SayHello(): void;
        GetBookInfo(): void;
    }


    export class HelloWorldCtrl {
        static $name = "HelloWorldCtrl";
        static $inject = ["$scope", "HelloWorldSvc"];

        private scope: IHelloWordCtrlScope;

        constructor(
            $scope: IHelloWordCtrlScope,
            helloWorldSvc: Services.HelloWorldService) {

            this.scope = $scope;

            this.scope.helloWorldSvc = helloWorldSvc;

            this.scope.SayHello = this.SayHello;
            this.scope.GetBookInfo = this.GetBookInfo;

            var model = new Models.HelloWorldViewModel;
            model.Message = "Hello World!!!";

            this.scope.model = model;

            this.scope.$on("destroy", () => {

            });
        }

        public SayHello(): void {
            var scope: IHelloWordCtrlScope = <any>this;
            scope.model.Message = "Hello Arvin!!!";
        }

        public GetBookInfo(): void {
            var scope: IHelloWordCtrlScope = <any>this;
            scope.helloWorldSvc.GetBookInfo((data, error) => {
                if (error != null) {
                    console.error(error);
                    return;
                }

                scope.model.BookInfo = data;
            });
        }

    }

}

ExampleApp.RegisterAngular.RegisterController(
    ExampleApp.Controllers.HelloWorldCtrl.$name,
    ExampleApp.Controllers.HelloWorldCtrl);