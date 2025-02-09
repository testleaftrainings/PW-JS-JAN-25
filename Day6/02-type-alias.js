var productId = 7654;
productId = 'R7654';
var accountNumber = "0023132313";
accountNumber = 248916496;
accountNumber = false;
function invokeBrowsers(browserName) {
    if (browserName === "Chrome") {
        console.log("Launch Chrome browser");
    }
    else {
        console.log("Launch Firefox browser");
    }
}
invokeBrowsers("Firefox");
var userProfile = {
    adminName: "TestLeaf",
    name: "Ravi",
    priveleges: ['server'],
    empId: 1111,
    date: "09-02-2025"
};
console.log(userProfile.adminName);
console.log(userProfile.priveleges);
