"use client";
import { useEffect, useRef } from "react";

export default function Cursor3D() {
  const cursorRef = useRef(null);
  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  useEffect(() => {
    const cursor = cursorRef.current;

    // Guardar posición real del mouse
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animación suave (lerp para flotación)
    const animate = () => {
      // Lerp para suavizar el movimiento
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
          width: "40px", // 👈 lo puedes agrandar aquí
          height: "40px",
          filter: "drop-shadow(0 0 25px white)", // aura blanca
          transform: "translate3d(0,0,0) translate(-50%, -50%)",
          willChange: "transform",
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












