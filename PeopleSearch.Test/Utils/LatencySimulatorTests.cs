using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PeopleSearch.API.Utils;
using IConfiguration = Microsoft.Extensions.Configuration.IConfiguration;

namespace PeopleSearch.Test.Utils
{
    [ExcludeFromCodeCoverage]
    [TestClass]
    public class LatencySimulatorTests
    {
        #region RandomDelay Tests

        // Some additional buffer time to account for function overhead in case the max delay occurs
        private readonly int MAX_EXPECTED_OVERHEAD = 50;

        [TestMethod]
        public void RandomDelay_GivenNullConfig_ShouldNotThrowException()
        {
            // Arrange
            LatencySimulator latencySimulator = new LatencySimulator(null);

            try
            {
                // Act
                latencySimulator.RandomDelay();
            }
            catch
            {
                // Assert
                Assert.Fail();
            }
        }

        [TestMethod]
        public void RandomDelay_GivenNoRangeConfigured_ShouldNotWait()
        {
            // Arrange
            IConfiguration config = new ConfigurationBuilder().Build();

            LatencySimulator latencySimulator = new LatencySimulator(config);

            // Act
            var stopwatch = Stopwatch.StartNew();
            latencySimulator.RandomDelay();
            stopwatch.Stop();

            // Assert
            Assert.IsTrue(stopwatch.ElapsedMilliseconds < MAX_EXPECTED_OVERHEAD);
        }

        [TestMethod]
        public void RandomDelay_GivenShortDelayRange_ShouldWaitWithinRange()
        {
            // Arrange
            int minDelay = 10;
            int maxDelay = 500;

            IConfiguration config = new ConfigurationBuilder()
                .AddInMemoryCollection(new List<KeyValuePair<string, string>>
                {
                    new KeyValuePair<string, string>("LatencySimulation:MinDelayMS", minDelay.ToString()),
                    new KeyValuePair<string, string>("LatencySimulation:MaxDelayMS", maxDelay.ToString())
                })
                .Build();

            LatencySimulator latencySimulator = new LatencySimulator(config);

            // Act
            var stopwatch = Stopwatch.StartNew();
            latencySimulator.RandomDelay();
            stopwatch.Stop();

            // Assert
            Assert.IsTrue(stopwatch.ElapsedMilliseconds > minDelay);
            Assert.IsTrue(stopwatch.ElapsedMilliseconds < maxDelay + MAX_EXPECTED_OVERHEAD);
        }

        [TestMethod]
        public void RandomDelay_GivenLongDelayRange_ShouldWaitWithinRange()
        {
            // Arrange
            int minDelay = 1000;
            int maxDelay = 5000;

            IConfiguration config = new ConfigurationBuilder()
                .AddInMemoryCollection(new List<KeyValuePair<string, string>>
                {
                    new KeyValuePair<string, string>("LatencySimulation:MinDelayMS", minDelay.ToString()),
                    new KeyValuePair<string, string>("LatencySimulation:MaxDelayMS", maxDelay.ToString())
                })
                .Build();

            LatencySimulator latencySimulator = new LatencySimulator(config);

            // Act
            var stopwatch = Stopwatch.StartNew();
            latencySimulator.RandomDelay();
            stopwatch.Stop();

            // Assert
            Assert.IsTrue(stopwatch.ElapsedMilliseconds > minDelay);
            Assert.IsTrue(stopwatch.ElapsedMilliseconds < maxDelay + MAX_EXPECTED_OVERHEAD);
        }

        #endregion
    }
}
