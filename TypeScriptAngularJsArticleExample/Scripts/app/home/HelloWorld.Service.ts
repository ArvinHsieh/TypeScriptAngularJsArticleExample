module ExampleApp.Services {

    export class HelloWorldService {
        static $name = "HelloWorldSvc";
        static $inject = ["$http"];

        private http: ng.IHttpService;

        constructor($http: ng.IHttpService) {
            this.http = $http;
        }

        /**
         * 取得書籍資訊
         */
        public GetBookInfo(callback: (data: Models.Book, error: Error) => void): void {
            this.http.get("GetBookInfo")
                .success((data: Models.Book) => {
                    callback(data, null);
                })
                .error((error: Error) => {
                    callback(null, error);
                });
        }
    }
    
}

ExampleApp.RegisterAngular.RegisterService(
    ExampleApp.Services.HelloWorldService.$name,
    ExampleApp.Services.HelloWorldService);