import React from "react";
import { Helmet } from "react-helmet-async";

export default function Helmets({ text }) {
  return (
    <Helmet>
      <title>Mini Boss || {text}</title>
    </Helmet>
  );
}
