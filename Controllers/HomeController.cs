using System.Web.Mvc;

namespace ReiCalculator.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}