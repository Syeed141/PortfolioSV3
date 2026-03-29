import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const interactive = document.querySelectorAll("a, button, .cursor-hover");

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      className={`neo-pointer ${isHovering ? "neo-pointer--hover" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <svg
        className="neo-pointer__svg"
        viewBox="0 0 28 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="neo-pointer__fill"
          d="M2 2 L22 16 L14 18 L19 32 L13 34 L8 20 L2 24 Z"
        />
        <path
          className="neo-pointer__stroke"
          d="M2 2 L22 16 L14 18 L19 32 L13 34 L8 20 L2 24 Z"
        />
      </svg>
    </div>
  );
}