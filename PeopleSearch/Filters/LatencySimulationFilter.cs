using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using PeopleSearch.Controllers;
using PeopleSearch.Utils.Interfaces;

namespace PeopleSearch.Filters
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
            var controllerActionDescriptor = context.ActionDescriptor as ControllerActionDescriptor;

            // Only impose latency on PeopleController.GetAsync
            if(controllerActionDescriptor.ControllerName == nameof(PeopleController).Substring(0, nameof(PeopleController).LastIndexOf("Controller"))
                && controllerActionDescriptor.ActionName == nameof(PeopleController.GetAsync))
            {
                _latencySimulator.RandomDelay();
            }

            await next();
        }
    }
}
