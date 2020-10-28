import React from "react";
import { shallow } from "enzyme";

import { Title } from "./Title";

describe("Title render check", () => {
  it("Default render", () => {
    expect(
      shallow(<Title t="Followers" />).matchesElement(
        <h1>Followers</h1>
      )
    ).toBe(true);
  });
});