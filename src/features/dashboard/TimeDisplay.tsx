import { useEffect, useRef, useState } from "react";

const TimeDisplay = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());
  const timeRef = useRef(new Date().toLocaleTimeString());
  const [animationFrameRef, setAnimationFrameRef] = useState<number>(0);

  useEffect(() => {
    const animation = () => {
      const timeFromState = timeRef.current;
      const currentTime = new Date().toLocaleTimeString();

      if (timeFromState !== currentTime) {
        timeRef.current = currentTime;
        setTime(currentTime);
      }

      setAnimationFrameRef(window.requestAnimationFrame(animation));
    };

    window.requestAnimationFrame(animation);

    return () => {
      cancelAnimationFrame(animationFrameRef);
    };
  }, []);

  return <span className="text-slate-100 tabular-nums">{time}</span>;
};

export { TimeDisplay };
