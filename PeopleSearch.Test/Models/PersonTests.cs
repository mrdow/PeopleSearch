using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PeopleSearch.API.Models;

namespace PeopleSearch.Test.Models
{

    [ExcludeFromCodeCoverage]
    [TestClass]
    public class PersonTests
    {
        #region Person Tests

        [TestMethod]
        public void Age_GivenBirthDate_ShouldCalculateCorrectly()
        {
            DateTime birthDate = new DateTime(2000, 1, 1);
            DateTime now = DateTime.Now;
            DateTime soon = now.AddMinutes(1);

            TimeSpan min = now - birthDate;
            TimeSpan max = soon - birthDate;

            Person person = new Person
            {
                BirthDate = birthDate
            };

            Assert.IsTrue(person.Age > min);
            Assert.IsTrue(person.Age < max);
        }

        [TestMethod]
        public void Age_GivenDeathDate_ShouldCalculateCorrectly()
        {
            DateTime birthDate = new DateTime(2000, 1, 1);
            DateTime deathDate = new DateTime(2050, 1, 1);

            TimeSpan expected = deathDate - birthDate;

            Person person = new Person
            {
                BirthDate = birthDate,
                DeathDate = deathDate
            };

            Assert.AreEqual(expected, person.Age);
        }

        #endregion
    }
}
