import React from "react";
import { mount } from "enzyme";
import { Field } from "./Field";

describe("Field render check", () => {
  it("Default render", () => {
    expect(
      mount(<Field x={2} y={2} />).html()
    ).toBe("<div style=\"display: grid; justify-content: start; grid-template-columns: auto auto; grid-template-rows: auto auto;\"><div style=\"width: 35px; height: 35px; border: 1px solid;\">x1y1</div><div style=\"width: 35px; height: 35px; border: 1px solid;\">x2y1</div><div style=\"width: 35px; height: 35px; border: 1px solid;\">x1y2</div><div style=\"width: 35px; height: 35px; border: 1px solid;\">x2y2</div></div>");
  });
});