function areCommentsProperlyFormatted(input) {
    let multiLineCommentOpen = false;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "/" && input[i + 1] === "*") {
            if (multiLineCommentOpen) {
                // Nested or unmatched "/*"
                return false;
            }
            multiLineCommentOpen = true;
            i++; // Skip the '*' in "/*"
        } else if (input[i] === "*" && input[i + 1] === "/") {
            if (!multiLineCommentOpen) {
                // Closing "*/" without an opening "/*"
                return false;
            }
            multiLineCommentOpen = false;
            i++; // Skip the '/' in "*/"
        } else if (input[i] === "/" && input[i + 1] === "/") {
            if (multiLineCommentOpen) {
                // Single-line comment inside a multi-line comment
                return false;
            }
            i++; // Skip the second '/' in "//"
        } else if (i === input.length - 1 && input[i] === "/") {
            // If a single '/' is found at the end, it's incomplete
            return false;
        }
    }

    // If there is an unclosed multi-line comment
    return !multiLineCommentOpen;
}

// Test cases
console.log(areCommentsProperlyFormatted("//////")); // true
console.log(areCommentsProperlyFormatted("/**//**////**/")); // true
console.log(areCommentsProperlyFormatted("///*/**/")); // false
console.log(areCommentsProperlyFormatted("/////")); // false
console.log(areCommentsProperlyFormatted("/")); // false
console.log(areCommentsProperlyFormatted("/*/")); // false
console.log(areCommentsProperlyFormatted("/* */")); // true
