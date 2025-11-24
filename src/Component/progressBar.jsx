import { useEffect, useState } from "react";

export const ProgressBar = ({ Level }) => {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setScale(Level / 100);
    }, 50);

    return () => clearTimeout();
  }, [Level]);

  return (
    <div className="w-full bg-gray-800 rounded-full overflow-hidden">
      <div
        className="bg-purple-500  h-2 rounded-full origin-left transition-transform duration-1000 ease-in-out "
        style={{ transform: `scaleX(${scale}) ` }}
      />
    </div>
  );
};
