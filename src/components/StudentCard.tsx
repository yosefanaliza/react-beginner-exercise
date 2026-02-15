// =============================================================================
// STUDENT CARD COMPONENT - StudentCard.tsx
// =============================================================================
//
// CONCEPTS DEMONSTRATED:
//   1. Props - receiving data from a parent component
//   2. Conditional rendering - showing different UI based on data values
//   3. Component composition - using other components (Card, SubjectList) inside
//
// CONDITIONAL RENDERING PATTERNS USED HERE:
//
//   Pattern 1: Ternary operator (condition ? ifTrue : ifFalse)
//     Used for: Online/Offline status badge, Pass/Fail label
//     Example: isOnline ? "Online" : "Offline"
//
//   Pattern 2: Logical AND (condition && <Element />)
//     Used for: Honor Roll indicator (only shows if grade >= 90)
//     Example: grade >= 90 && <span>Honor Roll</span>
//     How it works: if the condition is false, React renders nothing.
//
//   Pattern 3: Conditional CSS classes
//     Used for: Changing colors based on status/grade
//     Example: className={`badge ${isOnline ? "online" : "offline"}`}
// =============================================================================

import type { Student } from "../data/students";
import { Card } from "./Card";
import { SubjectList } from "./SubjectList";

/**
 * Props interface for StudentCard.
 *
 * Instead of listing every field individually, we reference the Student
 * interface we already defined. This keeps things DRY (Don't Repeat Yourself).
 *
 * We use "student: Student" to pass the whole student object as a single prop.
 * An alternative approach would be to destructure individual fields as props:
 *   interface StudentCardProps { name: string; age: number; grade: number; ... }
 * Both approaches are valid; passing the whole object is simpler for this case.
 */
interface StudentCardProps {
  student: Student;
  onToggleOnline: (id: number) => void;
}

/**
 * StudentCard component - displays a single student's information
 * with conditional rendering for status, grades, and achievements.
 */
export function StudentCard({ student, onToggleOnline }: StudentCardProps) {

  // Destructure the student object for easier access to individual fields.
  // This is a JavaScript feature, not React-specific.
  const { name, age, grade, isOnline, subjects } = student;

  // Determine if the student is passing (grade >= 60)
  const isPassing = grade >= 60;

  // Determine if the student made the honor roll (grade >= 90)
  const isHonorRoll = grade >= 90;

  return (
    // Here we USE the Card component as a wrapper.
    // Everything between <Card> and </Card> becomes the "children" prop.
    <Card className="student-card">
      {/* ---- HEADER: Name + Online Status ---- */}
      <div className="student-header">
        <h3 className="student-name">{name}</h3>

        {/*
          CONDITIONAL RENDERING - Pattern 1: Ternary operator
          If isOnline is true, show "Online" with green styling.
          If isOnline is false, show "Offline" with gray styling.
        */}
        <button
          className={`status-badge ${isOnline ? "online" : "offline"}`}
          onClick={() => onToggleOnline(student.id)}
        >
          {isOnline ? "Online" : "Offline"}
        </button>
      </div>

      {/* ---- BODY: Student details ---- */}
      <div className="student-details">
        <p className="student-info">
          <strong>Age:</strong> {age}
        </p>

        <p className="student-info">
          <strong>Grade:</strong> {grade}%
          {/*
            CONDITIONAL RENDERING - Pattern 1: Ternary operator
            Show "Pass" or "Fail" label next to the grade number.
            We also apply different CSS classes for the color.
          */}
          <span className={`grade-badge ${isPassing ? "pass" : "fail"}`}>
            {isPassing ? "Pass" : "Fail"}
          </span>
        </p>

        {/*
          CONDITIONAL RENDERING - Pattern 2: Logical AND (&&)
          The honor roll badge ONLY renders if isHonorRoll is true.
          If isHonorRoll is false, the entire expression evaluates to false,
          and React renders nothing for this line.
        */}
        {isHonorRoll && (
          <p className="honor-roll">
            ★ Honor Roll
          </p>
        )}
      </div>

      {/* ---- FOOTER: Subject list ---- */}
      {/*
        COMPONENT COMPOSITION:
        We pass the subjects array down as a prop to SubjectList.
        SubjectList will handle iterating over the array and rendering each subject.
        This is "props drilling" - passing data from parent to child.
      */}
      <SubjectList subjects={subjects} />
    </Card>
  );
}
