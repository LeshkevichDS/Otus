import React from "react";

export interface CheckboxProps {
  l: string;
  c: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({l, c}) => (
<div>
  <input type="checkbox" id={l} defaultChecked/>
  <label htmlFor={l}  style={{color: `${c}`}}>{l}</label>
</div>
);