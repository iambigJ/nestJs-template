const customObject = {
    [Symbol.toStringTag]: 'CustomObject',
    data: 'Example Data',
    valueOf() {
        return this.data; // Custom valueOf method for the object
    },
};

console.log(customObject.toString()); // Output: "[object CustomObject]"
// console.log(String(customObject)); // Output: "Example Data"
//
// // Checking the object's toStringTag property
// console.log(Object.prototype.toString.call(customObject)); // Output: "[object CustomObject]"
//
// // Using Object.prototype.toString without Symbol.toStringTag
// const plainObject = {
//     data: 'Plain Object Data',
// };
//
// console.log(plainObject.toString()); // Output: "[object Object]"