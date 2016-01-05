using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TypeScriptAngularJsArticleExample.Models;

namespace TypeScriptAngularJsArticleExample.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult HelloWorld()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetBookInfo()
        {
            var model = new Book()
            {
                ID = "1",
                BookName = "ASP.NET",
                BookAuthor = "Microsoft"
            };

            return Json(model, JsonRequestBehavior.AllowGet);
        }
    }
}