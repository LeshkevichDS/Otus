import React from "react";
import { Cell } from "./Cell";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: "Cell",
  decorators: [withKnobs],
};

export const customField = () => [
  <Cell
    x={number("x", 4)}
    y={number("y", 4)}
  />,
];