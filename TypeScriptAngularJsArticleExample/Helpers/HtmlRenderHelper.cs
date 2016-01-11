using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;

namespace TypeScriptAngularJsArticleExample.Helpers
{
    public static class HtmlRenderHelper
    {
        /// <summary>
        /// 產生此頁面路徑所需使用的 angular scripts 檔案，並進行綑綁
        /// </summary>
        /// <param name="htmlHelper"></param>
        /// <param name="entryPointRoot">Scripts 檔案進入點，預設為 "~/Scripts" </param>
        /// <returns></returns>
        public static IHtmlString RenderControllerJs(this HtmlHelper htmlHelper, string entryPointRoot = "~/Scripts")
        {
            // 取得 Route 路徑資訊
            var routingInfo = GetRoutingInfo(htmlHelper.ViewContext);
            // 預設相依頁面的 Script 子模組檔名
            var moduleSubFileNames = new List<string> { "ViewModel", "Directive", "Service", "Controller" };
            // 實際存在的 Modules
            var hasModule = new List<string>();
            // 尋找對應路徑下是否存在此 Script 檔案
            foreach (var subModuleName in moduleSubFileNames)
            {
                var entryPointImplementPath = $"{entryPointRoot}/App/{routingInfo.Controller}/{routingInfo.Action}.{subModuleName}.js";
                var filePath = htmlHelper.ViewContext.HttpContext.Server.MapPath(entryPointImplementPath);
                if (File.Exists(filePath))
                    hasModule.Add(entryPointImplementPath); // 存在則加入集合中
            }

            // 如不存在任何模組則不做 Render
            if (hasModule.Count == 0) return null;

            var bundleRenderPath = $"~/bundles/app/{routingInfo.Controller.ToLower()}";
            var bundle = BundleTable.Bundles.GetBundleFor(bundleRenderPath);
            if (bundle != null) // 如果存在舊的 bundle，則先刪除後再使用新的
                BundleTable.Bundles.Remove(bundle);

            bundle = new Bundle(bundleRenderPath);
            foreach (var path in hasModule)
            {
                bundle.Include(path); // 加入需要 bundle 的 Scripts
            }

            BundleTable.Bundles.Add(bundle);
            return Scripts.Render(bundleRenderPath);
        }


        private static RoutingInfo GetRoutingInfo(ViewContext viewContext)
        {
            var area = viewContext.RouteData.DataTokens["area"] != null
                ? viewContext.RouteData.DataTokens["area"].ToString()
                : "Root";

            var controller = viewContext.Controller.ValueProvider.GetValue("controller").RawValue as string;
            var action = viewContext.Controller.ValueProvider.GetValue("action").RawValue as string;
            return new RoutingInfo
            {
                Area = area,
                Controller = controller,
                Action = action
            };
        }


    }
    public class RoutingInfo
    {
        public string Area { get; set; }

        public string Controller { get; set; }

        public string Action { get; set; }
    }
}