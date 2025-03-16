/**
 * Custom reporter implementation for Playwright test framework.
 * Implements the Reporter interface to handle test run events and log messages.
 */
import type {
    FullConfig, FullResult, Reporter, Suite, TestCase, TestResult
  } from '@playwright/test/reporter';
  
  class MyReporter implements Reporter {
  
    /**
     * Called when the test run begins.
     * @param config The full configuration object for the test run.
     * @param suite The suite object representing the test suite being executed.
     */
    onBegin(config: FullConfig, suite: Suite) {
      console.log(`Starting the run with ${suite.allTests().length} tests`);
    }
  
    /**
     * Called when an individual test begins execution.
     * @param test The test case object representing the test being executed.
     * @param result The test result object for the current test.
     */
    onTestBegin(test: TestCase, result: TestResult) {
      console.log(`Starting test ${test.title}`);
    }
  
    /**
     * Called when an individual test finishes execution.
     * @param test The test case object representing the test that finished.
     * @param result The test result object containing the outcome of the test.
     */
    onTestEnd(test: TestCase, result: TestResult) {
      console.log(`Finished test ${test.title}: ${result.status}`);
    }
  
    /**
     * Called when the entire test run finishes.
     * @param result The full result object containing the outcome of the entire test run.
     */
    onEnd(result: FullResult) {
      console.log(`Finished the run: ${result.status}`);
    }
  }
  
  export default MyReporter;
  