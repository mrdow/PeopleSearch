using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Routing;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PeopleSearch.API.Filters;

namespace PeopleSearch.Test.API.Filters
{
    [ExcludeFromCodeCoverage]
    [TestClass]
    public class ValidateModelFilterTests
    {
        #region OnActionExecutionAsync

        [TestMethod]
        public async Task OnActionExecutionAsync_GivenValidContext_ShouldHaveNullResult()
        {
            // Arrange
            var modelState = new ModelStateDictionary();

            var actionContext = new ActionContext(
                new Mock<HttpContext>().Object,
                new Mock<RouteData>().Object,
                new Mock<ActionDescriptor>().Object,
                modelState
            );

            var actionExecutingContext = new ActionExecutingContext(
                actionContext,
                new List<IFilterMetadata>(),
                new Dictionary<string, object>(),
                new Mock<Controller>().Object
            );

            var actionExecutedContext = new ActionExecutedContext(
                actionContext,
                new List<IFilterMetadata>(),
                new Mock<Controller>().Object
            );

            ValidateModelFilter filter = new ValidateModelFilter();

            // Act
            await filter.OnActionExecutionAsync(actionExecutingContext, async () => await Task.FromResult(actionExecutedContext));

            // Assert
            Assert.IsNull(actionExecutingContext.Result);
        }

        [TestMethod]
        public async Task OnActionExecutionAsync_GivenInvalidContext_ShouldHaveBadRequestObjectResult()
        {
            // Arrange
            var modelState = new ModelStateDictionary();
            modelState.AddModelError("name", "invalid");

            var actionContext = new ActionContext(
                new Mock<HttpContext>().Object,
                new Mock<RouteData>().Object,
                new Mock<ActionDescriptor>().Object,
                modelState
            );

            var actionExecutingContext = new ActionExecutingContext(
                actionContext,
                new List<IFilterMetadata>(),
                new Dictionary<string, object>(),
                new Mock<Controller>().Object
            );

            var actionExecutedContext = new ActionExecutedContext(
                actionContext,
                new List<IFilterMetadata>(),
                new Mock<Controller>().Object
            );

            ValidateModelFilter filter = new ValidateModelFilter();

            // Act
            await filter.OnActionExecutionAsync(actionExecutingContext, async () => await Task.FromResult(actionExecutedContext));

            // Assert
            Assert.IsInstanceOfType(actionExecutingContext.Result, typeof(BadRequestObjectResult));
        }

        #endregion
    }
}
