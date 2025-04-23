function reverseString(string) {
    if (string.length === 1) {
        return string;
    }
    else {
        return string.slice(string.length - 1) + reverseString(string.slice(0, string.length - 1));
    }
}

console.log(reverseString("hello"));