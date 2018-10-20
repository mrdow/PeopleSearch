using Microsoft.VisualStudio.TestTools.UnitTesting;
using PeopleSearch.Models;
using System.Collections.Generic;

namespace PeopleSearch.Test.Helpers
{
    internal class ModelComparisonHelper
    {
        #region Helper Methods

        public static void AssertPersonListsAreEqual(IList<Person> expected, IList<Person> actual)
        {
            if (expected == null)
            {
                Assert.IsNull(actual);
                return;
            }

            Assert.AreEqual(expected.Count, actual.Count);
            for (int i = 0; i < expected.Count; i++)
            {
                AssertPeopleAreEqual(expected[i], actual[i]);
            }
        }

        public static void AssertPeopleAreEqual(Person expected, Person actual)
        {
            if (expected != null)
            {
                Assert.IsNotNull(actual);
                Assert.AreEqual(expected.FirstName, actual.FirstName);
                Assert.AreEqual(expected.LastName, actual.LastName);
                Assert.AreEqual(expected.BirthDate, actual.BirthDate);
                Assert.AreEqual(expected.DeathDate, actual.DeathDate);
                Assert.AreEqual(expected.Image, actual.Image);

                AssertAddressesAreEqual(expected.Address, actual.Address);
                AssertInterestListsAreEqual(expected.Interests, actual.Interests);
            }
        }

        private static void AssertAddressesAreEqual(Address expected, Address actual)
        {
            if (expected != null)
            {
                Assert.IsNotNull(actual);
                Assert.AreEqual(expected.Address1, actual.Address1);
                Assert.AreEqual(expected.Address2, actual.Address2);
                Assert.AreEqual(expected.City, actual.City);
                Assert.AreEqual(expected.State, actual.State);
                Assert.AreEqual(expected.Zip, actual.Zip);
            }
        }

        private static void AssertInterestListsAreEqual(IList<Interest> expected, IList<Interest> actual)
        {
            if (expected != null)
            {
                Assert.IsNotNull(actual);
                Assert.AreEqual(expected.Count, actual.Count);

                for (int i = 0; i < expected.Count; i++)
                {
                    Assert.AreEqual(expected[i].Name, actual[i].Name);
                }
            }
        }

        #endregion
    }
}
