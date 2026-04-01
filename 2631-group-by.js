/**
 * 2631. Group By
 * https://leetcode.com/problems/group-by/
 * Difficulty: Medium
 * Acceptance Rate: 81.4%
 *
 * Đề bài:
 * Viết code mở rộng tất cả các array để có thể gọi phương thức array.groupBy(fn)
 * trên bất kỳ array nào. Phương thức trả về một object đã được group.
 *
 * Object group là một object mà mỗi key là output của fn(arr[i])
 * và mỗi value là một array chứa tất cả các items trong array gốc
 * tạo ra key đó.
 *
 * Hàm callback fn nhận một item và trả về một string key.
 * Thứ tự của mỗi value list phải là thứ tự items xuất hiện trong array.
 * Thứ tự của các keys có thể bất kỳ.
 *
 * Không được dùng lodash's _.groupBy.
 *
 * Ví dụ 1:
 * Input: array = [{"id":"1"}, {"id":"1"}, {"id":"2"}]
 *        fn = function (item) { return item.id; }
 * Output: { "1": [{"id": "1"}, {"id": "1"}], "2": [{"id": "2"}] }
 *
 * Ví dụ 2:
 * Input: array = [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
 *        fn = function (list) { return String(list[0]); }
 * Output: { "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] }
 *
 * Ví dụ 3:
 * Input: array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *        fn = function (n) { return String(n > 5); }
 * Output: { "true": [6, 7, 8, 9, 10], "false": [1, 2, 3, 4, 5] }
 *
 * Constraints:
 * - 0 <= array.length <= 10^5
 * - fn returns a string
 */

// ============================================
// CÁCH 1: Sử dụng for...of loop (Recommended)
// ============================================
/**
 * Ý tưởng:
 * - Khởi tạo object rỗng để lưu kết quả
 * - Dùng for...of để lặp qua từng phần tử với index
 * - Tính key bằng cách gọi fn(item)
 * - Nếu key chưa tồn tại, khởi tạo với mảng rỗng
 * - Push item vào mảng tương ứng với key
 *
 * Độ phức tạp:
 * - Time: O(n) - duyệt qua n phần tử một lần
 * - Space: O(n) - lưu tất cả phần tử vào object kết quả
 *
 * Ưu điểm: Rõ ràng, dễ đọc, hiệu suất tốt
 * Nhược điểm: Không có
 */
Array.prototype.groupBy = function (fn) {
  const result = {};

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const key = fn(item);

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
};

// ============================================
// CÁCH 2: Sử dụng reduce (Functional approach)
// ============================================
/**
 * Ý tưởng:
 * - Dùng reduce để tích lũy kết quả vào một object
 * - Mỗi lần lặp, tính key và thêm item vào array tương ứng
 *
 * Độ phức tạp:
 * - Time: O(n)
 * - Space: O(n)
 *
 * Ưu điểm: Functional style, concise
 * Nhược điểm: Có thể khó đọc với người mới
 */
