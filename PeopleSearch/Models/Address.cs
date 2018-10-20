using System.ComponentModel.DataAnnotations;

namespace PeopleSearch.Models
{
    /// <summary>
    /// An enum representing all the accepted State codes for an Address.
    /// </summary>
    public enum StateCode
    {
        AL,
        AK,
        AZ,
        AR,
        CA,
        CO,
        CT,
        DE,
        DC,
        FL,
        GA,
        HI,
        ID,
        IL,
        IN,
        IA,
        KS,
        KY,
        LA,
        ME,
        MD,
        MA,
        MI,
        MN,
        MS,
        MO,
        MT,
        NE,
        NV,
        NH,
        NJ,
        NM,
        NY,
        NC,
        ND,
        OH,
        OK,
        OR,
        PA,
        RI,
        SC,
        SD,
        TN,
        TX,
        UT,
        VT,
        VA,
        WA,
        WV,
        WI,
        WY
    }

    /// <summary>
    /// Represents an address in the USA.
    /// </summary>
    public class Address
    {
        /// <summary>
        /// A database-generated Id.
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// The first line of the address. This line is required and limited to 100 characters.
        /// </summary>
        [Required]
        [Display(Name = "Address 1")]
        [StringLength(100)]
        public string Address1 { get; set; }

        /// <summary>
        /// An optional second line of the address. This line is optional and limited to 100 characters.
        /// </summary>
        [Display(Name = "Address 2")]
        [StringLength(100)]
        public string Address2 { get; set; }

        /// <summary>
        /// The City the address belongs to. This field is required and limited to 50 characters.
        /// </summary>
        [Required]
        [StringLength(50)]
        public string City { get; set; }

        /// <summary>
        /// The state the address belongs to. This field is required and is limited to the supported set of StateCodes.
        /// </summary>
        [Required]
        public StateCode State { get; set; }

        /// <summary>
        /// The ZIP code the address belongs to. This field is required and must be either 5 digits or 9 digits with a dash.
        /// </summary>
        [Required]
        [RegularExpression(@"^\d{5}(-\d{4})?$", ErrorMessage = "Invalid Zip")]
        public string Zip { get; set; }
    }
}
