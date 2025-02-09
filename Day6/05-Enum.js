/*

enum TestResult {
Pass,
Fail,
Skip

}

function logTestResult (testName: string, result : TestResult): void {

    console.log(`Test : ${testName}`,`Result Code : ${result}`);

}
//enumName.member
logTestResult("Login page",TestResult.Pass)
logTestResult("SignUp",TestResult.Fail)
logTestResult("Update Profile",TestResult.Skip) */
//String enum
/* enum BrowserType{
    Chrome = "chrome",
    Firefox="firefox",
    Edge = "edge",
    Webkit="webkit",

}
function launchBrowser (browserType :BrowserType ){

    console.log(`Launch browser using ${browserType}`)

}
launchBrowser(BrowserType.Chrome)
launchBrowser(BrowserType.Edge) */
//heterogenous enum
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["Open"] = 0] = "Open";
    BrowserStatus[BrowserStatus["Incognito"] = 1] = "Incognito";
    BrowserStatus["Crash"] = "crashed";
    BrowserStatus[BrowserStatus["close"] = 2] = "close";
    BrowserStatus[BrowserStatus["unknown"] = 3] = "unknown";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    return "Current browser is ".concat(status);
}
console.log(reportBrowserStatus(BrowserStatus.Incognito));
console.log(reportBrowserStatus(BrowserStatus.Crash));
console.log(reportBrowserStatus(BrowserStatus.close));
console.log(reportBrowserStatus(BrowserStatus.unknown));
