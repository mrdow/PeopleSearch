using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PeopleSearch.Controllers;
using PeopleSearch.Data.Repositories.Interfaces;
using PeopleSearch.Models;
using PeopleSearch.Test.Helpers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PeopleSearch.Test.Controllers
{
    [TestClass]
    public class PeopleControllerTests
    {
        private readonly TestData _testData = new TestData();

        #region GetAsyncTests

        [TestMethod]
        public async Task GetAsync_GivenNullSearchString_ShouldCallRepositoryCorrectly()
        {
            // Arrange
            IList<Person> matching = new List<Person>();
            string expected = null;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Strict);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(expected)).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            await controller.GetAsync(expected);

            // Assert
            mockPersonRepository.VerifyAll();
        }

        [TestMethod]
        public async Task GetAsync_GivenEmptySearchString_ShouldCallRepositoryCorrectly()
        {
            // Arrange
            IList<Person> matching = new List<Person>();
            string expected = string.Empty;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Strict);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(expected)).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            await controller.GetAsync(expected);

            // Assert
            mockPersonRepository.VerifyAll();
        }

        [TestMethod]
        public async Task GetAsync_GivenWhitespaceSearchString_ShouldCallRepositoryCorrectly()
        {
            // Arrange
            IList<Person> matching = new List<Person>();
            string expected = " ";

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Strict);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(expected)).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            await controller.GetAsync(expected);

            // Assert
            mockPersonRepository.VerifyAll();
        }

        [TestMethod]
        public async Task GetAsync_GivenNoPeopleExist_ShouldReturnEmptyList()
        {
            // Arrange
            IList<Person> matching = new List<Person>();
            IList<Person> expected = new List<Person>();

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(It.IsAny<string>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            IList<Person> actual = await controller.GetAsync(null);

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task GetAsync_GivenPersonExists_ShouldReturnPersonCorrectly()
        {
            // Arrange
            IList<Person> matching = new List<Person> { _testData.TestPerson1 };
            IList<Person> expected = new List<Person> { _testData.TestPerson1 };

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(It.IsAny<string>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            IList<Person> actual = await controller.GetAsync(null);

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task GetAsync_GivenNonMatchingSearchString_ShouldReturnEmptyList()
        {
            // Arrange
            IList<Person> matching = new List<Person>();
            IList<Person> expected = new List<Person>();

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(It.IsAny<string>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            IList<Person> actual = await controller.GetAsync("someString");

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task GetAsync_GivenMatchingSearchString_ShouldReturnPeopleCorrectly()
        {
            // Arrange
            IList<Person> matching = new List<Person> { _testData.TestPerson1, _testData.TestPerson2 };
            IList<Person> expected = new List<Person> { _testData.TestPerson1, _testData.TestPerson2 };

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(It.IsAny<string>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            IList<Person> actual = await controller.GetAsync("someString");

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        #endregion
    }
}
