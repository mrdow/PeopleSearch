using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.Serialization;
using PeopleSearch.API.Models.Interfaces;

namespace PeopleSearch.API.Models
{
    /// <summary>
    /// Represents a person's interest.
    /// </summary>
    [ExcludeFromCodeCoverage]
    public class Interest : ISoftDeletable
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

        /// <summary>
        /// Determines whether the entity has been flagged for deletion.
        /// </summary>
        [NotMapped]
        public bool IsDeleted { get; set; }
    }
}
