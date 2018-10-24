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
                Assert.IsNull(actual, "Expected Person list to be null");
                return;
            }

            Assert.IsNotNull(actual, "Expected Person list to not be null");
            Assert.AreEqual(expected.Count, actual.Count, $"Expected Person list to have {expected.Count} items");
            for (int i = 0; i < expected.Count; i++)
            {
                AssertPeopleAreEqual(expected[i], actual[i]);
            }
        }

        public static void AssertPeopleAreEqual(Person expected, Person actual)
        {
            if (expected == null)
            {
                Assert.IsNull(actual, "Expected Person to be null");
                return;
            }
            Assert.IsNotNull(actual, "Expected Person to not be null");
            Assert.AreEqual(expected.FirstName, actual.FirstName, $"Expected {nameof(expected.FirstName)} to be {expected.FirstName}");
            Assert.AreEqual(expected.LastName, actual.LastName, $"Expected {nameof(expected.LastName)} to be {expected.LastName}");
            Assert.AreEqual(expected.BirthDate, actual.BirthDate, $"Expected {nameof(expected.BirthDate)} to be {expected.BirthDate}");
            Assert.AreEqual(expected.DeathDate, actual.DeathDate, $"Expected {nameof(expected.DeathDate)} to be {expected.DeathDate}");

            AssertImagesAreEqual(expected.Image, actual.Image);
            AssertAddressesAreEqual(expected.Address, actual.Address);
            AssertInterestListsAreEqual(expected.Interests, actual.Interests);
        }

        private static void AssertImagesAreEqual(Image expected, Image actual)
        {
            if (expected == null)
            {
                Assert.IsNull(actual, "Expected Image to be null");
                return;
            }

            Assert.IsNotNull(actual, "Expected Image not to be null");
            Assert.AreEqual(expected.Name, actual.Name, $"Expected {nameof(expected.Name)} to be {expected.Name}");
            Assert.AreEqual(expected.ContentType, actual.ContentType, $"Expected {nameof(expected.ContentType)} to be {expected.ContentType}");
            AssertImageFilesAreEqual(expected.File, actual.File);
        }

        private static void AssertImageFilesAreEqual(byte[] expected, byte[] actual)
        {
            if (expected == null)
            {
                Assert.IsNull(actual, "Expected image File to be null");
                return;
            }

            Assert.IsNotNull(actual, "Expected image File to not be null");
            Assert.AreEqual(expected.Length, actual.Length, $"Expected image File to have {expected.Length} bytes");

            for (int i = 0; i < expected.Length; i++)
            {
                Assert.AreEqual(expected[i], actual[i], $"Invalid image File byte at position {i}");
            }
        }

        private static void AssertAddressesAreEqual(Address expected, Address actual)
        {
            if (expected == null)
            {
                Assert.IsNull(actual, "Expected Address to be null");
                return;
            }

            Assert.IsNotNull(actual, "Expected Address not to be null");
            Assert.AreEqual(expected.Address1, actual.Address1, $"Expected {nameof(expected.Address1)} to be {expected.Address1}");
            Assert.AreEqual(expected.Address2, actual.Address2, $"Expected {nameof(expected.Address2)} to be {expected.Address2}");
            Assert.AreEqual(expected.City, actual.City, $"Expected {nameof(expected.City)} to be {expected.City}");
            Assert.AreEqual(expected.State, actual.State, $"Expected {nameof(expected.State)} to be {expected.State}");
            Assert.AreEqual(expected.Zip, actual.Zip, $"Expected {nameof(expected.Zip)} to be {expected.Zip}");
        }

        private static void AssertInterestListsAreEqual(IList<Interest> expected, IList<Interest> actual)
        {
            if (expected == null)
            {
                Assert.IsNull(actual, "Expected Interest list to be null");
                return;
            }

            Assert.IsNotNull(actual, "Expected Interest list to not be null");
            Assert.AreEqual(expected.Count, actual.Count, $"Expected Interest list to have {expected.Count} items");

            for (int i = 0; i < expected.Count; i++)
            {
                Assert.AreEqual(expected[i].Name, actual[i].Name, $"Expected {nameof(Interest.Name)} to be {expected[i].Name}");
            }
        }

        #endregion
    }
}
