import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedName = () => {
  const nameRef = useRef(null);
  const iconRefs = useRef([]);
  iconRefs.current = [];

  useEffect(() => {
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: nameRef.current,
          start: "top 75%",
        },
      }
    );

    iconRefs.current.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { opacity: 0, x: -50, y: -50, scale: 0.5, rotation: 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 360,
          duration: 1 + index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon,
            start: "top 75%",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center  text-center">
      <div className="relative mb-8">
        <div
          ref={addToRefs}
          className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
        ></div>
        <div
          ref={addToRefs}
          className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
        ></div>
        <div
          ref={addToRefs}
          className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
        ></div>
        <div
          ref={addToRefs}
          className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
        ></div>
        <h1 ref={nameRef} className="text-6xl md:text-8xl font-bold text-white">
          Apply For Tournament Below
        </h1>
      </div>
    </div>
  );
};

export default AnimatedName;
