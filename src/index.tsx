import React from "react";
import { render } from "react-dom";
import { Title } from "./title";
import { RangeSlider } from "./slider";
import { Checkbox } from "./checkbox";

render(<Title text={"Followers"} />, document.getElementById("TitleFollowers"));
render(<RangeSlider />, document.getElementById("Slider"));
render(<Checkbox />, document.getElementById("JoinedLeft"));