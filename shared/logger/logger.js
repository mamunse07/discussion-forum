/**
 * Simple logger utility
 * Used across all services
 */

const logger = {
  info: (message) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  },

  error: (message) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  }
};

module.exports = logger;