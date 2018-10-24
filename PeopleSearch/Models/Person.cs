using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PeopleSearch.Models
{
    /// <summary>
    /// Represents a person.
    /// </summary>
    public class Person
    {
        /// <summary>
        /// A database-generated ID.
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// The person's first name. This field is required and limited to 50 characters.
        /// </summary>
        [Required]
        [Display(Name = "First Name")]
        [StringLength(50)]
        public string FirstName { get; set; }

        /// <summary>
        /// The person's last name. This field is required and limited to 50 characters.
        /// </summary>
        [Required]
        [Display(Name = "Last Name")]
        [StringLength(50)]
        public string LastName { get; set; }

        /// <summary>
        /// The person's Address.
        /// </summary>
        public Address Address { get; set; }

        /// <summary>
        /// The person's birth date. The time is not persisted. This field is required.
        /// </summary>
        [Required]
        [Display(Name = "Birth Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyy}", ApplyFormatInEditMode = true)]
        public DateTime BirthDate { get; set; }

        /// <summary>
        /// The person's death date, if applicable. The time is not persisted. This field in optional.
        /// </summary>
        [Display(Name = "Death Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyy}", ApplyFormatInEditMode = true)]
        public DateTime? DeathDate { get; set; }

        /// <summary>
        /// The person's age derived from either the current date or their death date.
        /// </summary>
        [NotMapped]
        public TimeSpan Age => (DeathDate ?? DateTime.Now) - BirthDate;

        /// <summary>
        /// A list of the person's interests.
        /// </summary>
        public IList<Interest> Interests { get; set; }

        /// <summary>
        /// The person's image.
        /// </summary>
        public Image Image { get; set; }
    }
}
