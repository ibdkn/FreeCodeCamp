// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

let product = 1;
// Only change code below this line
for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i];
    for (let j = 0; j < subArray.length; j++) {
        product *= subArray[j];
    }
}
// Only change code above this line
return product;