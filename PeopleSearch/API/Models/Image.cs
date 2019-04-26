using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.Serialization;

namespace PeopleSearch.API.Models
{
    /// <summary>
    /// Represents an image file.
    /// </summary>
    [ExcludeFromCodeCoverage]
    public class Image
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
        /// The name of the Image.
        /// </summary>
        [Required]
        [DataType(DataType.Text)]
        [MaxLength(200)]
        public string Name { get; set; }

        /// <summary>
        /// The content type of the Image (e.g. image/jpeg).
        /// </summary>
        [DataType(DataType.Text)]
        [MaxLength(20)]
        public string ContentType { get; set; }

        /// <summary>
        /// The base64-encoded contents of the image.
        /// </summary>
        [Required]
        [DataType(DataType.Upload)]
        public byte[] File { get; set; }
    }
}
