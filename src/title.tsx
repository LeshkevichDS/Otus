import React from "react";

export interface TitleProps {
    t: string;
}

export const Title: React.FC<TitleProps> = ({t}) => (
<h1>{t}</h1>
);