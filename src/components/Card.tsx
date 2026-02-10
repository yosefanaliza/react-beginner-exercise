// =============================================================================
// CARD COMPONENT - Card.tsx
// =============================================================================
//
// CONCEPT DEMONSTRATED: The "children" prop
//
// The "children" prop is a special prop in React. It represents whatever
// content you place BETWEEN the opening and closing tags of a component:
//
//   <Card>
//     <p>This paragraph is the "children"</p>
//   </Card>
//
// This pattern is called a "wrapper" or "container" component. It lets you
// create reusable layouts without knowing what content will go inside.
//
// Think of it like a picture frame - the frame (Card) stays the same,
// but you can put any picture (children) inside it.
// =============================================================================

import type { ReactNode } from "react";

/**
 * Props interface for the Card component.
 *
 * "children" has the type ReactNode, which means it can accept:
 *   - JSX elements (<div>, <p>, custom components, etc.)
 *   - Strings and numbers
 *   - Arrays of the above
 *   - null or undefined (renders nothing)
 *
 * "className" is optional - it lets the parent add extra CSS classes.
 */
interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card component - a generic wrapper that adds a styled container
 * around whatever content is passed as children.
 *
 * Usage:
 *   <Card>
 *     <h2>Title</h2>
 *     <p>Any content here becomes the "children" prop</p>
 *   </Card>
 */
export function Card({ children, className = "" }: CardProps) {
  return (
    // The "card" CSS class provides the visual styling (border, shadow, etc.)
    // We also merge in any additional className passed from the parent
    <div className={`card ${className}`}>
      {/* Render whatever was passed between <Card> and </Card> */}
      {children}
    </div>
  );
}
