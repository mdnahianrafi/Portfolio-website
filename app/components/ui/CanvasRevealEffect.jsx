import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000 / 60); // 60 FPS
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn("h-full relative bg-white w-full", containerClassName)}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <div className="h-full w-full relative overflow-hidden">
        <DotMatrix
          colors={colors ?? [[0, 255, 255]]}
          dotSize={dotSize ?? 3}
          opacities={opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]}
          time={time}
          animationSpeed={animationSpeed}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

const DotMatrix = ({
  colors,
  opacities,
  time,
  animationSpeed,
  dotSize,
}) => {
  const totalSize = 4; // Grid size of the dots (adjust as needed)
  const numDots = 100; // Adjust the number of dots in the matrix

  const dots = [];
  for (let i = 0; i < numDots; i++) {
    const x = (i % totalSize) * 100; // Calculate X position
    const y = Math.floor(i / totalSize) * 100; // Calculate Y position

    // Animation logic based on time and random effects
    const opacityIndex = Math.floor(Math.random() * opacities.length);
    const opacity = opacities[opacityIndex];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Dot styling and animation
    dots.push(
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
          opacity: opacity,
          animation: `fadeInOut ${animationSpeed}s infinite ease-in-out ${time % 60}s`,
        }}
      />
    );
  }

  return <>{dots}</>;
};

export default CanvasRevealEffect;

