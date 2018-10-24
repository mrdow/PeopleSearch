using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace PeopleSearch.Models
{
    /// <summary>
    /// Represents a person's interest.
    /// </summary>
    public class Interest
    {
        /// <summary>
        /// A database-generated ID.
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// Foreign key to the Person table.
        /// </summary>
        [ForeignKey("Person")]
        public long PersonId { get; set; }

        /// <summary>
        /// The related Person.
        /// </summary>
        [IgnoreDataMember]
        public Person Person { get; set; }

        /// <summary>
        /// The name of the interest. This field is required and limited to 200 characters.
        /// </summary>
        [Required]
        [StringLength(200)]
        public string Name { get; set; }
    }
}
