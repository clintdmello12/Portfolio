import { useEffect, useState } from "react";

export function InteractiveBackground() {
  const [position, setPosition] = useState({ x: 50, y: 28 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({
        x: Math.round((event.clientX / window.innerWidth) * 100),
        y: Math.round((event.clientY / window.innerHeight) * 100),
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      className="interactive-bg"
      style={{
        "--cursor-x": `${position.x}%`,
        "--cursor-y": `${position.y}%`,
      }}
      aria-hidden="true"
    >
      <span className="bg-grid" />
      <span className="bg-aurora aurora-one" />
      <span className="bg-aurora aurora-two" />
      <span className="bg-cursor-glow" />
    </div>
  );
}
