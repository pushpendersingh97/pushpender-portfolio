import React, { useEffect } from "react";

const StarBackground = () => {
  const [stars, setStars] = React.useState([]);
  const [meteors, setMeteors] = React.useState([]);

  useEffect(() => {
    generateStars();
    generateMetors();
    window.addEventListener("resize", generateStars);
    window.addEventListener("resize", generateMetors);
    return () => {
      window.removeEventListener("resize", generateStars);
      window.removeEventListener("resize", generateMetors);
    };
  }, []);

  const generateStars = () => {
    const noOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < noOfStars; i++) {
      const star = {
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      };
      newStars.push(star);
    }
    setStars(newStars);
  };

  const generateMetors = () => {
    const noOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < noOfMeteors; i++) {
      const meteor = {
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 4 + 2,
      };
      newMeteors.push(meteor);
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-event-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pluse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((star) => (
        <div
          key={star.id}
          className="meteor animate-meteor"
          style={{
            width: `${star.size * 50}px`,
            height: `${star.size * 2}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
