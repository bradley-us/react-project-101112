import React, { useState } from 'react';

const Triangle = ({ changeColor, stopColor, colorRGB }) => {
  return (
    <div
      style={{ backgroundColor: colorRGB }}
      onMouseOver={changeColor}
      onDoubleClick={stopColor}
      onMouseOut={stopColor}
      className="triangle-shape"
    ></div>
  );
};

const Boxrgb = () => {
  var color = `rgb(${0},${0},${0})`;

  const [colorRGB, setColorRGB] = useState(color);
  const [intervalId, setIntervalId] = useState(0);

  // Function that returns a random number

  // RGB RANDOM
  const randomColorRGB = () => {
    let newColor = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
    };

    let randomColor = `rgb(${newColor.red},
			${newColor.green},
			${newColor.blue})`;

    setColorRGB(randomColor);
  };

  // Function that returns new colors endlessly
  function changeColor() {
    let newIntervalId = setInterval(() => {
      randomColorRGB();
    }, 800);
    setIntervalId(newIntervalId);
  }

  // Function that stops the colors
  function stopColor() {
    clearInterval(intervalId);
    setIntervalId(0);
  }

  return (
    <div>
      <Triangle
        changeColor={changeColor}
        stopColor={stopColor}
        colorRGB={colorRGB}
      ></Triangle>
    </div>
  );
};

export default Boxrgb;

