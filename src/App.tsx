import { render } from "enzyme";
import React from "react";
import { Title } from "./Title";
import { Checkbox } from "./Checkbox";

export const App = () => (
<div>
    <Title t = "Followers" />
    <Checkbox l = "Joined" c = "Green" />
    <Checkbox l = "Left" c = "Red" />
</div>
)