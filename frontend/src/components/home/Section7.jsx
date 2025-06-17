import { useRef, useEffect } from "react";
import gsap from "gsap";

const Section7 = () => {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Animate Header on mount
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate Card on mount
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      ease: "power3.out"
    });

    // Animate Button Hover
    const button = buttonRef.current;

    const onEnter = () => {
      gsap.to(button, {
        scale: 1.1,
        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        rotate: 3,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const onLeave = () => {
      gsap.to(button, {
        scale: 1,
        rotate: 0,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        duration: 0.4,
        ease: "power2.inOut"
      });
    };

    button.addEventListener("mouseenter", onEnter);
    button.addEventListener("mouseleave", onLeave);

    return () => {
      button.removeEventListener("mouseenter", onEnter);
      button.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col justify-center items-center p-10">
      <h1
        ref={headerRef}
        className="text-white text-4xl md:text-5xl font-bold mb-10 garnetFont"
      >
        GSAP Playground 🚀
      </h1>

      <div
        ref={cardRef}
        className="bg-white rounded-2xl shadow-xl p-8 w-[300px] mb-10 text-center"
      >
        <p className="text-gray-700 text-lg font-semibold">
          Smooth Card Animation
        </p>
        <p className="text-sm text-gray-500 mt-2">
          This card fades & slides in using GSAP.
        </p>
      </div>

      <button
        ref={buttonRef}
        className="ring-2 ring-white text-darkBlue py-3 px-10 md:py-4 md:px-12 rounded-[25px] garnetFont hover:bg-black hover:text-white hover:border-2 hover:border-white text-lg"
      >
        Hover Me
      </button>
    </div>
  );
};

export default Section7;
