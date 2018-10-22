using Microsoft.Extensions.Configuration;
using PeopleSearch.Utils.Interfaces;
using System;
using System.Threading;

namespace PeopleSearch.Utils
{
    /// <summary>
    /// Latency simulation utility.
    /// </summary>
    public class LatencySimulator : ILatencySimulator
    {
        private readonly IConfiguration _config;

        /// <summary>
        /// Constructor which expects an IConfiguration for configuring the min and max delay.
        /// </summary>
        /// <param name="config">The IConfiguration for configuring the delay.</param>
        public LatencySimulator(IConfiguration config)
        {
            _config = config;
        }

        /// <summary>
        /// Simulates a random delay.
        /// </summary>
        public void RandomDelay()
        {
            int minSleep = _config.GetValue<int>("LatencySimulation:MinDelayMS");
            int maxSleep = _config.GetValue<int>("LatencySimulation:MaxDelayMS");

            Random random = new Random();
            int delayDuration = random.Next(minSleep, maxSleep);

            Thread.Sleep(delayDuration);
        }
    }
}
