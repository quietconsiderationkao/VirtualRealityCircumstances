using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VirtualRealityCircumstances.Controllers
{
    public class VideoChatController : BaseController
    {
        // GET: VideoChat
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Room()
        {
            return View();
        }
    }
}