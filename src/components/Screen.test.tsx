import React from "react";
import { mount } from "enzyme";
import { Screen } from "./Screen";

describe("Screen render check", () => {
  it("Default render", () => {
    expect(
      mount(<Screen />).html()
    ).toBe("<img src=\"\">");
  });
});