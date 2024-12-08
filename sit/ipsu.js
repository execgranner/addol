function isIdentifierStart(charCode) {
    return (
        (charCode >= 65 && charCode <= 90) || // A-Z
        (charCode >= 97 && charCode <= 122) || // a-z
        charCode === 95 || // _
        charCode === 36    // $
    );
}
