import React from "react";
import { mount } from "enzyme";
import { Screen, getUrl } from "./Screen";

describe("Screen render check", () => {
  it("Default render", () => {
    expect(
      mount(<Screen />).html()
    ).toBe("<div><h1>Lifecycle Screen</h1><h2>Интервал 1000</h2><button>-</button><img src=\"\"><button>+</button></div>");
  });
});

describe("Get local transformed links", () => {
  it("test for correct id", () => {
    expect(getUrl(-11)).toBe(`https://picsum.photos/id/1/200`);
    expect(getUrl(1)).toBe(`https://picsum.photos/id/1/200`);
    expect(getUrl(10)).toBe(`https://picsum.photos/id/10/200`);
    expect(getUrl(100)).toBe(`https://picsum.photos/id/100/200`);
    expect(getUrl(1000)).toBe(`https://picsum.photos/id/1000/200`);
    expect(getUrl(1011)).toBe(`https://picsum.photos/id/1000/200`);
  });
});