import { useState, useEffect } from "react";
import ScrollToTopIcon from "../images/icons/ScrollToTopIcon";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle p-3 shadow-lg z-3 fade ${
        isVisible ? "show" : ""
      }`}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      type="button"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <ScrollToTopIcon />
    </button>
  );
}
