import { useEffect } from "react";

export default function NeoBlob({
  size = "w-64 h-64",
  position = "top-10 left-10",
  gradient = "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500",
  className = "",
}) {
  // Create floating animation using inline style
  useEffect(() => {
    const blob = document.getElementById("neo-blob");
    let x = 0, y = 0, dx = 0.3, dy = 0.2;

    const animate = () => {
      x += dx;
      y += dy;
      blob.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
      if (x > 30 || x < -30) dx = -dx;
      if (y > 30 || y < -30) dy = -dy;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div
      id="neo-blob"
      className={`
        absolute ${position} ${size} ${gradient} 
        rounded-full blur-3xl opacity-70 ${className}
      `}
      style={{ transition: "transform 0.1s linear" }}
    ></div>
  );
}
