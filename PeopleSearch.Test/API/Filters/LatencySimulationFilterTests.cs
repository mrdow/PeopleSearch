using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Routing;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PeopleSearch.API.Filters;
using PeopleSearch.API.Utils.Interfaces;

namespace PeopleSearch.Test.API.Filters
{
    [ExcludeFromCodeCoverage]
    [TestClass]
    public class LatencySimulationFilterTests
    {
        #region OnActionExecutionAsync Tests

        [TestMethod]
        public async Task OnActionExecutionAsync_GivenNullContext_ShouldNotThrowException()
        {
            // Arrange
            ActionExecutingContext actionExecutingContext = null;
            ActionExecutedContext actionExecutedContext = null;

            LatencySimulationFilter filter = new LatencySimulationFilter(null);

            try
            {
                // Act
                await filter.OnActionExecutionAsync(actionExecutingContext,
                    async () => await Task.FromResult(actionExecutedContext));
            }
            catch
            {
                // Assert
                Assert.Fail();
            }
        }

        [TestMethod]
        public async Task OnActionExecutionAsync_GivenIncorrectController_ShouldNotCallSimulator()
        {
            // Arrange
            Mock<ILatencySimulator> mockLatencySimulator = new Mock<ILatencySimulator>(MockBehavior.Strict);

            ControllerActionDescriptor actionDescriptor = new ControllerActionDescriptor
                { ControllerName = "Invalid", ActionName = "GetAsync" };

            var actionContext = new ActionContext(
                new Mock<HttpContext>().Object,
                new Mock<RouteData>().Object,
                actionDescriptor,
                new Mock<ModelStateDictionary>().Object
            );

            var actionExecutingContext = new ActionExecutingContext(
                actionContext,
                new List<IFilterMetadata>(),
                new Dictionary<string, object>(),
                new Mock<Controller>().Object
            );

            ActionExecutedContext actionExecutedContext = null;
            
            LatencySimulationFilter filter = new LatencySimulationFilter(mockLatencySimulator.Object);

            // Act
            await filter.OnActionExecutionAsync(actionExecutingContext, async () => await Task.FromResult(actionExecutedContext));

            // Assert
            mockLatencySimulator.VerifyAll();
        }

        [TestMethod]
        public async Task OnActionExecutionAsync_GivenIncorrectAction_ShouldNotCallSimulator()
        {
            // Arrange
            Mock<ILatencySimulator> mockLatencySimulator = new Mock<ILatencySimulator>(MockBehavior.Strict);

            ControllerActionDescriptor actionDescriptor = new ControllerActionDescriptor
                { ControllerName = "People", ActionName = "Invalid" };

            var actionContext = new ActionContext(
                new Mock<HttpContext>().Object,
                new Mock<RouteData>().Object,
                actionDescriptor,
                new Mock<ModelStateDictionary>().Object
            );

            var actionExecutingContext = new ActionExecutingContext(
                actionContext,
                new List<IFilterMetadata>(),
                new Dictionary<string, object>(),
                new Mock<Controller>().Object
            );

            ActionExecutedContext actionExecutedContext = null;

            LatencySimulationFilter filter = new LatencySimulationFilter(mockLatencySimulator.Object);

            // Act
            await filter.OnActionExecutionAsync(actionExecutingContext, async () => await Task.FromResult(actionExecutedContext));

            // Assert
            mockLatencySimulator.VerifyAll();
        }

        [TestMethod]
        public async Task OnActionExecutionAsync_GivenCorrectControllerAndNullSimulator_ShouldNotThrowException()
        {
            // Arrange
            ControllerActionDescriptor actionDescriptor = new ControllerActionDescriptor
                { ControllerName = "People", ActionName = "GetAsync" };

            var actionContext = new ActionContext(
                new Mock<HttpContext>().Object,
                new Mock<RouteData>().Object,
                actionDescriptor,
                new Mock<ModelStateDictionary>().Object
            );

            var actionExecutingContext = new ActionExecutingContext(
                actionContext,
                new List<IFilterMetadata>(),
                new Dictionary<string, object>(),
                new Mock<Controller>().Object
            );

            ActionExecutedContext actionExecutedContext = null;

            LatencySimulationFilter filter = new LatencySimulationFilter(null);

            try
            {
                // Act
                await filter.OnActionExecutionAsync(actionExecutingContext,
                    async () => await Task.FromResult(actionExecutedContext));
            }
            catch
            {
                // Assert
                Assert.Fail();
            }
        }

        [TestMethod]
        public async Task OnActionExecutionAsync_GivenCorrectController_ShouldCallSimulatorCorrectly()
        {
            // Arrange
            Mock<ILatencySimulator> mockLatencySimulator = new Mock<ILatencySimulator>(MockBehavior.Strict);
            mockLatencySimulator.Setup(s => s.RandomDelay());

            ControllerActionDescriptor actionDescriptor = new ControllerActionDescriptor
                { ControllerName = "People", ActionName = "GetAsync" };

            var actionContext = new ActionContext(
                new Mock<HttpContext>().Object,
                new Mock<RouteData>().Object,
                actionDescriptor,
                new Mock<ModelStateDictionary>().Object
            );

            var actionExecutingContext = new ActionExecutingContext(
                actionContext,
                new List<IFilterMetadata>(),
                new Dictionary<string, object>(),
                new Mock<Controller>().Object
            );

            ActionExecutedContext actionExecutedContext = null;

            LatencySimulationFilter filter = new LatencySimulationFilter(mockLatencySimulator.Object);

            // Act
            await filter.OnActionExecutionAsync(actionExecutingContext, async () => await Task.FromResult(actionExecutedContext));

            // Assert
            mockLatencySimulator.VerifyAll();
        }

        #endregion
    }
}
