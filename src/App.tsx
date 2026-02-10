// =============================================================================
// APP COMPONENT - App.tsx
// =============================================================================
//
// This is the ROOT component of our application. It is the top of the
// component tree. Everything else is rendered inside this component.
//
// CONCEPTS DEMONSTRATED:
//   1. Importing and using data (the students array)
//   2. Rendering a LIST via iteration (.map())
//   3. Passing PROPS to child components
//   4. Component composition (App -> StudentCard -> Card + SubjectList)
//
// COMPONENT TREE:
//   App
//   ├── StudentCard (for each student in the array)
//   │   ├── Card (wrapper using children prop)
//   │   │   ├── Student header (name + online status)
//   │   │   ├── Student details (age, grade, honor roll)
//   │   │   └── SubjectList (iterates over subjects array)
// =============================================================================

import { students } from "./data/students";
import { StudentCard } from "./components/StudentCard";
import "./App.css";

/**
 * App component - the main entry point of our React application.
 *
 * It imports the students array and maps over it to render a
 * StudentCard for each student.
 */
function App() {
  return (
    <div className="app">
      {/* Page header */}
      <header className="app-header">
        <h1>Student Dashboard</h1>
        <p className="app-subtitle">
          A React exercise demonstrating: Props, Children, Iteration, and
          Conditional Rendering
        </p>
      </header>

      {/* Summary statistics - demonstrates using array methods on data */}
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-number">{students.length}</span>
          <span className="stat-label">Total Students</span>
        </div>
        <div className="stat">
          <span className="stat-number">
            {students.filter((s) => s.isOnline).length}
          </span>
          <span className="stat-label">Online Now</span>
        </div>
        <div className="stat">
          <span className="stat-number">
            {students.filter((s) => s.grade >= 90).length}
          </span>
          <span className="stat-label">Honor Roll</span>
        </div>
        <div className="stat">
          <span className="stat-number">
            {Math.round(
              students.reduce((sum, s) => sum + s.grade, 0) / students.length
            )}
            %
          </span>
          <span className="stat-label">Avg. Grade</span>
        </div>
      </div>

      {/* Student cards grid */}
      {/*
        RENDERING VIA ITERATION:
        We use .map() to transform each student object in the array
        into a <StudentCard /> component.

        For each student, we:
          1. Pass the student object as a prop (student={student})
          2. Set a unique "key" prop (key={student.id})

        The "key" prop is CRITICAL for React's reconciliation algorithm.
        It helps React know which items changed, were added, or removed.
        Always use a stable, unique identifier (like an ID) as the key.
        Avoid using array index as key when the list can reorder.
      */}
      <main className="student-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </main>

      {/* Footer with concept reference */}
      <footer className="app-footer">
        <h3>React Concepts Used in This Page</h3>
        <ul className="concepts-list">
          <li>
            <strong>Props:</strong> StudentCard receives the student object as a
            prop. SubjectList receives the subjects array as a prop.
          </li>
          <li>
            <strong>Children:</strong> The Card component uses the children prop
            to wrap StudentCard's content in a styled container.
          </li>
          <li>
            <strong>Iteration (.map):</strong> App.tsx maps over the students
            array to render multiple StudentCards. SubjectList maps over the
            subjects array to render tags.
          </li>
          <li>
            <strong>Conditional Rendering:</strong> Ternary operators for
            Online/Offline and Pass/Fail. Logical AND (&&) for the Honor Roll
            badge.
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
