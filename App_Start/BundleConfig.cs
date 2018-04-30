using System.Web.Optimization;

namespace ReiCalculator.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/content/js").Include(
                "~/lib/angular/angular.min.js",
                "~/lib/foundation/foundation.min.js"));

            bundles.Add(new ScriptBundle("~/content/appjs").Include(
                "~/app/app.js")
                .IncludeDirectory("~/app", "*.js", false)
                .IncludeDirectory("~/app/components", "*.js", true));

            bundles.Add(new StyleBundle("~/content/css").Include(
                "~/lib/foundation/css/foundation.min.css",
                "~/css/site.min.css"));

            BundleTable.EnableOptimizations = true;
        }
    }
}