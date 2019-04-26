using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PeopleSearch.API.Controllers;

namespace PeopleSearch.Test.API.Controllers
{
    [ExcludeFromCodeCoverage]
    [TestClass]
    public class DefaultControllerTests
    {
        #region Index Tests

        [TestMethod]
        public void Index_ShouldReturnIndexHtml()
        {
            // Arrange
            DefaultController controller = new DefaultController();

            // Act
            var result = controller.Index() as VirtualFileResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual("text/html", result.ContentType);
            Assert.AreEqual("~/index.html", result.FileName);
        }

        #endregion
    }
}
