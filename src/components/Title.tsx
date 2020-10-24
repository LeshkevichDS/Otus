import React from "react";

export interface Prop {
    t: string;
}

export const Title: React.FC<Prop> = ({t}) => (
<h1>{t}</h1>
);