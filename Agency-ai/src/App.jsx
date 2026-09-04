import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import Teams from "./components/Teams";

const App = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  // );
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });
  return (
    <div className="relative dark:bg-gray-900">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* custom cursor ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
        style={{ transition: "transform 0.1s ease-out" }}
      />

      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
      />
    </div>
  );
};

export default App;
