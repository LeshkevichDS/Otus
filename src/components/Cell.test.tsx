import React from "react";
import { mount } from "enzyme";
import { Cell } from "./Cell";

describe("Cell render check", () => {
  it("Default render", () => {
    expect(
      mount(<Cell x={2} y={2} />).html()
    ).toBe("<div style=\"width: 200px; height: 218px; border: 1px solid;\">x2y2<img src=\"\"></div>");
  });
});