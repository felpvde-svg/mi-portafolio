"use client";
import { useEffect, useRef } from "react";

export default function Cursor3D() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 }); // posición actual
  const target = useRef({ x: 0, y: 0 }); // posición objetivo

  useEffect(() => {
    const cursor = cursorRef.current;
    let animationFrame;

    // Movimiento del mouse
    const handleMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    // Animación del cursor
    const animate = () => {
      // 👇 ajusta el "0.3" para hacerlo más rápido (más cerca a 1) o más suave (más cerca a 0.05)
      pos.current.x += (target.current.x - pos.current.x) * 1;
      pos.current.y += (target.current.y - pos.current.y) * 1;

      if (cursor) {
        cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <img
        ref={cursorRef}
        src="/cursor.png"
        alt="Cursor Fantasma"
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: "40px",
          height: "40px",
          filter: "drop-shadow(0 0 25px white)",
          transform: "translate3d(0,0,0) translate(-50%, -50%)",
          willChange: "transform",
          transition: "filter 0.2s ease", // efecto suave en aura
        }}
      />

      {/* Ocultar el cursor normal */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}












