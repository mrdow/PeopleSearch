using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;
using PeopleSearch.API.Models;

namespace PeopleSearch.Test.Helpers
{
    [ExcludeFromCodeCoverage]
    public class TestData
    {
        public static Person TestPerson1() => new Person
        {
            FirstName = "Alex",
            LastName = "Dow",
            BirthDate = new DateTime(1988, 11, 1),
            Address = new Address { Address1 = "6821 Upland Dr", City = "Arlington", State = StateCode.WA, Zip = "98223" },
            Interests = new List<Interest>
                    {
                        new Interest { Name = "Hiking" },
                        new Interest { Name = "Financial podcasts" },
                        new Interest { Name = "Football" }
                    },
            Image = new Image
            {
                Name = "AlexDow.jpg",
                ContentType = "image/jpeg",
                File= Encoding.ASCII.GetBytes("Alex")
            }
        };

        public static Person TestPerson2() => new Person
        {
            FirstName = "Elvis",
            LastName = "Presley",
            BirthDate = new DateTime(1935, 1, 8),
            DeathDate = new DateTime(1977, 8, 16),
            Address = new Address { Address1 = "3764 Elvis Presley Blvd", City = "Memphis", State = StateCode.TN, Zip = "38116" },
            Interests = new List<Interest>
                    {
                        new Interest { Name = "Music" },
                        new Interest { Name = "Martial arts" },
                        new Interest { Name = "Football" }
                    },
            Image = new Image
            {
                Name = "ElvisPresley.jpg",
                ContentType = "image/jpeg",
                File = Encoding.ASCII.GetBytes("Elvis")
            }
        };
    }
}
