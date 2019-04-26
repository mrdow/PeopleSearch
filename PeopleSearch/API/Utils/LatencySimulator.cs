using System;
using System.Threading;
using Microsoft.Extensions.Configuration;
using PeopleSearch.API.Utils.Interfaces;

namespace PeopleSearch.API.Utils
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
            if (_config != null)
            {
                int minSleep = _config.GetValue("LatencySimulation:MinDelayMS", 0);
                int maxSleep = _config.GetValue("LatencySimulation:MaxDelayMS", 0);

                Random random = new Random();
                int delayDuration = random.Next(minSleep, maxSleep);

                Thread.Sleep(delayDuration);
            }
        }
    }
}
