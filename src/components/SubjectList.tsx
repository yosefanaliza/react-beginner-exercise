// =============================================================================
// SUBJECT LIST COMPONENT - SubjectList.tsx
// =============================================================================
//
// CONCEPT DEMONSTRATED: Rendering via iteration (.map())
//
// In React, when you have an array of data and want to render a list of
// elements, you use the JavaScript .map() method. This transforms each
// item in the array into a JSX element.
//
// IMPORTANT: When rendering lists, every element needs a unique "key" prop.
// React uses keys to efficiently update the DOM when the list changes.
// The key should be something unique to each item (like an ID), or as a
// last resort, the array index.
//
// Array.map() recap:
//   [1, 2, 3].map(num => num * 2)  =>  [2, 4, 6]
//   ["a", "b"].map(letter => <li>{letter}</li>)  =>  [<li>a</li>, <li>b</li>]
// =============================================================================

/**
 * Props interface for SubjectList.
 *
 * This component receives a single prop: an array of subject name strings.
 * This is a clear example of passing data down via props.
 */
interface SubjectListProps {
  subjects: string[];
}

/**
 * SubjectList component - receives an array of subject names and renders
 * each one as a styled badge/tag.
 *
 * This demonstrates:
 *   1. Accepting an array as a prop
 *   2. Using .map() to iterate over the array and render JSX for each item
 *   3. Using the "key" prop for list rendering
 */
export function SubjectList({ subjects }: SubjectListProps) {
  return (
    <div className="subject-list">
      <h4 className="subject-list-title">Subjects:</h4>
      <div className="subject-tags">
        {/*
          .map() iterates over each subject in the array.
          For each subject, it returns a <span> element.

          The "key" prop is required by React for list items.
          Here we use the subject name as the key since subjects
          are unique within each student. In real apps, you'd
          typically use an ID.
        */}
        {subjects.map((subject) => (
          <span key={subject} className="subject-tag">
            {subject}
          </span>
        ))}
      </div>
    </div>
  );
}
