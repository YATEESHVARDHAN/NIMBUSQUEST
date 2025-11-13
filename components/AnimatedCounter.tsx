
import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(end * percentage);
      setCount(currentCount);
      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span>{count}</span>;
};
