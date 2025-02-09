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

enum BrowserStatus {
Open,
Incognito,
Crash = "crashed",
close=2,
unknown
}

function reportBrowserStatus(status : BrowserStatus) : string {
return `Current browser is ${status}`
}

console.log(reportBrowserStatus(BrowserStatus.Incognito));
console.log(reportBrowserStatus(BrowserStatus.Crash));
console.log(reportBrowserStatus(BrowserStatus.close));
console.log(reportBrowserStatus(BrowserStatus.unknown));