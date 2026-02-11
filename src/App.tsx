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

import { useState } from "react";
import { students } from "./data/students";
import { StudentCard } from "./components/StudentCard";
import "./App.css";

type Filter = "all" | "online" | "honor";

function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredStudents = students.filter((s) => {
    if (activeFilter === "online") return s.isOnline;
    if (activeFilter === "honor") return s.grade >= 90;
    return true;
  });

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

      {/* Summary statistics - each stat is a filter button */}
      <div className="stats-bar">
        <button
          className={`stat ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          <span className="stat-number">{students.length}</span>
          <span className="stat-label">Total Students</span>
        </button>
        <button
          className={`stat ${activeFilter === "online" ? "active" : ""}`}
          onClick={() => setActiveFilter("online")}
        >
          <span className="stat-number">
            {students.filter((s) => s.isOnline).length}
          </span>
          <span className="stat-label">Online Now</span>
        </button>
        <button
          className={`stat ${activeFilter === "honor" ? "active" : ""}`}
          onClick={() => setActiveFilter("honor")}
        >
          <span className="stat-number">
            {students.filter((s) => s.grade >= 90).length}
          </span>
          <span className="stat-label">Honor Roll</span>
        </button>
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

      {/* Student cards grid - filtered by active filter */}
      <main className="student-grid">
        {filteredStudents.map((student) => (
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
