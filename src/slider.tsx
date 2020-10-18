import React from "react";

function handleClick() {
  console.log("Изменение диапазона.");
}

export const RangeSlider = () => (
  <input type="range" min="0" max="100" step="1" onInput={handleClick}/>
);