Array.prototype.groupByV2 = function (fn) {
  return this.reduce((acc, item) => {
    const key = fn(item);
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
};

// ============================================
// CÁCH 3: Sử dụng forEach
// ============================================
/**
 * Ý tưởng:
 * - Tương tự cách 1 nhưng dùng forEach thay vì for loop
 * - Cleaner syntax, dễ đọc hơn
 */
Array.prototype.groupByV3 = function (fn) {
  const result = {};

  this.forEach((item) => {
    const key = fn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  });

  return result;
};

// ============================================
// CÁCH 4: Sử dụng Object.groupBy (ES2024 - Experimental)
// ============================================
/**
 * Ý tưởng:
 * - Sử dụng phương thức Object.groupBy có sẵn (ES2024)
 * - Hàm này tương tự như cách mình implement
 *
 * ⚠️ Lưu ý: Chỉ hoạt động trên môi trường hỗ trợ ES2024+
 * Hiện tại (2026) đã được hỗ trợ rộng rãi
 */
Array.prototype.groupByV4 = function (fn) {
  // Object.groupBy được thêm vào ES2024
  // Nó trả về object null-prototype (không có __proto__)
  if (typeof Object.groupBy === "function") {
    return Object.groupBy(this, fn);
  }
  // Fallback về cách 1 nếu không hỗ trợ
  return this.groupBy(fn);
};

// ============================================
// CÁCH 5: Sử dụng Map trung gian
// ============================================
/**
 * Ý tưởng:
 * - Dùng Map để lưu trữ tạm thời (hiệu quả hơn object cho key phức tạp)
 * - Convert Map thành object khi return
 *
 * Độ phức tạp:
 * - Time: O(n)
 * - Space: O(n)
 *
 * Ưu điểm: Map cho phép key bất kỳ type (nếu mở rộng sau này)
 * Nhược điểm: Phải convert Map -> Object, tốn thêm bước
 */
Array.prototype.groupByV5 = function (fn) {
  const map = new Map();

  for (const item of this) {
    const key = fn(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(item);
  }

  // Convert Map to Object
  const result = {};
  for (const [key, value] of map) {
    result[key] = value;
  }

  return result;
};

// ============================================
// TEST CASES
// ============================================

console.log("=== Test Case 1: Group objects by id ===");
const array1 = [{ id: "1" }, { id: "1" }, { id: "2" }];
const fn1 = (item) => item.id;
console.log("Input:", JSON.stringify(array1));
console.log("Output:", JSON.stringify(array1.groupBy(fn1)));
// Expected: { "1": [{"id":"1"}, {"id":"1"}], "2": [{"id":"2"}] }

console.log("\n=== Test Case 2: Group arrays by first element ===");
const array2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];
const fn2 = (list) => String(list[0]);
console.log("Input:", JSON.stringify(array2));
console.log("Output:", JSON.stringify(array2.groupBy(fn2)));
// Expected: { "1": [[1,2,3], [1,3,5], [1,5,9]] }

console.log("\n=== Test Case 3: Group numbers by condition ===");
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fn3 = (n) => String(n > 5);
console.log("Input:", JSON.stringify(array3));
console.log("Output:", JSON.stringify(array3.groupBy(fn3)));
// Expected: { "true": [6,7,8,9,10], "false": [1,2,3,4,5] }

console.log("\n=== Test Case 4: Empty array ===");
const array4 = [];
const fn4 = (x) => String(x);
console.log("Input:", JSON.stringify(array4));
console.log("Output:", JSON.stringify(array4.groupBy(fn4)));
// Expected: {}

console.log("\n=== Test Case 5: Test all variants ===");
const array5 = ["apple", "apricot", "banana", "blueberry", "cherry"];
const fn5 = (s) => s[0]; // Group by first letter
console.log("Input:", JSON.stringify(array5));
console.log("groupBy():", JSON.stringify(array5.groupBy(fn5)));
console.log("groupByV2():", JSON.stringify(array5.groupByV2(fn5)));
console.log("groupByV3():", JSON.stringify(array5.groupByV3(fn5)));

// ============================================
// ĐÁP ÁN GỬI LEETCODE
// ============================================

/**
 * Đáp án gọn nhất (Cách 1):
 *
 * ```javascript
 * Array.prototype.groupBy = function(fn) {
 *     const result = {};
 *     for (let i = 0; i < this.length; i++) {
 *         const key = fn(this[i]);
 *         result[key] = result[key] || [];
 *         result[key].push(this[i]);
 *     }
 *     return result;
 * };
 * ```
 *
 * Hoặc dùng reduce (Cách 2):
 *
 * ```javascript
 * Array.prototype.groupBy = function(fn) {
 *     return this.reduce((acc, item) => {
 *         const key = fn(item);
 *         acc[key] = acc[key] || [];
 *         acc[key].push(item);
 *         return acc;
 *     }, {});
 * };
 * ```
 */
