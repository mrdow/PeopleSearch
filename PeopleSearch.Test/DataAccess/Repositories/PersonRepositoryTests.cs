using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PeopleSearch.API.DataAccess;
using PeopleSearch.API.DataAccess.Repositories;
using PeopleSearch.API.Models;
using PeopleSearch.Test.Helpers;

namespace PeopleSearch.Test.DataAccess.Repositories
{
    [ExcludeFromCodeCoverage]
    [TestClass]
    public class PersonRepositoryTests
    {
        #region AllPeopleAsync Tests

        [TestMethod]
        public async Task AllPeopleAsync_GivenNoPeopleExist_ShouldReturnEmptyList()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                PersonRepository repository = new PersonRepository(testContext);

                List<Person> expected = new List<Person>();

                // Act
                List<Person> actual = (await repository.AllPeopleAsync()).ToList();

                // Assert
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task AllPeopleAsync_GivenPersonExists_ShouldReturnPersonCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                List<Person> expected = new List<Person> { added };

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                List<Person> actual = (await repository.SearchPeopleAsync(null)).ToList();

                // Assert
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        #endregion

        #region SearchPeopleAsync Tests

        [TestMethod]
        public async Task SearchPeopleAsync_GivenNoPeopleExist_ShouldReturnEmptyList()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                PersonRepository repository = new PersonRepository(testContext);

                List<Person> expected = new List<Person>();

                // Act
                List<Person> actual = (await repository.SearchPeopleAsync(null)).ToList();

                // Assert
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenPersonExists_ShouldReturnPersonCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                List<Person> expected = new List<Person> { added };

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                List<Person> actual = (await repository.SearchPeopleAsync(null)).ToList();

                // Assert
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenNullSearchString_ShouldReturnAllPeople()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added1 = TestData.TestPerson1();
                Person added2 = TestData.TestPerson2();
                List<Person> expected = new List<Person> { added1, added2 };

                testContext.People.Add(added1);
                testContext.People.Add(added2);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                List<Person> actual = (await repository.AllPeopleAsync()).ToList();

