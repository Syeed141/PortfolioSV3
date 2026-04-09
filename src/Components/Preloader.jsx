import { useEffect } from "react";

export default function Preloader({ onFinish }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "";
      onFinish();
    }, 1850);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="preloader">
      <div className="name-text">
        <span>S</span>
        <span>Y</span>
        <span>E</span>
        <span>E</span>
        <span>D</span>
      </div>

      <div className="bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
