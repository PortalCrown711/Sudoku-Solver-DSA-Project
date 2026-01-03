# 🧩 Sudoku Solver – DSA Mini Project

This project implements a **Sudoku Solver** using the **Backtracking Algorithm**.  
It is developed as a **static webpage** to demonstrate core **Data Structures and Algorithms (DSA)** concepts such as recursion, constraint checking, and backtracking.

---

## 🎯 Aim
To design and develop an efficient Sudoku Solver that automatically solves a given Sudoku puzzle using the Backtracking algorithm and provides an interactive web-based interface for users.

---

## 🎯 Objectives
- To understand and implement the Backtracking algorithm.
- To apply recursion to solve constraint-based problems.
- To validate Sudoku rules for rows, columns, and 3×3 sub-grids.
- To provide a simple and user-friendly interface.
- To deploy the project using GitHub Pages.

---

## 🧠 Problem Statement
Sudoku is a logic-based puzzle where a 9×9 grid must be filled with digits from 1 to 9 such that:
- Each number appears only once in each row,
- Each number appears only once in each column,
- Each number appears only once in each 3×3 sub-grid.

Manually solving Sudoku can be time-consuming and error-prone. This project provides an automated and efficient solution using DSA concepts.

---

## 🛠️ Solution Approach
The project uses the **Backtracking Algorithm**, a recursive technique that tries all possible numbers in empty cells and backtracks whenever a constraint is violated.

### Algorithm Steps:
1. Identify an empty cell in the Sudoku grid.
2. Try placing numbers from 1 to 9.
3. Check if the number placement is valid.
4. Recursively attempt to solve the remaining grid.
5. Backtrack if no valid number is found.

---

## 🖥️ Project Overview
- Users can manually enter Sudoku values or load predefined sample inputs.
- The system processes the input using backtracking.
- The solved Sudoku is displayed instantly in the browser.
- Invalid puzzles are detected and reported.

---

## 📌 Scope of the Project
- Solves standard 9×9 Sudoku puzzles.
- Demonstrates recursion and backtracking.
- Includes multiple test cases (valid, easy, invalid).
- Fully client-side (no backend).

### Limitations
- Works only for 9×9 Sudoku grids.
- Does not generate new Sudoku puzzles.

---

## ✅ Key Outcomes / Results
- Correctly solves valid Sudoku puzzles.
- Detects invalid Sudoku configurations.
- Demonstrates efficient DSA implementation.
- Successfully deployed as a static webpage.

---

## 🧪 Sample Inputs
The project includes multiple predefined Sudoku puzzles:
- Sample 1: Standard valid Sudoku
- Sample 2: Easy Sudoku
- Sample 3: Invalid Sudoku (no solution)

---

## 📂 Project Structure
sudoku-solver/
│── index.html
│── style.css
│── script.js
│── README.md


---

## 🚀 How to Run the Project
1. Clone or download the repository
2. Open `index.html` in any web browser
3. Enter Sudoku values or click **Load Sample**
4. Click **Solve** to see the result

---

## 🌐 Deployed Project
🔗 **Live Demo:**  
(Replace with your actual GitHub Pages link)


---

## 🧑‍🤝‍🧑 Team Members
- Prince Pal  - 109
- Shailendra Pal  - 110
- Utkarsh Pandey - 119
- Aryan Patel - 123
- Jay Kanade - 66
- Suman Kewat - 68
- Aditi Patil  - 125

*(All members are added as collaborators in the GitHub repository.)*

---

## 📚 Technologies Used
- HTML
- CSS
- JavaScript
- Data Structures & Algorithms (Backtracking)

---

## ⏱️ Time & Space Complexity
- **Time Complexity:** O(9^(n×n)) (worst case, heavily pruned)
- **Space Complexity:** O(n×n) due to recursion and board storage

---

## 🎓 Academic Use
This project is developed as a **DSA Mini Project** for academic evaluation and learning purposes.

---
