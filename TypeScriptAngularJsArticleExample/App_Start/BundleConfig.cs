using BundleTransformer.Core.Transformers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace TypeScriptAngularJsArticleExample
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // bundling styles.
            var styleBundle = new StyleBundle("~/bundles/css/base")
                .Include("~/Content/angular-block-ui.css")
                .Include("~/Content/bootstrap.css")
                .Include("~/Content/Site.css");
            styleBundle.Transforms.Add(new StyleTransformer());
            bundles.Add(styleBundle);

            // bundling script.
            bundles.Add(
                new ScriptBundle("~/bundles/script/base")
                .Include(
                    "~/Scripts/libs/jquery/jquery-2.1.4.js",
                    "~/Scripts/libs/angular/angular.js",
                    "~/Scripts/libs/angular/angular-block-ui.js"
                ));

            bundles.Add(
                new ScriptBundle("~/bundles/script/app")
                .Include(
                    "~/Scripts/app/app.js",
                    "~/Scripts/app/common.directive.js"
                ));

            //BundleTable.EnableOptimizations = true;
        }

    }
}