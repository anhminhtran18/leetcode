/**
 * 2619. Array Prototype Last (TypeScript Version)
 * https://leetcode.com/problems/array-prototype-last/
 * Difficulty: Easy
 *
 * Đề bài:
 * Viết code mở rộng tất cả các array để có thể gọi phương thức array.last()
 * trên bất kỳ array nào và nó sẽ trả về phần tử cuối cùng.
 * Nếu không có phần tử nào trong array, trả về -1.
 */
// ============================================
// CÁCH 1: Index Access (Recommended)
// ============================================
/**
 * Type-safe implementation using generic T
 * this: T[] - TypeScript biết this là một array của type T
 * Return type: T | -1 - trả về phần tử type T hoặc số -1
 */
Array.prototype.last = function () {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};
// ============================================
// CÁCH 2: Slice approach
// ============================================
Array.prototype.lastV2 = function () {
    if (this.length === 0) {
        return -1;
    }
    return this.slice(-1)[0];
};
// ============================================
// CÁCH 3: at() method (ES2022)
// ============================================
/**
 * Sử dụng optional chaining và nullish coalescing
 * at(-1) có thể trả về undefined nếu mảng rỗng
 */
Array.prototype.lastV3 = function () {
    return this.at(-1) ?? -1;
};
// ============================================
// CÁCH 4: Destructuring với rest
// ============================================
Array.prototype.lastV4 = function () {
    if (this.length === 0) {
        return -1;
    }
    // Lấy phần tử đầu nếu chỉ có 1 phần tử
    if (this.length === 1) {
        return this[0];
    }
    // Còn không thì lấy phần tử cuối
    const rest = this.slice(1);
    return rest[rest.length - 1];
};
// ============================================
// CÁCH 5: Pop với spread
// ============================================
Array.prototype.lastV5 = function () {
    if (this.length === 0) {
        return -1;
    }
    const copy = [...this];
    return copy.pop(); // Non-null assertion vì copy không rỗng
};
// ============================================
// CÁCH 6: Reduce
// ============================================
Array.prototype.lastV6 = function () {
    if (this.length === 0) {
        return -1;
    }
    return this.reduce((_, curr) => curr);
};
// ============================================
// TYPE TESTS - Kiểm tra type inference
// ============================================
// Test với number array
const numArray = [1, 2, 3, 4, 5];
const lastNum = numArray.last(); // TypeScript hiểu là number | -1
console.log("Number array last:", lastNum); // 5
// Test với string array
const strArray = ["a", "b", "c"];
const lastStr = strArray.last(); // TypeScript hiểu là string | -1
console.log("String array last:", lastStr); // "c"
// Test với mixed types (union types)
const mixedArray = ["hello", 42, true];
const lastMixed = mixedArray.last();
console.log("Mixed array last:", lastMixed); // true
// Test với empty array
const emptyArray = [];
const lastEmpty = emptyArray.last(); // TypeScript vẫn hiểu đúng type
console.log("Empty array last:", lastEmpty); // -1
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
const lastUser = users.last(); // TypeScript hiểu là User | -1
console.log("User array last:", lastUser); // { id: 3, name: "Charlie" }
// ============================================
// TEST CASES ĐẦY ĐỦ
// ============================================
console.log("\n=== TypeScript Test Cases ===");
// Test case 1: [null, {}, 3]
const test1 = [null, {}, 3];
console.log("Test 1 - [null, {}, 3]:", test1.last()); // Expected: 3
// Test case 2: []
const test2 = [];
console.log("Test 2 - []:", test2.last()); // Expected: -1
// Test case 3: [1]
const test3 = [1];
console.log("Test 3 - [1]:", test3.last()); // Expected: 1
// Test case 4: ['a', 'b', 'c']
const test4 = ["a", "b", "c"];
console.log("Test 4 - ['a', 'b', 'c']:", test4.last()); // Expected: 'c'
export {};
