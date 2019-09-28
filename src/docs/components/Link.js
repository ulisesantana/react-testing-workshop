import React from "react";

export const Link = ({ text, to, goForward = false, ...props }) => (
  <a href={to} target={goForward ? "_self" : "_blank"} {...props}>
    {text}
  </a>
);

export default Link;
