module ExampleApp.Directives {

    /** 送出自動 Disable 按鈕，可額外帶入需要顯示的文字 */
    export class SubmitAutoDisable {
        static $name = "submitAutoDisable";
        static $inject = [SubmitAutoDisable.DirectiveFactory];
        static DirectiveFactory(): ng.IDirective {
            return {
                restrict: "A",
                link: (scope, element, attrs) => {
                    element.parents("form").submit((event) => {
                        if (attrs["submitAutoDisable"]) {
                            element.val(attrs["submitAutoDisable"]);
                        }
                        element.attr("disabled", "true");
                        element.addClass("btn-disabled");
                    });

                    scope.$on("destroy", () => {

                    });
                }
            }
        }
    }

    /**
     *  送出自動 Block 畫面
     */
    export class SubmitAutoBlock {
        static $name = "submitAutoBlock";
        static $inject = ["blockUI", SubmitAutoBlock.DirectiveFactory];
        static DirectiveFactory(blockUI: ng.IBlockUI): ng.IDirective {
            return {
                restrict: "A",
                link: (scope, element, attrs) => {
                    element.parents("form").submit((event) => {
                        blockUI.start();
                    });

                    scope.$on("destroy", () => {

                    });
                }
            }
        }
    }

}

ExampleApp.RegisterAngular.RegisterDirectives(ExampleApp.Directives);