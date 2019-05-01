using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PeopleSearch.API.Controllers;
using PeopleSearch.API.DataAccess.Repositories.Interfaces;
using PeopleSearch.API.Models;
using PeopleSearch.API.Utils.Interfaces;
using PeopleSearch.Test.Helpers;

namespace PeopleSearch.Test.API.Controllers
{
    [ExcludeFromCodeCoverage]
    [TestClass]
    public class PeopleControllerTests
    {
        #region GetAsyncTests

        [TestMethod]
        public async Task GetAsync_GivenNullSearchString_ShouldCallRepositoryCorrectly()
        {
            // Arrange
            List<Person> matching = new List<Person>();
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
            List<Person> matching = new List<Person>();
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
            List<Person> matching = new List<Person>();
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
            List<Person> matching = new List<Person>();
            List<Person> expected = new List<Person>();

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(It.IsAny<string>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            List<Person> actual = (await controller.GetAsync(null)).Value.ToList();

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task GetAsync_GivenPersonExists_ShouldReturnPersonCorrectly()
        {
            // Arrange
            Person person = TestData.TestPerson1();
            List<Person> matching = new List<Person> { person };
            List<Person> expected = new List<Person> { person };

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(It.IsAny<string>())).ReturnsAsync(matching);

            Mock<ILatencySimulator> mockLatencySimulator = new Mock<ILatencySimulator>(MockBehavior.Loose);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            List<Person> actual = (await controller.GetAsync(null)).Value.ToList();

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task GetAsync_GivenNonMatchingSearchString_ShouldReturnEmptyList()
        {
            // Arrange
            List<Person> matching = new List<Person>();
            List<Person> expected = new List<Person>();

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(It.IsAny<string>())).ReturnsAsync(matching);

            Mock<ILatencySimulator> mockLatencySimulator = new Mock<ILatencySimulator>(MockBehavior.Loose);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            List<Person> actual = (await controller.GetAsync("someString")).Value.ToList();

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task GetAsync_GivenMatchingSearchString_ShouldReturnPeopleCorrectly()
        {
            // Arrange
            Person person1 = TestData.TestPerson1();
            Person person2 = TestData.TestPerson2();
            List<Person> matching = new List<Person> { person1, person2 };
            List<Person> expected = new List<Person> { person1, person2 };

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.SearchPeopleAsync(It.IsAny<string>())).ReturnsAsync(matching);

            Mock<ILatencySimulator> mockLatencySimulator = new Mock<ILatencySimulator>(MockBehavior.Loose);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            List<Person> actual = (await controller.GetAsync("someString")).Value.ToList();

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        #endregion

        #region GetByIdAsync

        [TestMethod]
        public async Task GetByIdAsync_GivenId_ShouldCallRepositoryCorrectly()
        {
            // Arrange
            Person matching = new Person();
            long expected = 0;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Strict);
            mockPersonRepository.Setup(r => r.GetByIdAsync(expected)).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            await controller.GetByIdAsync(expected);

            // Assert
            mockPersonRepository.VerifyAll();
        }

        [TestMethod]
        public async Task GetByIdAsync_GivenPersonDoesNotExist_ShouldReturnNull()
        {
            // Arrange
            Person matching = null;
            Person expected = null;
            long id = 0;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.GetByIdAsync(It.IsAny<int>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            Person actual = (await controller.GetByIdAsync(id)).Value;

            // Assert
            ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task GetByIdAsync_GivenPersonExists_ShouldReturnPersonCorrectly()
        {
            // Arrange
            Person person = TestData.TestPerson1();
            Person matching = person;
            Person expected = person;
            long id = 0;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.GetByIdAsync(It.IsAny<long>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            Person actual = (await controller.GetByIdAsync(id)).Value;

            // Assert
            ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
        }

        #endregion

        #region PutAsync

        [TestMethod]
        public async Task PutAsync_GivenNullPerson_ShouldCallRepositoryCorrectly()
        {
            // Arrange
            Person matching = null;
            Person expected = null;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Strict);
            mockPersonRepository.Setup(r => r.AddOrUpdatePerson(expected)).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            await controller.PutAsync(expected);

            // Assert
            mockPersonRepository.VerifyAll();
        }

        [TestMethod]
        public async Task PutAsync_GivenValidNullPerson_ShouldCallRepositoryCorrectly()
        {
            // Arrange
            Person person = TestData.TestPerson1();
            Person matching = person;
            Person expected = person;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Strict);
            mockPersonRepository.Setup(r => r.AddOrUpdatePerson(expected)).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            await controller.PutAsync(expected);

            // Assert
            mockPersonRepository.VerifyAll();
        }

        [TestMethod]
        public async Task PutAsync_GivenPersonDoesNotExist_ShouldReturnNull()
        {
            // Arrange
            Person matching = null;
            Person expected = null;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.AddOrUpdatePerson(It.IsAny<Person>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            Person actual = (await controller.PutAsync(TestData.TestPerson1())).Value;

            // Assert
            ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task PutAsync_GivenPersonExists_ShouldReturnPersonCorrectly()
        {
            // Arrange
            Person person = TestData.TestPerson1();
            Person matching = person;
            Person expected = person;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.AddOrUpdatePerson(It.IsAny<Person>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            Person actual = (await controller.PutAsync(matching)).Value;

            // Assert
            ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
        }

        #endregion

        #region PostAsync

        [TestMethod]
        public async Task PostAsync_GivenNullPerson_ShouldCallRepositoryCorrectly()
        {
            // Arrange
            Person matching = null;
            Person expected = null;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Strict);
            mockPersonRepository.Setup(r => r.AddPersonAsync(expected)).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            await controller.PostAsync(expected);

            // Assert
            mockPersonRepository.VerifyAll();
        }

        [TestMethod]
        public async Task PostAsync_GivenValidNullPerson_ShouldCallRepositoryCorrectly()
        {
            // Arrange
            Person person = TestData.TestPerson1();
            Person matching = person;
            Person expected = person;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Strict);
            mockPersonRepository.Setup(r => r.AddPersonAsync(expected)).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            await controller.PostAsync(expected);

            // Assert
            mockPersonRepository.VerifyAll();
        }

        [TestMethod]
        public async Task PostAsync_GivenRepositoryReturnsNull_ShouldReturnNull()
        {
            // Arrange
            Person matching = null;
            Person expected = null;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.AddPersonAsync(It.IsAny<Person>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            Person actual = (await controller.PostAsync(TestData.TestPerson1())).Value;

            // Assert
            ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task PostAsync_GivenRepositoryReturnsPerson_ShouldReturnPersonCorrectly()
        {
            // Arrange
            Person person = TestData.TestPerson1();
            Person matching = person;
            Person expected = person;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Loose);
            mockPersonRepository.Setup(r => r.AddPersonAsync(It.IsAny<Person>())).ReturnsAsync(matching);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            Person actual = (await controller.PostAsync(matching)).Value;

            // Assert
            ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
        }

        #endregion

        #region DeleteAsync

        [TestMethod]
        public async Task DeleteAsync_ShouldCallRepositoryCorrectly()
        {
            // Arrange
            int expected = 0;

            Mock<IPersonRepository> mockPersonRepository = new Mock<IPersonRepository>(MockBehavior.Strict);
            mockPersonRepository.Setup(r => r.DeletePersonAsync(expected)).Returns(Task.CompletedTask);

            PeopleController controller = new PeopleController(mockPersonRepository.Object);

            // Act
            await controller.DeleteAsync(expected);

            // Assert
            mockPersonRepository.VerifyAll();
        }

        #endregion
    }
}
