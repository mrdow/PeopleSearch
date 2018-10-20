using PeopleSearch.Models;
using System;

namespace PeopleSearch.Test.Helpers
{
    public class TestData
    {
        #region Person Data

        public Person TestPerson1 = new Person
        {
            FirstName = "Alex",
            LastName = "Dow",
            BirthDate = new DateTime(1988, 11, 1),
            Address = new Address { Address1 = "6821 Upland Dr", City = "Arlington", State = StateCode.WA, Zip = "98223" },
            Interests = new Interest[]
                    {
                        new Interest { Name = "Hiking" },
                        new Interest { Name = "Financial podcasts" },
                        new Interest { Name = "Football" }
                    }
        };

        public Person TestPerson2 = new Person
        {
            FirstName = "Elvis",
            LastName = "Presley",
            BirthDate = new DateTime(1935, 1, 8),
            DeathDate = new DateTime(1977, 8, 16),
            Address = new Address { Address1 = "3764 Elvis Presley Blvd", City = "Memphis", State = StateCode.TN, Zip = "38116" },
            Interests = new Interest[]
                    {
                        new Interest { Name = "Music" },
                        new Interest { Name = "Martial arts" },
                        new Interest { Name = "Football" }
                    }
        };

        #endregion
    }
}
