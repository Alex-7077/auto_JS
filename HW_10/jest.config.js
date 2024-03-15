module.exports = {
    bail: 0,
    verbose: true,
    testMatch: ["E:/my doc/doc/GitHub/auto js/auto_JS/HW_10/test.js"],
    testTimeout: 5000,
    testEnvironment: "node",
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["lcov", "text"],
    reporters: ["default"],
};