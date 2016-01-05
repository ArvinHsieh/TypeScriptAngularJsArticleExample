var ExampleApp;
(function (ExampleApp) {
    var Directives;
    (function (Directives) {
        /** 送出自動 Disable 按鈕，可額外帶入需要顯示的文字 */
        var SubmitAutoDisable = (function () {
            function SubmitAutoDisable() {
            }
            SubmitAutoDisable.DirectiveFactory = function () {
                return {
                    restrict: "A",
                    link: function (scope, element, attrs) {
                        element.parents("form").submit(function (event) {
                            if (attrs["submitAutoDisable"]) {
                                element.val(attrs["submitAutoDisable"]);
                            }
                            element.attr("disabled", "true");
                            element.addClass("btn-disabled");
                        });
                        scope.$on("destroy", function () {
                        });
                    }
                };
            };
            SubmitAutoDisable.$name = "submitAutoDisable";
            SubmitAutoDisable.$inject = [SubmitAutoDisable.DirectiveFactory];
            return SubmitAutoDisable;
        })();
        Directives.SubmitAutoDisable = SubmitAutoDisable;
        /**
         *  送出自動 Block 畫面
         */
        var SubmitAutoBlock = (function () {
            function SubmitAutoBlock() {
            }
            SubmitAutoBlock.DirectiveFactory = function (blockUI) {
                return {
                    restrict: "A",
                    link: function (scope, element, attrs) {
                        element.parents("form").submit(function (event) {
                            blockUI.start();
                        });
                        scope.$on("destroy", function () {
                        });
                    }
                };
            };
            SubmitAutoBlock.$name = "submitAutoBlock";
            SubmitAutoBlock.$inject = ["blockUI", SubmitAutoBlock.DirectiveFactory];
            return SubmitAutoBlock;
        })();
        Directives.SubmitAutoBlock = SubmitAutoBlock;
    })(Directives = ExampleApp.Directives || (ExampleApp.Directives = {}));
})(ExampleApp || (ExampleApp = {}));
ExampleApp.RegisterAngular.RegisterDirectives(ExampleApp.Directives);
//# sourceMappingURL=Common.Directive.js.map