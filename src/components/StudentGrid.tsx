import { Student } from "../data/students";
import { StudentCard } from "./StudentCard";

interface StudentGridProps {
  students: Student[];
  onToggleOnline: (id: number) => void;
}

export function StudentGrid({ students, onToggleOnline }: StudentGridProps) {
  return (
    <main className="student-grid">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} onToggleOnline={onToggleOnline} />
      ))}
    </main>
  );
}
