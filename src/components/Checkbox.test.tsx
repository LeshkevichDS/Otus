import React from "react";
import { shallow } from "enzyme";

import { Checkbox } from "./Checkbox";

describe("Checkbox render check", () => {
  it("Default render", () => {
    expect(
      shallow(<Checkbox l="Joined" c="Green" />).matchesElement(
        <div>
          <input type="checkbox" id="Joined" defaultChecked/>
          <label htmlFor="Joined"  style={{color: "Green"}}>Joined</label>
        </div>
      )
    ).toBe(true);
  });
});