const { defineConfig } = require("cypress");
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
module.exports = defineConfig({
  spec: "cypress/**/*.spec.js",
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  viewportWidth: 1920,
  viewportHeight: 1280,

  e2e: {
    setupNodeEvents(on, config) {
      on('after:run', (results) => {
        console.log('after:run event triggered');
        console.log(`Total tests: ${results.totalTests}`);
        console.log(`Total passed: ${results.totalPassed}`);
        console.log(`Total failed: ${results.totalFailed}`);

        const reportsDir = path.resolve(__dirname, 'cypress/reports');

        if (!fs.existsSync(reportsDir)) {
          fs.mkdirSync(reportsDir, { recursive: true });
        }

        try {
          console.log('Merging reports...');
          execSync(`npx mochawesome-merge ${reportsDir}/*.json > ${reportsDir}/report.json`, { stdio: 'inherit' });
          console.log('Reports merged successfully.');

          console.log('Generating HTML report...');
          execSync(`npx marge ${reportsDir}/report.json -f report -o ${reportsDir}`, { stdio: 'inherit' });
          console.log('Report generated successfully.');
        } catch (error) {
          console.error(`Error during report generation: ${error.message}`);
        }
      });
    },

    specPattern: 'cypress/**/*.spec.js',
    browsers: [
      {
        name: 'chrome',
        family: 'chromium',
        channel: 'stable',
        displayName: 'Chrome',
        version: '123.0.0.0',
        path: 'C:\Program Files\Google\Chrome\Application\chrome.exe',
        minSupportedVersion: 64,
        majorVersion: '125',
        launchOptions: {
          args: [
            "--wm-window-animations-disabled",
            "--animation-duration-scale=0"
          ]
        }
      },
    ]
  },
});
