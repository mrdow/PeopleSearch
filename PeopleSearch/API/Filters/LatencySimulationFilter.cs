using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using PeopleSearch.API.Controllers;
using PeopleSearch.API.Utils.Interfaces;

namespace PeopleSearch.API.Filters
{
    public class LatencySimulationFilter : IAsyncActionFilter
    {
        private readonly ILatencySimulator _latencySimulator;

        public LatencySimulationFilter(ILatencySimulator latencySimulator)
        {
            _latencySimulator = latencySimulator;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            if (context != null)
            {
                var controllerActionDescriptor = context.ActionDescriptor as ControllerActionDescriptor;

                // Only impose latency on PeopleController.GetAsync
                if (controllerActionDescriptor.ControllerName == nameof(PeopleController)
                        .Substring(0, nameof(PeopleController).LastIndexOf("Controller"))
                    && controllerActionDescriptor.ActionName == nameof(PeopleController.GetAsync)
                    && _latencySimulator != null)
                {
                    _latencySimulator.RandomDelay();
                }
            }

            await next();
        }
    }
}
