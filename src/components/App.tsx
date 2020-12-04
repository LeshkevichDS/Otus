import React from "react";
import { Field } from "./Field";
import { Screen, ErrorScreen } from "./Screen";


export const App = () => (
  <>
    <Field x = {6} y = {4} />
    <ErrorScreen><Screen /></ErrorScreen>
  </>
) 