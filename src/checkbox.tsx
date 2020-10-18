import React from "react";

function joinedClick() {
  console.log('По Joined кликнули.');
}

function leftClick() {
  console.log('По Left кликнули.');
}

export const Checkbox = () => (
<div>
  <input type="checkbox" id="joined" defaultChecked onClick={joinedClick}/>
  <label htmlFor="joined">Joined</label>
  <input type="checkbox" id="left" defaultChecked onClick={leftClick}/>
  <label htmlFor="left">Left</label>
</div>
);