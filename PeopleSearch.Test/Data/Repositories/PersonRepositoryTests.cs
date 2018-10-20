using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PeopleSearch.Data;
using PeopleSearch.Data.Repositories;
using PeopleSearch.Models;
using PeopleSearch.Test.Helpers;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PeopleSearch.Test.Data.Repositories
{
    [TestClass]
    public class PersonRepositoryTests
    {
        private PeopleSearchDbContext _testContext;
        private readonly TestData _testData = new TestData();

        #region TestInitialize

        [TestInitialize]
        public void Initialize()
        {
            DbContextOptionsBuilder optionsBuilder = new DbContextOptionsBuilder()
                .UseInMemoryDatabase("PeopleSearch");
            _testContext = new PeopleSearchDbContext(optionsBuilder.Options);
        }

        #endregion

        #region TestCleanup

        [TestCleanup]
        public void TestCleanup()
        {
            _testContext.RemoveRange(_testContext.People);
            _testContext.SaveChanges();
        }

        #endregion

        #region AllPeopleAsync() Tests

        [TestMethod]
        public async Task AllPeopleAsync_GivenNoPeopleExist_ShouldReturnEmptyList()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);

            IList<Person> expected = new List<Person>();

            // Act
            IList<Person> actual = await repository.AllPeopleAsync();

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task AllPeopleAsync_GivenPersonExists_ShouldReturnPersonCorrectly()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);
            _testContext.People.Add(_testData.TestPerson1);
            _testContext.SaveChanges();

            IList<Person> expected = new List<Person> { _testData.TestPerson1 };

            // Act
            IList<Person> actual = await repository.SearchPeopleAsync(null);

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        #endregion

        #region SearchPeopleAsync Tests

        [TestMethod]
        public async Task SearchPeopleAsync_GivenNoPeopleExist_ShouldReturnEmptyList()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);

            IList<Person> expected = new List<Person>();

            // Act
            IList<Person> actual = await repository.SearchPeopleAsync(null);

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenPersonExists_ShouldReturnPersonCorrectly()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);
            _testContext.People.Add(_testData.TestPerson1);
            _testContext.SaveChanges();

            IList<Person> expected = new List<Person> { _testData.TestPerson1 };

            // Act
            IList<Person> actual = await repository.SearchPeopleAsync(null);

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenNullSearchString_ShouldReturnAllPeople()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);
            _testContext.People.Add(_testData.TestPerson1);
            _testContext.People.Add(_testData.TestPerson2);
            _testContext.SaveChanges();

            IList<Person> expected = new List<Person> { _testData.TestPerson1, _testData.TestPerson2 };

            // Act
            IList<Person> actual = await repository.AllPeopleAsync();

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMatchesFirstName_ShouldReturnPersonCorrectly()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);
            _testContext.People.Add(_testData.TestPerson1);
            _testContext.SaveChanges();

            IList<Person> expected = new List<Person> { _testData.TestPerson1 };

            // Act
            IList<Person> actual = await repository.SearchPeopleAsync("Alex");

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMatchesLastName_ShouldReturnPersonCorrectly()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);
            _testContext.People.Add(_testData.TestPerson1);
            _testContext.SaveChanges();

            IList<Person> expected = new List<Person> { _testData.TestPerson1 };

            // Act
            IList<Person> actual = await repository.SearchPeopleAsync("Dow");

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMismatchCase_ShouldReturnPersonCorrectly()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);
            _testContext.People.Add(_testData.TestPerson1);
            _testContext.SaveChanges();

            IList<Person> expected = new List<Person> { _testData.TestPerson1 };

            // Act
            IList<Person> actual = await repository.SearchPeopleAsync("ALEX");

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMatchesOne_ShouldReturnPersonCorrectly()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);
            _testContext.People.Add(_testData.TestPerson1);
            _testContext.People.Add(_testData.TestPerson2);
            _testContext.SaveChanges();

            IList<Person> expected = new List<Person> { _testData.TestPerson1 };

            // Act
            IList<Person> actual = await repository.SearchPeopleAsync("x");

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMatchesMultiple_ShouldReturnPeopleCorrectly()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);
            _testContext.People.Add(_testData.TestPerson1);
            _testContext.People.Add(_testData.TestPerson2);
            _testContext.SaveChanges();

            IList<Person> expected = new List<Person> { _testData.TestPerson1, _testData.TestPerson2 };

            // Act
            IList<Person> actual = await repository.SearchPeopleAsync("e");

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMatchesNone_ShouldReturnEmptyList()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);
            _testContext.People.Add(_testData.TestPerson1);
            _testContext.People.Add(_testData.TestPerson2);
            _testContext.SaveChanges();

            IList<Person> expected = new List<Person>();

            // Act
            IList<Person> actual = await repository.SearchPeopleAsync("zzz");

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
        }

        #endregion

        #region AddPersonAsync Tests

        [TestMethod]
        public async Task AddPersonAsync_GivenNullPerson_ShouldNotAdd()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);

            IList<Person> expected = new List<Person>();

            // Act
            await repository.AddPersonAsync(null);

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, await _testContext.People.ToListAsync());
        }

        [TestMethod]
        public async Task AddPersonAsync_GivenPerson_ShouldAdd()
        {
            // Arrange
            PersonRepository repository = new PersonRepository(_testContext);
            _testContext.People.Add(_testData.TestPerson1);
            _testContext.SaveChanges();

            IList<Person> expected = new List<Person> { _testData.TestPerson1 };

            // Act
            await repository.AddPersonAsync(null);

            // Assert
            ModelComparisonHelper.AssertPersonListsAreEqual(expected, await _testContext.People.ToListAsync());
        }

        #endregion
    }
}
