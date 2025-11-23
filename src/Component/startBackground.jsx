import { useEffect, useState } from "react";

export const StartBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handelResize= () => {
      generateStars();
    };

    window.addEventListener("resize", handelResize);

    return() => window.removeEventListener("resize", handelResize);
  }, []);

  {
    /* generateStar */
  }
  const generateStars = () => {
    const numberOfStar = Math.floor(
      (window.innerWidth * window.innerHeight) / 1000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStar; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  {
    /* generateMeteors */
  }
  const generateMeteors = () => {
    const numberOfMeteors = 5;
    const newMeteors = [];

    for (let i= 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1 + 1 ,
        x: Math.random() * 100,
        y: Math.random() * 0,
        animationDelay: Math.random() * 5,
        animationDuration: Math.random() * 3 + 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          className="star"
          key={star.id}
          style={{
            position: "absolute",
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "px",
            top: star.y + "px",
            backgroundColor: "white",
            borderRadius: "50%",
            opacity: star.opacity,
            animationDuration: star.duration + "s",
          }}
        ></div>
      ))}

      {meteors.map((meteor) => (
        <div
          className="meteor"
          key={meteor.id}
          style={{
            position: "absolute",
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            backgroundColor: "white",
            borderRadius: "50%",
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration + "s",
          }}
        ></div>
      ))}
    </div>
  );
};
