using Microsoft.AspNetCore.Mvc;
using PMSBlazorApp.Shared;

namespace PMSBlazorApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DiaryController : ControllerBase
    {
        private readonly ILogger<DiaryController> _logger;
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };
        public DiaryController(ILogger<DiaryController> logger)
        {
            _logger = logger;
        }

        [Route("Goof")]
        [HttpPost]
        public IEnumerable<WeatherForecast> PostRed()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
        [HttpPost]
        [Route("NumberOfActions")]
        public ContentResult NumberOfActions()
        {
            var returntext = "{\r\n    \"CardsDeclinedOverview\": 0,\r\n    \"OverBookingsOverview\": 2,\r\n    \"SplitAvailabilityOverview\": 2,\r\n    \"DepositsDueOverview\": 3,\r\n    \"CancellationsOverview\": 27,\r\n    \"ExtrasOverview\": 0\r\n}";
            return this.Content(returntext, "application/json");
        }
        [HttpPost]
        [Route("logcall")]
        public ActionResult logcall()
        {
            var returntext = "{\"StatusCode\":200,\"StatusDescription\":null}";
            return this.Content(returntext, "application/json");
        }

    }
}
