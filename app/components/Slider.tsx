// my-telegram-mini-app/app/components/Slider.tsx
import React, { useState, useCallback, useEffect } from "react";

interface SliderProps {
  name: string;
  value: number;
  onChange: (name: string, value: string) => void;
  min: number;
  max: number;
}

const Slider: React.FC<SliderProps> = ({ name, value, onChange, min, max }) => {
  const [isSliding, setIsSliding] = useState(false);

  const handleMouseDown = () => {
    setIsSliding(true);
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isSliding) {
        const sliderRect = document
          .getElementById(`slider-${name}`)
          ?.getBoundingClientRect();
        if (sliderRect) {
          const sliderWidth = sliderRect.width;
          const offsetX = event.clientX - sliderRect.left;
          const percentage = Math.min(Math.max(offsetX / sliderWidth, 0), 1);
          const newValue = Math.round(percentage * (max - min) + min);
          onChange(name, newValue.toString());
        }
      }
    },
    [isSliding, min, max, name, onChange]
  );

  const handleMouseUp = () => {
    setIsSliding(false);
  };

  useEffect(() => {
    if (isSliding) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isSliding, handleMouseMove]);

  const handleSliderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const sliderRect = event.currentTarget.getBoundingClientRect();
    const sliderWidth = sliderRect.width;
    const offsetX = event.clientX - sliderRect.left;
    const percentage = Math.min(Math.max(offsetX / sliderWidth, 0), 1);
    const newValue = Math.round(percentage * (max - min) + min);
    onChange(name, newValue.toString());
  };

  return (
    <div
      dir="ltr"
      className="relative flex w-full touch-none select-none items-center py-2 cursor-pointer mx-2"
      id={`slider-${name}`}
      onClick={handleSliderClick}
    >
      <span
        data-orientation="horizontal"
        className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-600"
      >
        <span
          data-orientation="horizontal"
          style={{
            width: `${((value - min) / (max - min)) * 100}%`, // Current value width
            height: "100%",
            backgroundColor: "green", // Change this to your desired color
            borderRadius: "inherit",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></span>
        <span
          data-orientation="horizontal"
          style={{
            width: `${((max - value) / (max - min)) * 100}%`, // Remaining width
            height: "100%",
            backgroundColor: "rgb(75, 85, 99)", // Change this to your desired background color
            borderRadius: "inherit",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        ></span>
      </span>
      <span
        style={{
          transform: "translateX(-50%)",
          position: "absolute",
          left: `${((value - min) / (max - min)) * 100}%`,
        }}
      >
        <span
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-orientation="horizontal"
          tabIndex={0}
          className="block h-4 w-4 rounded-full border bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-300 disabled:pointer-events-none disabled:opacity-50"
          aria-valuenow={value}
          onMouseDown={handleMouseDown}
        ></span>
      </span>
    </div>
  );
};

export default Slider;
