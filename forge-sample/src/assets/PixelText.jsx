import { useEffect, useRef } from "react";

export default function PixelText() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const text = "Laravel";
    let particles = [];
    const mouse = { x: null, y: null, radius: 60 };
    let animationFrameId;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const createParticles = () => {
      const rootFontSize =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const targetFontSize = rootFontSize * 20;
      const canvasWidth = Math.min(
        canvas.parentElement?.clientWidth || 1200,
        1200,
      );

      ctx.font = `bold ${targetFontSize}px Arial`;
      const fontSize = rootFontSize * 22; // fixed size

      ctx.font = `bold ${fontSize}px Arial`;
      const textMetrics = ctx.measureText(text);
      const textAscent = textMetrics.actualBoundingBoxAscent || fontSize * 0.75;
      const textDescent =
        textMetrics.actualBoundingBoxDescent || fontSize * 0.2;
      const canvasHeight = Math.ceil(textAscent + textDescent);
      const textBaselineY = canvasHeight - textDescent;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";
      ctx.fillText(text, canvas.width / 2, textBaselineY);

      const textData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const nextParticles = [];
      const particleSize = Math.max(1.5, fontSize / 120);

      for (let y = 0; y < textData.height; y += 4) {
        for (let x = 0; x < textData.width; x += 4) {
          const index = (y * textData.width + x) * 4;
          if (textData.data[index + 3] > 128) {
            nextParticles.push({
              x,
              y,
              baseX: x,
              baseY: y,
              size: particleSize,
            });
          }
        }
      }

      particles = nextParticles;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        const isPointerActive = mouse.x !== null && mouse.y !== null;
        const dx = isPointerActive ? mouse.x - p.x : 0;
        const dy = isPointerActive ? mouse.y - p.y : 0;
        const distance = isPointerActive
          ? Math.sqrt(dx * dx + dy * dy)
          : Infinity;

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 5;
          p.y -= Math.sin(angle) * force * 5;
        } else {
          p.x += (p.baseX - p.x) * 0.05;
          p.y += (p.baseY - p.y) * 0.05;
        }

        ctx.fillStyle = "#007c72";
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    createParticles();
    animate();

    const resizeObserver = new ResizeObserver(createParticles);
    resizeObserver.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const fadeMask =
    "linear-gradient(to bottom, transparent 0%, black 14%, black 76%, transparent 100%)";

  return (
    <div className="bg-black w-full flex justify-center items-end overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block w-full max-w-[1200px]"
        style={{
          WebkitMaskImage: fadeMask,
          maskImage: fadeMask,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />
    </div>
  );
}
