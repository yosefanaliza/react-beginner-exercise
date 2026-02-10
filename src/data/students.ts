// =============================================================================
// DUMMY DATA - students.ts
// =============================================================================
//
// This file contains:
//   1. A TypeScript INTERFACE that defines the shape of a Student object.
//   2. A dummy data ARRAY of student objects to practice rendering.
//
// KEY CONCEPTS:
//   - TypeScript interfaces define the "contract" for your data.
//   - Exporting types and data lets other files import and use them.
// =============================================================================

/**
 * Student interface - defines what properties every student object must have.
 *
 * TypeScript will enforce this shape. If you try to create a student object
 * missing a required field, or with the wrong type, TypeScript will show an error.
 */
export interface Student {
  id: number;
  name: string;
  age: number;
  grade: number; // 0-100 scale
  isOnline: boolean;
  subjects: string[];
}

/**
 * Dummy data array of students.
 *
 * This array is what we will iterate over (using .map()) in our App component
 * to render a list of StudentCard components.
 *
 * Notice how each object matches the Student interface above.
 */
export const students: Student[] = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    grade: 92,
    isOnline: true,
    subjects: ["Mathematics", "Physics", "Computer Science"],
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 22,
    grade: 45,
    isOnline: false,
    subjects: ["History", "English"],
  },
  {
    id: 3,
    name: "Charlie Davis",
    age: 19,
    grade: 78,
    isOnline: true,
    subjects: ["Biology", "Chemistry", "Mathematics"],
  },
  {
    id: 4,
    name: "Diana Martinez",
    age: 21,
    grade: 95,
    isOnline: true,
    subjects: ["Computer Science", "Data Science", "Statistics", "Linear Algebra"],
  },
  {
    id: 5,
    name: "Ethan Brown",
    age: 23,
    grade: 58,
    isOnline: false,
    subjects: ["Philosophy", "Sociology"],
  },
  {
    id: 6,
    name: "Fiona Wilson",
    age: 20,
    grade: 88,
    isOnline: false,
    subjects: ["Art", "Design", "Photography"],
  },
];
