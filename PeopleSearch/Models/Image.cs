using System.ComponentModel.DataAnnotations;

namespace PeopleSearch.Models
{
    //todo: comments
    public class Image
    {
        public long Id { get; set; }

        [Required]
        [DataType(DataType.Text)]
        [MaxLength(200)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Upload)]
        public byte[] Data { get; set; }

        [DataType(DataType.Text)]
        [MaxLength(20)]
        public string ContentType { get; set; }
    }
}
