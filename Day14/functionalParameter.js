function userDetails(firstname, lastname, isActive, phno) {
    if (isActive === void 0) { isActive = true; }
    console.log("User Details ".concat(firstname, " ,").concat(lastname, ",").concat(isActive));
}
userDetails("Vidya", "R", true);
userDetails("sathish", "johnson", false, 896780757);