                // Assert
                List<Person> actualSorted = actual.OrderBy(p => p.Id).ToList();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actualSorted);
            }
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMatchesFirstName_ShouldReturnPersonCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                List<Person> expected = new List<Person> { added };

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                List<Person> actual = (await repository.SearchPeopleAsync(added.FirstName)).ToList();

                // Assert
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMatchesLastName_ShouldReturnPersonCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                List<Person> expected = new List<Person> { added };

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                List<Person> actual = (await repository.SearchPeopleAsync(added.LastName)).ToList();

                // Assert
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMismatchCase_ShouldReturnPersonCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                List<Person> expected = new List<Person> { added };

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                List<Person> actual = (await repository.SearchPeopleAsync(added.FirstName.ToUpper())).ToList();

                // Assert
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMatchesOne_ShouldReturnPersonCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added1 = TestData.TestPerson1();
                Person added2 = TestData.TestPerson2();
                List<Person> expected = new List<Person> { added1 };

                testContext.People.Add(added1);
                testContext.People.Add(added2);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                List<Person> actual = (await repository.SearchPeopleAsync("x")).ToList();

                // Assert
                List<Person> actualSorted = actual.OrderBy(p => p.Id).ToList();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actualSorted);
            }
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMatchesMultiple_ShouldReturnPeopleCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added1 = TestData.TestPerson1();
                Person added2 = TestData.TestPerson2();
                List<Person> expected = new List<Person> { added1, added2 };

                testContext.People.Add(added1);
                testContext.People.Add(added2);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                List<Person> actual = (await repository.SearchPeopleAsync("e")).ToList();

                // Assert
                List<Person> actualSorted = actual.OrderBy(p => p.Id).ToList();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actualSorted);
            }
        }

        [TestMethod]
        public async Task SearchPeopleAsync_GivenSearchStringMatchesNone_ShouldReturnEmptyList()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                List<Person> expected = new List<Person>();

                testContext.People.Add(TestData.TestPerson1());
                testContext.People.Add(TestData.TestPerson2());
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                List<Person> actual = (await repository.SearchPeopleAsync("zzz")).ToList();

                // Assert
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        #endregion

        #region GetByIdAsync Tests

        [TestMethod]
        public async Task GetByIdAsync_GivenNoPeopleExist_ShouldReturnNull()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                PersonRepository repository = new PersonRepository(testContext);

                Person expected = null;

                // Act
                Person actual = await repository.GetByIdAsync(0);

                // Assert
                ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task GetByIdAsync_GivenPersonExists_ShouldReturnPersonCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                Person expected = added;

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                Person actual = await repository.GetByIdAsync(expected.Id);

                // Assert
                ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task GetByIdAsync_GivenMatchingId_ShouldReturnPersonCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added1 = TestData.TestPerson1();
                Person added2 = TestData.TestPerson2();
                Person expected = added2;

                testContext.People.Add(added1);
                testContext.People.Add(added2);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                Person actual = await repository.GetByIdAsync(expected.Id);

                // Assert
                ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task GetByIdAsync_GivenNonMatchingId_ShouldReturnNull()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person expected = null;

                testContext.People.Add(TestData.TestPerson1());
                testContext.People.Add(TestData.TestPerson2());
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                Person actual = await repository.GetByIdAsync(123);

                // Assert
                ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
            }
        }

        #endregion

        #region AddPersonAsync Tests

        [TestMethod]
        public async Task AddPersonAsync_GivenNullPerson_ShouldNotAdd()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {

                PersonRepository repository = new PersonRepository(testContext);

                int expected = 0;

                // Act
                await repository.AddPersonAsync(null);

                // Assert
                int actual = await testContext.People.CountAsync();
                Assert.AreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task AddPersonAsync_GivenPerson_ShouldReturnPersonCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person expected = TestData.TestPerson1();


                PersonRepository repository = new PersonRepository(testContext);

                // Act
                Person actual = await repository.AddPersonAsync(expected);

                // Assert
                ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task AddPersonAsync_GivenPersonDoesNotExist_ShouldAdd()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                List<Person> expected = new List<Person> { added };


                PersonRepository repository = new PersonRepository(testContext);

                // Act
                await repository.AddPersonAsync(added);

                // Assert
                List<Person> actual = await testContext.People.ToListAsync();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task AddPersonAsync_GivenPersonExists_ShouldNotAdd()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                List<Person> expected = new List<Person> { added };

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                await repository.AddPersonAsync(added);

                // Assert
                List<Person> actual = await testContext.People.ToListAsync();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        #endregion

        #region AddOrUpdatePerson Tests

        [TestMethod]
        public async Task AddOrUpdatePerson_GivenNullPerson_ShouldNotAdd()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {

                PersonRepository repository = new PersonRepository(testContext);

                int expected = 0;

                // Act
                await repository.AddOrUpdatePerson(null);

                // Assert
                int actual = await testContext.People.CountAsync();
                Assert.AreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task AddOrUpdatePerson_GivenPerson_ShouldReturnPersonCorrectly()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person expected = TestData.TestPerson1();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                Person actual = await repository.AddOrUpdatePerson(expected);

                // Assert
                ModelComparisonHelper.AssertPeopleAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task AddOrUpdatePerson_GivenPersonDoesNotExist_ShouldAdd()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                List<Person> expected = new List<Person> { added };

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                await repository.AddOrUpdatePerson(added);

                // Assert
                List<Person> actual = await testContext.People.ToListAsync();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task AddOrUpdatePerson_GivenPersonExists_ShouldUpdate()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                Person modified = TestData.TestPerson1();
                List<Person> expected = new List<Person> { modified };

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                modified.Id = added.Id;
                modified.FirstName = "New name";
                added.FirstName = "New name";

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                await repository.AddOrUpdatePerson(added);

                // Assert
                List<Person> actual = await testContext.People.ToListAsync();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task AddOrUpdatePerson_GivenInterestsAdded_ShouldUpdate()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                Person modified = TestData.TestPerson1();
                List<Person> expected = new List<Person> { modified };

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                modified.Id = added.Id;
                added.Interests.Add(new Interest
                {
                    Name = "Coding"
                });
                modified.Interests.Add(new Interest
                {
                     Name = "Coding"
                });

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                await repository.AddOrUpdatePerson(added);

                // Assert
                List<Person> actual = await testContext.People.ToListAsync();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task AddOrUpdatePerson_GivenInterestsRemoved_ShouldUpdate()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                Person modified = TestData.TestPerson1();
                List<Person> expected = new List<Person> { modified };

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                modified.Id = added.Id;
                added.Interests.Clear();
                modified.Interests.Clear();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                await repository.AddOrUpdatePerson(added);

                // Assert
                List<Person> actual = await testContext.People.ToListAsync();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task AddOrUpdatePerson_GivenInterestsReplaced_ShouldUpdate()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                Person modified = TestData.TestPerson1();
                List<Person> expected = new List<Person> { modified };

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();

                modified.Id = added.Id;
                added.Interests.RemoveAt(0);
                added.Interests.Add(new Interest
                {
                    Name = "Coding"
                });
                modified.Interests.RemoveAt(0);
                modified.Interests.Add(new Interest
                {
                    Name = "Coding"
                });

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                await repository.AddOrUpdatePerson(added);

                // Assert
                List<Person> actual = await testContext.People.ToListAsync();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        #endregion

        #region DeletePersonAsync Tests

        [TestMethod]
        public async Task DeletePersonAsync_GivenPersonDoesNotExist_ShouldDoNothing()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person person1 = TestData.TestPerson1();
                Person person2 = TestData.TestPerson2();
                List<Person> expected = new List<Person> { person1 };

                testContext.People.Add(person1);
                await testContext.SaveChangesAsync();

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                await repository.DeletePersonAsync(person2.Id);

                // Assert
                List<Person> actual = await testContext.People.ToListAsync();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        [TestMethod]
        public async Task DeletePersonAsync_GivenPersonExists_ShouldDoNothing()
        {
            // Arrange
            using (PeopleSearchDbContext testContext = GetTestContext())
            {
                Person added = TestData.TestPerson1();
                List<Person> expected = new List<Person>();

                testContext.People.Add(added);
                await testContext.SaveChangesAsync();
                testContext.Entry(added).State = EntityState.Detached;

                PersonRepository repository = new PersonRepository(testContext);

                // Act
                await repository.DeletePersonAsync(added.Id);

                // Assert
                List<Person> actual = await testContext.People.ToListAsync();
                ModelComparisonHelper.AssertPersonListsAreEqual(expected, actual);
            }
        }

        #endregion

        #region Helper Methods

        public PeopleSearchDbContext GetTestContext()
        {
            DbContextOptionsBuilder optionsBuilder = new DbContextOptionsBuilder()
                .UseInMemoryDatabase(Guid.NewGuid().ToString());
            return new PeopleSearchDbContext(optionsBuilder.Options);
        }

        #endregion
    }
}
