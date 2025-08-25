"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function TextDemo() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "اقامت در رامسر، تجربه‌ای متفاوت",
        "اقامتی دلنشین در قلب جنگل و دریا",
        "لحظه‌هایی ناب، در اقامتگاه‌های رامسر",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="animate-blink my-7 text-2xl font-bold text-white">
      <span ref={el} />
    </div>
  );
}

export default TextDemo;
