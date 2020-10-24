import React from "react";

export interface Prop {
  l: string;
  c: string;
}

export const Checkbox: React.FC<Prop> = ({l, c}) => (
<div>
  <input type="checkbox" id={l} defaultChecked/>
  <label htmlFor={l}  style={{color: `${c}`}}>{l}</label>
</div>
);