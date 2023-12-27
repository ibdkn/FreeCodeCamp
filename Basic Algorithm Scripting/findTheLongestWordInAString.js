// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.

function findLongestWordLength(str) {
    let result = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < result.length; i++) {
        if (result[i].length > maxLength) {
            maxLength = result[i].length;
        }
    }

    return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));