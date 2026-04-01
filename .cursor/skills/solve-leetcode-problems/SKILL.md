---
name: solve-leetcode-problems
description: Solve LeetCode problems with multiple JavaScript approaches and create solution files. Use when user provides a LeetCode URL (leetcode.com/problems/) or asks to solve a LeetCode problem. Creates numbered solution files with multiple algorithmic approaches, complexity analysis, and test cases.
---

# LeetCode Problem Solver

Solves LeetCode problems by fetching problem details, explaining multiple approaches in JavaScript, and creating a solution file.

## When to Use

- User pastes a LeetCode problem URL (e.g., `https://leetcode.com/problems/two-sum/`)
- User asks to solve a LeetCode problem by name or number
- User mentions "leetcode" and provides problem context

## Workflow

### Step 1: Fetch Problem Details

1. Extract problem URL from user input
2. Use WebFetch tool to get problem description
3. Parse the following information:
   - Problem number (e.g., 2619)
   - Problem name/slug (e.g., "array-prototype-last")
   - Difficulty (Easy, Medium, Hard)
   - Description and requirements
   - Examples (Input/Output/Explanation)
   - Constraints
   - Hints (if available)

### Step 2: Analyze and Design Solutions

1. Identify the core algorithmic concepts needed
2. Design 3-6 different approaches:
   - **Brute Force**: Simplest but may be slow
   - **Optimized**: Better time/space complexity
   - **One-liner**: Concise, elegant solution
   - **Alternative**: Different paradigm (functional, recursive, etc.)
3. For each approach, determine:
   - Time complexity (Big O)
   - Space complexity (Big O)
   - Trade-offs and when to use

### Step 3: Create Solution File

Create file: `{problem-number}-{problem-slug}.js`

**File structure:**
```javascript
/**
 * {problem-number}. {problem-title}
 * https://leetcode.com/problems/{slug}/
 * Difficulty: {Easy|Medium|Hard}
 * Acceptance Rate: {X%}
 *
 * Đề bài:
 * {Vietnamese translation of the problem description}
 *
 * Ví dụ:
 * {Include examples}
 *
 * Constraints:
 * {Include constraints}
 */

// ============================================
// CÁCH 1: {Approach Name}
// ============================================
/**
 * Ý tưởng:
 * {Explain the approach}
 *
 * Độ phức tạp:
 * - Time: O(?)
 * - Space: O(?)
 *
 * Ưu điểm: {pros}
 * Nhược điểm: {cons}
 */
{solution-code}

// ============================================
// CÁCH 2: {Approach Name}
// ============================================
// ... repeat for each approach

// ============================================
// TEST CASES
// ============================================
{test cases with console.log}

// ============================================
// ĐÁP ÁN GỬI LEETCODE
// ============================================
{The simplest/cleanest solution to submit}
```

### Step 4: Run and Verify

1. Run the solution file with Node.js
2. Verify all test cases pass
3. Fix any errors if needed

### Step 5: Present Results

1. Summarize what was created
2. Show the key approaches in a table
3. Highlight the recommended solution for LeetCode submission
4. Present the user with options to continue (AskQuestion tool)

## Output Format

Always respond in Vietnamese when the user communicates in Vietnamese.

Include:
- Brief summary of the problem
- Table of approaches with complexity
- The file path created
- The recommended LeetCode submission code

## Important Rules

1. **Always fetch the problem** - don't solve from memory
2. **Use JavaScript only** - no TypeScript unless specifically requested
3. **Multiple approaches** - minimum 3 different solutions
4. **Include complexity analysis** - Time and Space Big O for each
5. **Include test cases** - Use provided examples + edge cases
6. **Naming convention** - `{number}-{slug}.js` (e.g., `1-two-sum.js`)
7. **Vietnamese comments** - Explain approaches in Vietnamese
8. **Run verification** - Always test the solution

## Example Response Structure

```
Tui đã tạo file `{filename}` với {N} cách giải!

**Tóm tắt các cách giải:**
| Cách | Phương pháp | Time | Space |
|------|-------------|------|-------|
| Cách 1 | Brute Force | O(n²) | O(1) |
| Cách 2 | Hash Map | O(n) | O(n) |

**Đáp án gửi LeetCode:**
```javascript
{clean solution}
```
```
