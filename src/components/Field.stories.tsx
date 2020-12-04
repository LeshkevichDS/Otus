import React from "react";
import { Field } from "./Field";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: "Field",
  decorators: [withKnobs],
};

export const СustomField = () => [
  <Field
    x={number("x", 4)}
    y={number("y", 4)}
  />,
];