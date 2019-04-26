namespace PeopleSearch.API.Utils.Interfaces
{
    /// <summary>
    /// Latency simulation utility.
    /// </summary>
    public interface ILatencySimulator
    {
        /// <summary>
        /// Simulates a random delay.
        /// </summary>
        void RandomDelay();
    }
}
