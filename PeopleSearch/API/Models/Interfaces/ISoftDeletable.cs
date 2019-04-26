namespace PeopleSearch.API.Models.Interfaces
{
    /// <summary>
    /// Interface used to indicate that a model can be marked for deletion
    /// </summary>
    public interface ISoftDeletable
    {
        /// <summary>
        /// Determines whether the entity has been flagged for deletion.
        /// </summary>
        bool IsDeleted { get; set; }
    }
}
